import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // This tells OpenNext to use the Cloudflare-specific Node.js compatibility layer
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "dummy", // Or use 'kv' if you have a KV namespace set up
      tagCache: "dummy",
      queue: "dummy",
    },
  },
});