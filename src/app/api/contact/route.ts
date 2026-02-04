import { NextRequest, NextResponse } from 'next/server';

// Resend email service - sign up at https://resend.com (free tier: 100 emails/day)
// Add RESEND_API_KEY to .env.local
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { name, email, company, phone, service, budget, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store form data
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      company: company || 'Not provided',
      phone: phone || 'Not provided',
      service: service || 'Not provided',
      budget: budget || 'Not provided',
      message,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Log to console (for debugging)
    console.log('New Contact Form Submission:', contactData);

    // Send email via Resend if API key is configured
    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Contact Form <onboarding@resend.dev>', // Change this to your verified domain after setup
            to: 'info@theripplenexus.com',
            subject: `New Project Inquiry from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e56d6;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p><strong>Service Interest:</strong> ${service || 'Not provided'}</p>
                  <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
                </div>
                <h3 style="color: #333;">Message:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-left: 4px solid #1e56d6; border-radius: 4px;">
                  ${message}
                </p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 12px; text-align: center;">
                  This email was sent from the Ripple Nexus contact form at theripplenexus.com
                </p>
              </div>
            `,
            reply_to: email,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Resend API error:', await emailResponse.text());
          // Continue even if email fails - form submission is still successful
        }
      } catch (emailError) {
        console.error('Error sending email via Resend:', emailError);
        // Don't throw - form submission is still valid
      }
    } else {
      console.warn('RESEND_API_KEY not configured. Set it in .env.local to enable email notifications.');
    }

    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will contact you shortly at ' + email,
        id: contactData.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please try again or email us at info@theripplenexus.com' },
      { status: 500 }
    );
  }
}

