const recipient = 'rahulsirvi414@gmail.com';
const subject = 'Someone from the IEEE website wants to contact IEEE';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const senderEmail = Deno.env.get('CONTACT_EMAIL_FROM');

  if (!resendApiKey || !senderEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_EMAIL_FROM.');
    return Response.json({ error: 'Email service is not configured.' }, { status: 500, headers: corsHeaders });
  }

  let contact: ContactMessage;
  try {
    contact = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400, headers: corsHeaders });
  }

  if (!contact.name || !contact.email || !contact.message) {
    return Response.json({ error: 'Missing contact details.' }, { status: 400, headers: corsHeaders });
  }

  const emailBody = [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    '',
    'Message:',
    contact.message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: senderEmail,
      to: [recipient],
      reply_to: contact.email,
      subject,
      text: emailBody,
    }),
  });

  if (!resendResponse.ok) {
    const responseBody = await resendResponse.text();
    console.error('Resend rejected contact email:', responseBody);
    return Response.json({ error: 'Email delivery failed.' }, { status: 502, headers: corsHeaders });
  }

  return Response.json({ sent: true }, { headers: corsHeaders });
});
