export default {
  async fetch(request, env, ctx) {
    const cacheUrl = new URL(request.url)

    // Use the request as the cache key so query params are part of it
    const cacheKey = new Request(cacheUrl.toString(), request)
    const cache = caches.default

    // 1. Try cache
    let response = await cache.match(cacheKey)

    if (!response) {
      console.log('Cache miss! Generating fresh response...')

      // 2. Produce or fetch fresh content
      // Example: fetch from an origin (uncomment to use)
      // response = await fetch('https://example.com/data')

      // For demo we'll generate content
      response = new Response('<html><body><h1>Fresh content</h1></body></html>', {
        headers: { 'Content-Type': 'text/html' },
      })

      // 3. Clone and set caching headers
      response = new Response(response.body, response)
      response.headers.set('Cache-Control', 'public, s-maxage=3600')

      // 4. Write to cache async so we return immediately
      ctx.waitUntil(cache.put(cacheKey, response.clone()))
    } else {
      console.log('Cache hit! Serving from edge cache.')
    }

    return response
  },
}
