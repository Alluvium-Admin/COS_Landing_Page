export interface WaitlistSubmission {
  full_name: string;
  email: string;
  role: string;
}

export interface WaitlistResponse {
  message?: string;
  detail?: string;
}
