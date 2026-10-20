# Sumit Yadav Official Identity Website

Premium dark 3D-inspired personal identity homepage built with Next.js, React, CSS animation, and Framer Motion. The main CTA points to the existing portfolio.

## Before deploying

1. Replace `sumityadavofficial` with your chosen available Netlify site name in:
   - `app/layout.tsx` (`siteUrl`)
   - `app/robots.ts`
   - `app/sitemap.ts`
2. Confirm the public profile links and wording in `app/layout.tsx` and `app/page.tsx`.
3. Add your actual LinkedIn URL, WhatsApp number, and CV only when ready. Do not publish placeholders or private contact information by mistake.
4. Check that all claims on the page are accurate.

## Run locally

Install Node.js LTS, then in this folder run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To test a production build:

```bash
npm run build
```

## Deploy to Netlify

1. Create a new GitHub repository and push this project.
2. In Netlify, choose **Add new site / Import an existing project** and connect the repository.
3. Netlify should detect Next.js. Confirm build settings and deploy.
4. In **Site configuration / Domain management**, edit the site name to an available name such as `sumityadavofficial`. Your URL will be `https://sumityadavofficial.netlify.app/` only if that site name is available.
5. Open the deployed homepage, `/robots.txt`, and `/sitemap.xml` to check they load.
6. Add the final URL as a URL-prefix property in Google Search Console, verify ownership, submit `/sitemap.xml`, and request indexing.

## SEO notes

- No website can guarantee the #1 position for a name query.
- Use the name naturally in the title, H1, descriptive page content, and structured data.
- `sameAs` must contain only genuine public profiles belonging to Sumit Yadav. Add verified LinkedIn and other profile URLs when available.
- Keep the site useful and distinct from the existing portfolio. The main CTA intentionally sends users to the existing portfolio.
- After deploying, update the canonical URL and sitemap to the final Netlify subdomain.
