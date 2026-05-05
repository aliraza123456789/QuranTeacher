import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, course } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, just log the data (you can integrate with EmailJS or other service)
    console.log('Booking request:', { name, email, phone, message, course });

    // TODO: Integrate with your email service
    // Example: await sendWithEmailJS({ name, email, phone, message, course });

    return NextResponse.json(
      { message: 'Booking request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
