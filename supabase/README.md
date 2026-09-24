# Contact email setup

The website stores contact messages in `public.contact_messages`, then invokes the `send-contact-email` Edge Function.

## One-time Supabase setup

1. Run `supabase/contact_messages.sql` in the Supabase SQL Editor.
2. Create and verify a sender domain or email in Resend.
3. Install the Supabase CLI and log in:

```text
supabase login
supabase link --project-ref mmqqhvxpshdapujvjzqi
```

4. Set the email secrets. Use a verified Resend sender address for `CONTACT_EMAIL_FROM`:

```text
supabase secrets set RESEND_API_KEY=re_your_key CONTACT_EMAIL_FROM=website@your-verified-domain.com
```

5. Deploy the function:

```text
supabase functions deploy send-contact-email
```

The Resend API key is never included in the frontend. The publishable Supabase key is safe to use in the browser, but must not be replaced with a service-role key.
