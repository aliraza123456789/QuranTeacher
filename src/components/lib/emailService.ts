export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
}

const API_URL = import.meta.env.PROD
  ? '/.netlify/functions/send-email'
  : 'http://localhost:8888/.netlify/functions/send-email';

export const sendBookingEmail = async (params: EmailParams): Promise<void> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.details || 'Failed to send email');
  }

  return data;
};
