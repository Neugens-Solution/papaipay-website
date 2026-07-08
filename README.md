# papaipay-website
Papaipay Corporate Website & Financial Advisory Platform

## Monday.com form submission configuration

All public website forms submit to server-side API routes and create items in Monday.com. The Monday.com API token is read only on the server and must never be added to frontend code or exposed with a `NEXT_PUBLIC_` prefix.

Set these environment variables in production:

- `NEXT_PUBLIC_SITE_URL` - public canonical site URL for metadata, social previews, `robots.txt`, and `sitemap.xml`; use `https://papaipay.my` for production.
- `MONDAY_API_TOKEN` - Monday.com API token with permission to create items on the destination board.
- `MONDAY_BOARD_ID` - destination Monday.com board ID.
- `MONDAY_GROUP_ID` - optional destination group ID. Leave blank to use the board default group.
- `MONDAY_NAME_COLUMN_ID` - optional column ID for the submitter name/full name.
- `MONDAY_EMAIL_COLUMN_ID` - optional email column ID for the submitter email address.
- `MONDAY_PHONE_COLUMN_ID` - optional text column ID for the submitter phone number (configure this as a Monday.com text column, not a phone column).
- `MONDAY_COMPANY_COLUMN_ID` - optional text column ID for company/organisation when a form provides it.
- `MONDAY_ENQUIRY_TYPE_COLUMN_ID` - optional text/status column ID for enquiry type, complaint category, or career position.
- `MONDAY_MESSAGE_COLUMN_ID` - optional long-text/text column ID for the submitted message and extra form details.
- `MONDAY_SOURCE_COLUMN_ID` - optional text column ID for the source form or page path.
- `MONDAY_SUBMITTED_DATE_COLUMN_ID` - optional date column ID for the server submission date.

The generic website forms submit to `POST /api/forms`. The complaint widget keeps its existing `POST /api/complaint` endpoint for frontend compatibility, but that endpoint now creates a Monday.com item instead of sending SMTP email. Server routes validate required fields, retain the complaint honeypot spam check, log useful Monday.com errors server-side, and return generic user-safe delivery errors to browsers.

### Current form-to-Monday mapping

- Contact forms (`/contact`, `/en/contact`): name, email, phone, enquiry type, message, source page, submitted date.
- Apply forms (`/apply`, `/en/apply`): name, email, phone, fixed enquiry type `Initial Review / Apply`, message, source page, submitted date, and extra details for active credit, late payment, and monthly income.
- Careers forms (`/careers`, `/en/careers`): name, email, phone, enquiry type `Career Application: {position}`, message, source page, submitted date, and selected position in extra details. Applicants are instructed to email resumes to papaipay.my@gmail.com; resume file upload is not collected by this implementation.
- Complaint widget: full name, email, phone, complaint category, message, source `Complaint widget`, and submitted date.

## Launch readiness checklist

Before pointing the public domain at production, verify these items in Vercel and in the live browser:

1. **Canonical production URL** - set `NEXT_PUBLIC_SITE_URL=https://papaipay.my` in Vercel so canonical links, Open Graph URLs, `robots.txt`, and `sitemap.xml` use the launch domain instead of the Vercel preview URL.
2. **Monday.com environment variables** - confirm `MONDAY_API_TOKEN`, `MONDAY_BOARD_ID`, and the optional `MONDAY_GROUP_ID` are present in Vercel Production.
3. **Monday.com column IDs** - confirm each configured column ID matches the expected Monday.com column type. `MONDAY_PHONE_COLUMN_ID` must be a text column because the website sends the phone value as plain text.
4. **Domain and DNS** - add `papaipay.my` to the Vercel project, configure DNS records with the registrar/DNS provider, and confirm Vercel shows the domain as valid with HTTPS issued.
5. **Indexing files** - after deployment, open `https://papaipay.my/robots.txt` and `https://papaipay.my/sitemap.xml` and confirm both return 200 responses with `https://papaipay.my` URLs.
6. **Form smoke tests** - submit the BM and EN contact, apply, careers, homepage mini, and complaint forms from production and confirm matching items are created in Monday.com with name, email, phone, message/source, submitted date, and form-specific details.
7. **Social previews** - test the launch URL in social preview tools and confirm the title, description, canonical URL, and large preview image render correctly.
