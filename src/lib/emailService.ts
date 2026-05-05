export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
}

export const sendBookingEmail = async (params: EmailParams): Promise<void> => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send email');
  }

  return data;
};
