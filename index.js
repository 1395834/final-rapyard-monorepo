export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return fetch(`https://${env.API_HOST}${url.pathname.replace("/api","")}`, request);
    }

    if (url.pathname.startsWith("/cdn/")) {
      return fetch(`https://${env.CF_HOST}${url.pathname.replace("/cdn","")}`, request);
    }

    if (url.pathname.startsWith("/auth/")) {
      return new Response(JSON.stringify({ ok: true, service: "auth" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
