type MondayColumnValues = Record<
  string,
  | string
  | { email: string; text: string }
  | { phone: string; countryShortName?: string }
  | { date: string }
>;

export type MondaySubmission = {
  formType: string;
  source: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  enquiryType?: string;
  message?: string;
  details?: Record<string, string>;
};

const MONDAY_API_URL = "https://api.monday.com/v2";

const columnEnv = {
  name: "MONDAY_NAME_COLUMN_ID",
  email: "MONDAY_EMAIL_COLUMN_ID",
  phone: "MONDAY_PHONE_COLUMN_ID",
  company: "MONDAY_COMPANY_COLUMN_ID",
  enquiryType: "MONDAY_ENQUIRY_TYPE_COLUMN_ID",
  message: "MONDAY_MESSAGE_COLUMN_ID",
  source: "MONDAY_SOURCE_COLUMN_ID",
  submittedDate: "MONDAY_SUBMITTED_DATE_COLUMN_ID",
} as const;

function env(name: string) {
  return process.env[name]?.trim() || "";
}

function compact(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function truncate(value: string, max = 4000) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function itemNameFor(submission: MondaySubmission) {
  const type = compact(submission.formType) || "Website form";
  const name = compact(submission.name) || "Website visitor";
  return truncate(`${type} - ${name}`, 255);
}

function appendDetails(message: string, details?: Record<string, string>) {
  const entries = Object.entries(details || {}).filter(([, value]) =>
    compact(value),
  );
  if (!entries.length) return message;
  const detailText = entries
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return [message, detailText]
    .filter(Boolean)
    .join("\n\nAdditional details:\n");
}

function buildColumnValues(submission: MondaySubmission) {
  const values: MondayColumnValues = {};
  const setText = (envName: string, value?: string) => {
    const columnId = env(envName);
    const text = compact(value);
    if (columnId && text) values[columnId] = truncate(text);
  };

  setText(columnEnv.name, submission.name);
  setText(columnEnv.company, submission.company);
  setText(columnEnv.enquiryType, submission.enquiryType || submission.formType);
  setText(columnEnv.source, submission.source);
  setText(
    columnEnv.message,
    appendDetails(compact(submission.message), submission.details),
  );

  const emailColumnId = env(columnEnv.email);
  const email = compact(submission.email);
  if (emailColumnId && email) values[emailColumnId] = { email, text: email };

  const phoneColumnId = env(columnEnv.phone);
  const phone = compact(submission.phone);
  if (phoneColumnId && phone) values[phoneColumnId] = { phone };

  const dateColumnId = env(columnEnv.submittedDate);
  if (dateColumnId)
    values[dateColumnId] = { date: new Date().toISOString().slice(0, 10) };

  return values;
}

export function assertMondayConfig() {
  return Boolean(env("MONDAY_API_TOKEN") && env("MONDAY_BOARD_ID"));
}

export async function createMondayItem(submission: MondaySubmission) {
  const token = env("MONDAY_API_TOKEN");
  const boardId = env("MONDAY_BOARD_ID");
  const groupId = env("MONDAY_GROUP_ID");
  if (!token || !boardId)
    throw new Error("Monday.com configuration is incomplete.");

  const query = `
    mutation CreateWebsiteSubmission($boardId: ID!, $groupId: String, $itemName: String!, $columnValues: JSON!) {
      create_item(board_id: $boardId, group_id: $groupId, item_name: $itemName, column_values: $columnValues) {
        id
      }
    }
  `;

  const response = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        boardId,
        groupId: groupId || null,
        itemName: itemNameFor(submission),
        columnValues: JSON.stringify(buildColumnValues(submission)),
      },
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    data?: { create_item?: { id?: string } };
    errors?: unknown;
  } | null;
  if (!response.ok || result?.errors || !result?.data?.create_item?.id) {
    console.error("Monday.com item creation failed.", {
      status: response.status,
      errors: result?.errors,
    });
    throw new Error("Monday.com item creation failed.");
  }

  return result.data.create_item.id;
}
