# Local website fonts needed for stable builds

The corporate website currently uses `next/font/google` for:

- Inter (`--font-inter`) for body text
- Plus Jakarta Sans (`--font-heading`) for headings

To make `npm run build` independent from Google Fonts network access, provide licensed local webfont files in this directory before switching `app/layout.tsx` to `next/font/local`.

Recommended filenames:

- `inter-latin.woff2`
- `plus-jakarta-sans-latin.woff2`

Do not add unverified font files. The replacement should preserve the existing CSS variables (`--font-inter` and `--font-heading`) and `display: "swap"`.
