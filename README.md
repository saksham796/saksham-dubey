# leapcell

This repository contains the open source version of my porfolio website.
Do check it out!

## Instructions 🛠️

I have modified the gsap club plugins with the trial plugins, but with the trial plugin you cannot host it🔴. So for Club plugins, Check out here: https://gsap.com/docs/v3/Installation/

### Development

Cloudflare Cache API example
----------------------------

A small Cloudflare Worker example using the standard Cache API is included at `workers/cache-worker.js`.

Quick usage:

- Deploy with Wrangler or add it to your Cloudflare Workers setup. Example:

```bash
# publish a standalone Worker script
wrangler publish ./workers/cache-worker.js --name my-cache-worker
```

- The worker demonstrates:
	- checking `caches.default` with `cache.match`
	- generating or fetching fresh content on cache miss
	- setting `Cache-Control: public, s-maxage=3600`
	- using `ctx.waitUntil(cache.put(...))` to write to cache asynchronously

Notes:
- `ctx.waitUntil` and `caches.default` are available in Cloudflare Workers and Pages Functions running on the Edge runtime.
- Adjust `s-maxage` to control how long Cloudflare stores the resource at the edge.

# My Portfolio Wesbite - Overview 🚀

This repository contains the open source version of my porfolio website.
Do check it out!

## Instructions 🛠️

I have modified the gsap club plugins with the trial plugins, but with the trial plugin you cannot host it🔴. So for Club plugins, Check out here: https://gsap.com/docs/v3/Installation/

**Techstack** - React, TypeScript, GSAP, ThreeJS, WebGL, HTML, Css, JavaScript

![Portfolio-Preview](public/images/preview.png)

## License

This project is open source and available under the [MIT License](LICENSE).
