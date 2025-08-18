# SinghStates (Final Build)

World-class Next.js 14 + Tailwind site for a real-estate brand based in Rohtak.
- Clean structure (no duplicates)
- SEO, sitemap, robots
- Lead form with photo upload → emails your hidden Gmail via SMTP
- Free integrations only

## Quick Deploy (Vercel)
1. Create a **new GitHub repo** and upload all files of this folder.
2. On **Vercel → New Project → Import from GitHub**.
3. In **Settings → Environment Variables**, add:
   - `SMTP_HOST = smtp.gmail.com`
   - `SMTP_PORT = 465`
   - `SMTP_SECURE = true`
   - `SMTP_USER = lalitduhan2000@gmail.com`
   - `SMTP_PASS = <your Gmail App Password>`
   - `NEXT_PUBLIC_PHONE = +919671575769`
   - `NEXT_PUBLIC_WHATSAPP = +919671575769`
   - `NEXT_PUBLIC_OFFICE_ADDRESS = SCO(A16), Durga Tower, Near Agastya cricket academy, Sector 35, Suncity (Rohtak)`
4. Deploy. Then attach `singhstates.com` domain in Vercel (already configured).

## Pages
- `/` Home (Hero + Search + Featured)
- `/buy` Listings with filters
- `/rent` (same filters)
- `/agents` Placeholder
- `/contact` Lead form + Google Map
- `/privacy` Privacy Policy
- `/terms` Terms & Conditions

## Lead Form Details
- Submits to `/api/lead` (server-side).
- Emails are sent via SMTP to your hidden Gmail (`SMTP_USER`).
- Supports up to 5 photo uploads (small/medium size).
- Do not expose SMTP_PASS publicly; use Vercel env vars.

## Customize
- Change logo: `public/logo.png`
- Colors/Theme: `tailwind.config.ts`
- Hero background: `components/Hero.tsx` (Unsplash link)
- Listings data: `lib/properties.ts`
- Footer contact pulls from env vars.

## Notes
- Gmail requires an **App Password** (2FA enabled) for SMTP.
- If emails don't arrive, check Vercel logs and Gmail spam.
