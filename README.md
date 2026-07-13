# papaipay-website
Papaipay Corporate Website & Financial Advisory Platform

## Website form submission configuration

All public website forms submit to server-side API routes. Google Sheets is the primary lead record, while Monday.com remains a secondary workflow copy during the transition.

The browser never calls Google Apps Script or Monday.com directly. All credentials are read only on the server and must never be added to frontend code, committed to the repository, or exposed with a `NEXT_PUBLIC_` prefix.

Set these environment variables in both Vercel Production and Preview:

- `GOOGLE_SHEETS_WEB_APP_URL` - deployed Google Apps Script web app URL ending in `/exec`.
- `GOOGLE_SHEETS_FORM_SECRET` - shared secret configured in the Apps Script project properties.
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

The generic website forms submit to `POST /api/forms`. The complaint widget keeps its existing `POST /api/complaint` endpoint for frontend compatibility. Both routes preserve their existing validation and honeypot checks, save the accepted submission to Google Sheets first, and then attempt Monday.com delivery as a best-effort secondary copy.

If Google Sheets delivery fails, the route returns the existing generic user-safe submission error. If Monday.com delivery fails after Google Sheets succeeds, the browser still receives success because the primary record has already been captured. Server logs must not include secrets or customer form contents.

### Current form mapping

- Contact forms (`/contact`, `/en/contact`): name, email, phone, enquiry type, message, source page, language, submitted date, and submission ID.
- Apply forms (`/apply`, `/en/apply`): name, email, phone, fixed enquiry type `Initial Review / Apply`, message, source page, language, submitted date, submission ID, and extra details for active credit, late payment, and monthly income.
- Careers forms (`/careers`, `/en/careers`): name, email, phone, enquiry type `Career Application: {position}`, message, source page, language, submitted date, submission ID, and selected position in extra details. Applicants are instructed to email resumes to papaipay.my@gmail.com; resume file upload is not collected by this implementation.
- Homepage mini forms: name, email, phone, message, source page, language, submitted date, and submission ID.
- Complaint widget: full name, email, phone, complaint category, message, complaint widget source, originating page when safely available, language, submitted date, and submission ID.

## Launch readiness checklist

Before pointing the public domain at production, verify these items in Vercel and in the live browser:

1. **Canonical production URL** - set `NEXT_PUBLIC_SITE_URL=https://papaipay.my` in Vercel so canonical links, Open Graph URLs, `robots.txt`, and `sitemap.xml` use the launch domain instead of the Vercel preview URL.
2. **Google Sheets environment variables** - confirm `GOOGLE_SHEETS_WEB_APP_URL` and `GOOGLE_SHEETS_FORM_SECRET` are present in Vercel Production and Preview and are not prefixed with `NEXT_PUBLIC_`.
3. **Monday.com environment variables** - confirm `MONDAY_API_TOKEN`, `MONDAY_BOARD_ID`, and the optional `MONDAY_GROUP_ID` are present in Vercel Production while Monday.com remains enabled as the secondary workflow copy.
4. **Monday.com column IDs** - confirm each configured column ID matches the expected Monday.com column type. `MONDAY_PHONE_COLUMN_ID` must be a text column because the website sends the phone value as plain text.
5. **Domain and DNS** - add `papaipay.my` to the Vercel project, configure DNS records with the registrar/DNS provider, and confirm Vercel shows the domain as valid with HTTPS issued.
6. **Indexing files** - after deployment, open `https://papaipay.my/robots.txt` and `https://papaipay.my/sitemap.xml` and confirm both return 200 responses with `https://papaipay.my` URLs.
7. **Form smoke tests** - submit the BM and EN contact, apply, careers, homepage mini, and complaint forms from production. Confirm each accepted submission creates a complete Google Sheet row and, while enabled, a matching Monday.com item with the expected mapped fields.
8. **Failure-path check** - confirm a Monday.com delivery failure does not reject a submission already saved successfully to Google Sheets, while a Google Sheets failure still returns the existing generic user-safe error.
9. **Social previews** - test the launch URL in social preview tools and confirm the title, description, canonical URL, and large preview image render correctly.
