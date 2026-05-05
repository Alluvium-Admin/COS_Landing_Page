"use server";

import { WaitlistFormData } from "@/types/waitlist";

export async function submitToWaitlist(data: WaitlistFormData) {
  const domain = process.env.ATLASSIAN_DOMAIN;
  const email = process.env.ATLASSIAN_EMAIL;
  const apiToken = process.env.ATLASSIAN_API_TOKEN;
  const serviceDeskId = process.env.JSM_SERVICE_DESK_ID;
  const requestTypeId = process.env.JSM_REQUEST_TYPE_ID;
  
  // Custom field IDs from JSM configuration
  const nameFieldId = process.env.JSM_NAME_FIELD_ID || "summary"; // Fallback to summary if not specified
  const emailFieldId = process.env.JSM_EMAIL_FIELD_ID || "description";
  // role field is optional

  if (!domain || !email || !apiToken || !serviceDeskId || !requestTypeId) {
    console.error("Missing JSM configuration in environment variables");
    return { success: false, error: "Configuration Error" };
  }

  const authHeader = `Basic ${Buffer.from(`${email}:${apiToken}`).toString("base64")}`;

  const payload = {
    serviceDeskId,
    requestTypeId,
    requestFieldValues: {
      [nameFieldId]: `Waitlist: ${data.name}`,
      [emailFieldId]: `Email: ${data.email}\nRole/Use Case: ${data.role || "N/A"}`,
      // Add more specific field mappings if the user provides them
    },
  };

  try {
    const response = await fetch(`https://${domain}/rest/servicedeskapi/request`, {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json",
        "X-Atlassian-Token": "no-check",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("JSM API Error:", errorData);
      return { success: false, error: errorData.errorMessage || "Submission failed" };
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch {
    return { success: false, error: "Network error" };
  }
}
