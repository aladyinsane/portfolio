import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    kind: z.enum(["personal", "client-generalized"]),
    stack: z.array(z.string()),
    year: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
