// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  wrapper: "cloudflare-node",
  converter: "edge",
  incrementalCache: "dummy",
});