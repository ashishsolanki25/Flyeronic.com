/**
 * ─── EmailJS Configuration ───────────────────────────────────────────────────
 *
 * HOW TO GET THESE VALUES (takes ~5 minutes):
 *
 * 1. Go to https://www.emailjs.com and sign up / log in with
 *    flyeronic.info@gmail.com
 *
 * 2. SERVICE_ID
 *    → Dashboard → "Email Services" → "Add New Service"
 *    → Choose Gmail → connect flyeronic.info@gmail.com → Save
 *    → Copy the "Service ID" (looks like: service_xxxxxxx)
 *    → Paste it below as EMAILJS_SERVICE_ID
 *
 * 3. TEMPLATE_ID
 *    → Dashboard → "Email Templates" → "Create New Template"
 *    → Set "To Email" field to: flyeronic.info@gmail.com
 *    → Use these template variables in the body:
 *        Name:    {{from_name}}
 *        Email:   {{reply_to}}
 *        Phone:   {{phone}}
 *        Company: {{company}}
 *        Service: {{service}}
 *        Message: {{message}}
 *    → Save template → Copy the "Template ID" (looks like: template_xxxxxxx)
 *    → Paste it below as EMAILJS_TEMPLATE_ID
 *
 * 4. PUBLIC_KEY
 *    → Dashboard → "Account" (top-right avatar) → "General"
 *    → Under "API Keys" → copy your "Public Key" (looks like: xxxxxxxxxxxx)
 *    → Paste it below as EMAILJS_PUBLIC_KEY
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
export const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
export const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "AbCdEfGhIjKlMnOp"
