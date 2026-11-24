# sendforless

Independent comparison site for newsletter platforms. Static [Astro](https://astro.build) site. Not the official MailCheap website.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

The build writes a static `dist/` directory and is meant to deploy on Vercel. Do not treat a local build as a production release.

## Affiliate code

Every MailCheap affiliate URL is built from `AFFILIATE_CODE` in `src/lib/site.ts`. The current value is `analyst`.

- Pricing: `https://mailcheap.ai/pricing?via=analyst`
- Home: `https://mailcheap.ai/?via=analyst`

Citation links to MailCheap help pages do not add the parameter.

## Prices

List prices are documented in `src/lib/pricing.ts` and on [How we test](https://sendforless.com/how-we-test/). Mailchimp mid-tier amounts are placeholders. Kit Creator bands above the published $39 starting price are a slider capture and are labeled.
