export function generateTermsOfService(config) {
  const {
    appName = "Your App",
    companyName = "Your Company LLC",
    websiteUrl = "https://yourapp.com",
    contactEmail = "support@yourapp.com",
    jurisdiction = "Delaware, United States",
    effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    hasAccounts = true,
    hasPayments = true,
    paymentProcessor = "Stripe",
    pricingModel = "Subscription / One-Time",
    refundWindowDays = 14,
    hasAiFeatures = true,
    minimumAge = 13
  } = config;

  return `# Terms of Service for ${appName}

**Effective Date:** ${effectiveDate}  
**Last Revised:** ${effectiveDate}

These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and **${companyName}** ("Company", "we", "us", or "our"), governing your access to and use of the **${appName}** website ([${websiteUrl}](${websiteUrl})), software applications, APIs, and associated online services (collectively, the "Service").

BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE SERVICE.

---

## 1. Eligibility & Account Registration

1. **Age Requirement:** You must be at least **${minimumAge}** years of age (or the legal age of majority in your jurisdiction) to access or use the Service.
${hasAccounts ? `
2. **Account Security:** When registering an account, you must provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your credentials and for all activities conducted under your account.
3. **Unauthorized Use:** You must immediately notify ${companyName} at **${contactEmail}** if you suspect unauthorized access or any security breach involving your account.
` : `
2. **Access Without Registration:** Some aspects of the Service may be utilized without registering an account. You remain bound by these Terms regardless of registration status.
`}

---

## 2. Permitted Use & Prohibited Conduct

You agree to use ${appName} solely for lawful purposes and in compliance with all relevant international and domestic regulations. You agree **NOT** to:
- Reverse engineer, decompile, disassemble, or extract source code from any portion of the Service.
- Use automated scripts, bots, scrapers, or crawlers to mine data without explicit written consent.
- Interfere with or compromise the security, infrastructure, or operational integrity of the Service.
- Transmit or generate malicious code, malware, viruses, or harmful payloads.
- Circumvent rate limits, authentication barriers, or payment paywalls.
- Impersonate any entity, misrepresent affiliation, or engage in deceptive conduct.
${hasAiFeatures ? `- Use generated AI outputs to violate third-party intellectual property, generate hate speech, defame individuals, or bypass AI safety guardrails.` : ''}

---

## 3. Subscriptions, Fees & Billing

${hasPayments ? `
1. **Pricing & Plans:** Access to certain premium features or tiers is billed in accordance with the pricing displayed at checkout (${pricingModel}). We reserve the right to modify pricing upon reasonable advance notice.
2. **Billing Partner:** All monetary transactions are processed through our third-party merchant processor (**${paymentProcessor}**). By submitting payment details, you authorize ${paymentProcessor} to charge applicable fees, taxes, and recurring subscriptions.
3. **Recurring Subscriptions:** If subscribed to a recurring plan, your billing method will automatically renew at the specified frequency unless cancelled prior to the renewal cycle.
4. **Refund Policy:** We offer a **${refundWindowDays}-day money-back guarantee** for initial purchases upon request to **${contactEmail}**. Beyond this window, charges are generally non-refundable unless required by applicable consumer law.
5. **Chargebacks:** Fraudulent or bad-faith chargebacks may result in immediate suspension or permanent termination of your account.
` : `
The Service is currently provided free of charge. We reserve the right to introduce premium tiers or paid features in the future with advance notification.
`}

---

## 4. Intellectual Property Rights

1. **Our Property:** All intellectual property rights in and to ${appName}—including software code, user interface, brand assets, logos, visual designs, and documentation—are the exclusive property of ${companyName} and protected by global copyright and trademark laws.
2. **Your License:** We grant you a revocable, non-exclusive, non-transferable, limited license to access and use the Service strictly in accordance with these Terms.
3. **User Content:** You retain full ownership and intellectual property rights in any data, text, files, or media you upload to the Service ("User Content"). You grant us a non-exclusive license to host, process, and display your User Content solely to the extent necessary to deliver the Service.

---

${hasAiFeatures ? `
## 5. Artificial Intelligence Terms & Output Ownership

1. **AI Output Rights:** To the maximum extent permitted by applicable law, ${companyName} assigns to you all right, title, and interest in and to any outputs generated specifically for you through the Service's AI tools.
2. **Probabilistic Nature of AI:** Artificial intelligence systems generate probabilistic completions based on statistical patterns. We do **not** warrant or represent that outputs are unique, accurate, error-free, or suitable for any specific legal, financial, or medical purpose.
3. **Responsibility for Output Use:** You assume all legal and operational responsibility for reviewing, vetting, and utilizing any AI-generated deliverables.
` : ''}

---

## 6. Disclaimer of Warranties

THE SERVICE IS PROVIDED ON AN **"AS IS"** AND **"AS AVAILABLE"** BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

${companyName.toUpperCase()} DOES NOT WARRANT THAT:
- THE SERVICE WILL FUNCTION UNINTERRUPTED, SECURE, OR ERROR-FREE.
- DEFECTS OR SYSTEM BUGS WILL BE IMMEDIATELY CORRECTED.
- THE SERVICE OR HOSTING SERVERS ARE FREE OF VIRUSES OR HARMFUL COMPONENTS.

---

## 7. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL **${companyName.toUpperCase()}**, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE SERVICE.

IN NO EVENT SHALL OUR TOTAL CUMULATIVE LIABILITY EXCEED THE GREATER OF **ONE HUNDRED US DOLLARS ($100.00 USD)** OR THE AMOUNT PAID BY YOU TO ${companyName.toUpperCase()} DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

---

## 8. Indemnification

You agree to defend, indemnify, and hold harmless ${companyName}, its affiliates, officers, directors, and employees against any claims, liabilities, damages, losses, and reasonable legal fees arising out of your misuse of the Service, violation of these Terms, or infringement of any third-party rights.

---

## 9. Termination

We reserve the right to suspend or terminate your access to the Service immediately, without prior notice or liability, for any breach of these Terms. Upon termination, your right to use the Service ceases immediately.

---

## 10. Governing Law & Dispute Resolution

These Terms and any dispute arising from them shall be governed by and construed in accordance with the laws of **${jurisdiction}**, without giving effect to conflict of law principles. Any dispute shall be resolved through binding arbitration or the courts located within ${jurisdiction}.

---

## 11. Contact Information

For inquiries, support, or legal notices regarding these Terms of Service, please contact:

- **Entity:** ${companyName}
- **Website:** ${websiteUrl}
- **Email:** [${contactEmail}](mailto:${contactEmail})
`;
}
