# papaipay-website
Papaipay Corporate Website & Financial Advisory Platform

## Monday.com form submission configuration

All public website forms submit to server-side API routes and create items in Monday.com. The Monday.com API token is read only on the server and must never be added to frontend code or exposed with a `NEXT_PUBLIC_` prefix.

Set these environment variables in production:

- `MONDAY_API_TOKEN` - Monday.com API token with permission to create items on the destination board.
- `MONDAY_BOARD_ID` - destination Monday.com board ID.
- `MONDAY_GROUP_ID` - optional destination group ID. Leave blank to use the board default group.
- `MONDAY_NAME_COLUMN_ID` - optional column ID for the submitter name/full name.
- `MONDAY_EMAIL_COLUMN_ID` - optional email column ID for the submitter email address.
- `MONDAY_PHONE_COLUMN_ID` - optional phone column ID for the submitter phone number.
- `MONDAY_COMPANY_COLUMN_ID` - optional text column ID for company/organisation when a form provides it.
- `MONDAY_ENQUIRY_TYPE_COLUMN_ID` - optional text/status column ID for enquiry type, complaint category, or career position.
- `MONDAY_MESSAGE_COLUMN_ID` - optional long-text/text column ID for the submitted message and extra form details.
- `MONDAY_SOURCE_COLUMN_ID` - optional text column ID for the source form or page path.
- `MONDAY_SUBMITTED_DATE_COLUMN_ID` - optional date column ID for the server submission date.

The generic website forms submit to `POST /api/forms`. The complaint widget keeps its existing `POST /api/complaint` endpoint for frontend compatibility, but that endpoint now creates a Monday.com item instead of sending SMTP email. Server routes validate required fields, retain the complaint honeypot spam check, log useful Monday.com errors server-side, and return generic user-safe delivery errors to browsers.

### Current form-to-Monday mapping

- Contact forms (`/contact`, `/en/contact`): name, email, phone, enquiry type, message, source page, submitted date.
- Apply forms (`/apply`, `/en/apply`): name, email, phone, fixed enquiry type `Initial Review / Apply`, message, source page, submitted date, and extra details for active credit, late payment, and monthly income.
- Careers forms (`/careers`, `/en/careers`): name, email, phone, enquiry type `Career Application: {position}`, message, source page, submitted date, and selected position in extra details. Resume file upload is not sent to Monday.com by this implementation.
- Complaint widget: full name, email, phone, complaint category, message, source `Complaint widget`, and submitted date.
