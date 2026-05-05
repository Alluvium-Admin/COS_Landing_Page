export interface WaitlistFormData {
  name: string;
  email: string;
  role?: string;
}

export interface JSMRequestPayload {
  serviceDeskId: string;
  requestTypeId: string;
  requestFieldValues: {
    [key: string]: string | number | boolean | string[] | undefined;
  };
}

export interface JSMResponse {
  issueId?: string;
  issueKey?: string;
  errorMessage?: string;
}
