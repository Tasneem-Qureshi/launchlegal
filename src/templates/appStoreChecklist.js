export function generateAppStoreChecklist(config) {
  const {
    appName = "Your App",
    websiteUrl = "https://yourapp.com",
    hasAccounts = true,
    hasPayments = true,
    hasAiFeatures = true
  } = config;

  return `# Store Review & Stripe Approval Launch Checklist for ${appName}

This checklist outlines the exact compliance criteria required to pass **Apple App Store Review**, **Google Play Console**, and **Stripe Merchant Verification** without delays or rejections.

---

## 1. Stripe Merchant Onboarding Approval Checklist

Stripe algorithms review your landing page and legal links before approving payouts:

- [ ] **Publicly Accessible Domain:** The website (${websiteUrl}) must resolve publicly without basic auth or password locks.
- [ ] **Visible Privacy Policy & Terms Link:** Hyperlinks to both policies must appear clearly in your website footer.
- [ ] **Clear Business Name & Contact Details:** Your support email and registered legal entity name must match the details provided in Stripe dashboard.
- [ ] **Transparent Pricing & Currency:** Clearly state the price, billing interval (e.g. $19 one-time or $9/month), and currency.
- [ ] **Clear Refund & Cancellation Policy:** Stripe requires an explicit return/refund policy (e.g. "14-day refund policy upon contacting support").
- [ ] **Product Description:** The landing page must clearly explain what the customer receives immediately upon payment.

---

## 2. Apple App Store Compliance (Guideline 5.1.1 & 5.1.2)

Apple is notorious for rejecting apps missing specific legal components:

- [ ] **Privacy Policy URL in App Store Connect:** Enter your hosted Privacy Policy URL in the dedicated metadata field before submission.
- [ ] **In-App Privacy Policy Link:** Provide a clickable Privacy Policy link inside your app's Settings or Account screen.
${hasAccounts ? `- [ ] **Mandatory Account Deletion (Guideline 5.1.1(v)):** Since your app supports account creation, you MUST provide an explicit in-app button allowing users to initiate complete deletion of their account and associated data.` : ''}
${hasAiFeatures ? `- [ ] **AI Generated Content Moderation (Guideline 1.2):** Apps using AI generation must include:
    - Clear terms prohibiting abusive or explicit prompt generation.
    - An in-app mechanism for users to flag or report offensive AI outputs.
    - A block/filter preventing toxic completions.` : ''}
${hasPayments ? `- [ ] **Apple In-App Purchase vs External:** Digital goods and unlocks inside iOS apps must utilize StoreKit / Apple IAP unless qualifying for standard reader app exemptions.` : ''}

---

## 3. Google Play Console Compliance (Target API & Data Safety)

- [ ] **Complete Data Safety Section:** In Google Play Console, declare all data collected (Analytics, User ID, Financial Info) matching your Privacy Policy disclosures.
- [ ] **Account & Data Deletion URL:** Provide a web link where users can request data deletion without having to reinstall the app.
- [ ] **Prominent Disclosure for Permissions:** Ensure runtime permission dialogs match stated Privacy Policy use cases.

---

## 4. Quick Deployment Tip

Host your generated Markdown policies as clean HTML or on a dedicated \`/privacy\` and \`/terms\` route on your domain, or copy the generated Markdown directly into your documentation / repository.
`;
}
