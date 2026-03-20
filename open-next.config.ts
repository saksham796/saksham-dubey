import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Direct override without the 'default' nesting
  override: {
    wrapper: "cloudflare-node",
    converter: "edge",
    incrementalCache: "dummy",
  },
});