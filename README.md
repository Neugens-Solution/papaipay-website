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
