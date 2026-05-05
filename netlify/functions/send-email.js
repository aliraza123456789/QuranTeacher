const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, message, course } = JSON.parse(event.body);

    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"Quran Tutor Booking" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Quran Tutor Booking - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 30px; border-radius: 16px 16px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 16px 16px; }
            .field { background: white; padding: 15px; margin-bottom: 15px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .field-label { font-weight: 700; color: #059669; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .field-value { font-size: 16px; color: #1e293b; }
            .badge { display: inline-block; background: #10B981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
            .footer { text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Quran Tutor Free Trial</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="badge">${course || 'Free Trial'}</span>
              </div>
              <div class="field">
                <div class="field-label">Parent Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">WhatsApp / Phone</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Details</div>
                <div class="field-value" style="white-space: pre-line;">${message}</div>
              </div>
              <div class="field">
                <div class="field-label">Received At</div>
                <div class="field-value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} (PKT)</div>
              </div>
            </div>
            <div class="footer">
              Sent from Quran Tutor Website
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Quran Tutor Booking Request
==============================

Course: ${course || 'Free Trial'}
Parent Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone}

Details:
${message}

Received: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully!' 
      }),
    };

  } catch (error) {
    console.error('Email error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message 
      }),
    };
  }
};