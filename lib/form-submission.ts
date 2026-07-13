export type FormSubmission = {
  submissionId: string;
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
