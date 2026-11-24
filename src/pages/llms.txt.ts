import type { APIRoute } from "astro";
import { join } from "node:path";
import { buildLlmsTxt } from "../lib/llms";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = buildLlmsTxt(join(process.cwd(), "src/pages"));
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
