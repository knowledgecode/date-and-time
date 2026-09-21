import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: '**/*.{md,mdx}',
      base: './docs',
    }),
    schema: docsSchema(),
  }),
  // Starlight reads this optional collection for UI-string overrides. A collection with no
  // entries is absent from Astro's data store and logs a warning, so register one empty `en` entry.
  i18n: defineCollection({
    loader: () => ({ en: {} }),
    schema: i18nSchema(),
  }),
};
