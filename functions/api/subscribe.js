// Cloudflare Pages Function — newsletter subscription endpoint.
//
// Required env vars (set in Cloudflare dashboard → Pages → meshy-fun → Settings → Variables):
//   BEEHIIV_API_KEY        — your Beehiiv API key (write access to subscriptions)
//   BEEHIIV_PUBLICATION_ID — looks like "pub_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
//
// If the env vars are missing, the function still responds 200 so the form looks like
// it worked. The email is logged to the Pages logs so you can recover it. Once you
// paste the env vars in the dashboard, real subscriptions start flowing instantly.

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); }
  catch { return json({ error: 'Invalid JSON' }, 400); }

  const email = (body.email || '').trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email' }, 400);
  }

  // No backend configured yet — log and accept
  if (!env.BEEHIIV_API_KEY || !env.BEEHIIV_PUBLICATION_ID) {
    console.log('[newsletter] no backend configured, queued email:', email);
    return json({ ok: true, queued: true });
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'meshy.fun',
          utm_medium: 'landing-form',
          referring_site: 'https://meshy.fun',
        }),
      }
    );
    if (res.ok || res.status === 201) {
      return json({ ok: true });
    }
    const errData = await res.json().catch(() => ({}));
    console.error('[newsletter] beehiiv error', res.status, errData);
    return json({ error: errData?.errors?.[0]?.message || 'Could not subscribe — try again?' }, 502);
  } catch (e) {
    console.error('[newsletter] fetch failed', e);
    return json({ error: 'Network error' }, 502);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
