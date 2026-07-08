# papaipay-website
Papaipay Corporate Website &amp; Financial Advisory Platform

## Complaint widget email configuration

The corporate website includes a floating complaint widget that submits to `POST /api/complaint`. Email delivery is handled only on the server; do not place SMTP credentials or the complaint recipient in frontend code.

Set these environment variables in production:

- `COMPLAINT_TO_EMAIL` - Papaipay inbox that receives complaint submissions.
- `COMPLAINT_FROM_EMAIL` - verified sender address used as the email `From` value.
- `SMTP_HOST` - SMTP server hostname, for example Google Workspace SMTP.
- `SMTP_PORT` - SMTP port, usually `587` for STARTTLS or `465` for implicit TLS.
- `SMTP_USER` - SMTP username.
- `SMTP_PASS` - SMTP password or app password.
- `SMTP_SECURE` - optional; set to `true` for implicit TLS, or omit/use `false` for STARTTLS on port `587`.

Submitted user email addresses are used as `Reply-To`, not `From`. The route validates required fields, enforces length limits, includes a honeypot field for basic spam prevention, and returns generic delivery errors so SMTP details are not exposed to browsers.

## Monday.com form integration notes

If website form submissions are connected to Monday.com, configure any phone destination column as a text column for now. `MONDAY_PHONE_COLUMN_ID` should point to that text column rather than a Monday phone column, because Malaysian local phone formats such as `012-345 6789` are submitted as plain text and are not normalized with a `countryShortName` value yet. Do not switch this field to Monday's phone column object format until phone normalization and country metadata are handled server-side.

Resume uploads from the careers forms are not currently uploaded to Monday.com. Applicants are directed to email their application and resume until file upload support is implemented end to end.
