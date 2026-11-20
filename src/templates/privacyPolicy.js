export function generatePrivacyPolicy(config) {
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
    analytics = ["Google Analytics"],
    aiProviders = ["OpenAI"],
    cloudProviders = ["AWS / Vercel"],
    authProviders = ["Clerk / Auth0"],
    collectsTelemetry = true,
    collectsCookies = true,
    gdprCompliant = true,
    ccpaCompliant = true,
    minimumAge = 13
  } = config;

  return `# Privacy Policy for ${appName}

**Effective Date:** ${effectiveDate}  
**Last Updated:** ${effectiveDate}

Welcome to **${appName}** (operated by **${companyName}**, "we", "us", or "our"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use our services via [${websiteUrl}](${websiteUrl}) and associated applications (collectively, the "Service").

Please read this Privacy Policy carefully. By accessing or using ${appName}, you acknowledge that you have read, understood, and agree to the collection and use of information in accordance with this policy.

---

## 1. Information We Collect

### A. Personal Data You Provide to Us
Depending on how you interact with the Service, we may collect the following personal information:
${hasAccounts ? `- **Account Information:** Name, email address, username, password hash, and profile details when you register for an account.` : `- **Contact Data:** Email address and name when you submit inquiries or support tickets.`}
${hasPayments ? `- **Billing & Payment Details:** Financial transactions are processed by our PCI-DSS compliant third-party payment partner (**${paymentProcessor}**). We do **not** store full credit card numbers or sensitive CVV codes on our servers.` : ``}
${aiProviders.length > 0 ? `- **User Prompts and Inputs:** Text, media, or data you submit to generate AI outputs or interface with our machine learning models.` : ``}
- **Communications:** Any messages, feedback, or support requests you send directly to us.

### B. Information Collected Automatically
When you access the Service, our servers and third-party tools automatically log certain technical information:
${collectsTelemetry ? `- **Device & Usage Telemetry:** IP address, browser type and version, operating system, unique device identifiers, referring URLs, pages viewed, time spent, and error crash logs.` : ``}
${collectsCookies ? `- **Cookies and Tracking Technologies:** Small data files placed on your device to maintain session states, remember preferences, and analyze traffic.` : ``}

---

## 2. How We Use Your Information

We process your data for the following lawful business and commercial purposes:
1. **To Provide and Maintain the Service:** Authenticating users, processing queries, and executing core functionalities.
${hasPayments ? `2. **To Process Payments & Billing:** Facilitating subscription billing, issuing invoices, and preventing fraudulent transactions via ${paymentProcessor}.` : ``}
${aiProviders.length > 0 ? `3. **To Process AI Requests:** Routing your prompts and data to authorized AI processing infrastructure (${aiProviders.join(', ')}) strictly to produce requested completions.` : ``}
4. **To Enhance Security & Reliability:** Monitoring system integrity, detecting malicious activity, and debugging software errors.
5. **Customer Support & Communications:** Responding to inquiries, sending transactional notices (account verification, security alerts, invoices), and important service updates.
6. **Legal & Compliance:** Complying with statutory obligations, resolving disputes, and enforcing our Terms of Service.

---

## 3. Third-Party Service Providers

We do **not** sell, rent, or trade your personal information to third parties. We share data solely with trusted third-party sub-processors who assist us in operating our platform under strict confidentiality and data protection agreements:

${hasPayments ? `- **Payment Processing:** ${paymentProcessor} (Processes payments in compliance with PCI-DSS standards).` : ''}
${aiProviders.length > 0 ? `- **Artificial Intelligence Infrastructure:** ${aiProviders.join(', ')} (API inputs are processed under vendor data terms and are NOT used to train foundation models without explicit consent).` : ''}
${analytics.length > 0 ? `- **Analytics & Telemetry:** ${analytics.join(', ')} (Measures site usage, user interactions, and performance metrics).` : ''}
${authProviders.length > 0 ? `- **Authentication & Identity:** ${authProviders.join(', ')} (Secures account logins and credential validation).` : ''}
${cloudProviders.length > 0 ? `- **Hosting & Cloud Database:** ${cloudProviders.join(', ')} (Infrastructure hosting, CDN, and encrypted database storage).` : ''}

---

## 4. Artificial Intelligence & Automated Processing

${aiProviders.length > 0 ? `
${appName} incorporates advanced AI models provided by ${aiProviders.join(', ')}. 
- **Data Isolation:** User prompts and files submitted for AI processing are transmitted via encrypted API connections.
- **Model Training:** In accordance with standard developer API commitments from our AI providers, your confidential API inputs and generated outputs are **not** utilized to train or fine-tune public foundation models without your opt-in consent.
- **Accuracy Disclaimer:** AI-generated outputs are probabilistic and may occasionally contain inaccuracies. Users retain responsibility for evaluating AI outputs before relying on them.
` : `
${appName} does not utilize automated AI decision-making algorithms that produce legal or similarly significant effects regarding your personal data.
`}

---

## 5. Data Retention & Security

We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, satisfy legal obligations, or enforce our agreements.

We implement robust administrative, technical, and physical safeguards designed to secure personal data against unauthorized access, destruction, loss, or alteration. All network communications are encrypted in transit via Transport Layer Security (TLS/HTTPS), and sensitive stored data is encrypted at rest.

---

## 6. International Data Transfers

Your information may be transferred to and maintained on computers located outside of your state, province, or country where data protection laws may differ. If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, transfers are conducted under recognized Standard Contractual Clauses (SCCs) or adequacy decisions.

---

${gdprCompliant ? `
## 7. Your Rights Under GDPR (European Users)

If you reside in the EEA or UK, you hold rights under the General Data Protection Regulation:
- **Right to Access:** Request copies of your personal data.
- **Right to Rectification:** Request correction of inaccurate information.
- **Right to Erasure ("Right to Be Forgotten"):** Request deletion of your personal data.
- **Right to Restrict or Object to Processing:** Object to our processing or request restrictions.
- **Right to Data Portability:** Request data export in a structured, machine-readable format.
- **Right to Withdraw Consent:** Revoke consent at any time where processing was based on consent.

To exercise these rights, please email us at **${contactEmail}**.
` : ''}

${ccpaCompliant ? `
## 8. Your Rights Under California Law (CCPA / CPRA)

Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents are entitled to:
- Know what personal information is collected, used, shared, or sold.
- Delete personal information held by us.
- Opt out of the "sale" or "sharing" of personal information (Note: **We do not sell personal data**).
- Non-discrimination for exercising privacy rights.

Requests may be submitted by emailing **${contactEmail}**.
` : ''}

---

## 9. Children's Privacy

${appName} is not directed to individuals under the age of **${minimumAge}**. We do not knowingly collect personal identifiable information from children under ${minimumAge}. If you become aware that a child has provided us with personal data without parental consent, please contact us at **${contactEmail}**, and we will promptly delete the data.

---

## 10. Changes to This Privacy Policy

We may update this Privacy Policy periodically to reflect technological changes, product updates, or legal requirements. When changes are made, we will update the "Effective Date" at the top of this document. Continued use of the Service following notifications of changes indicates acceptance.

---

## 11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our Data Protection representative at:

- **Entity:** ${companyName}
- **Website:** ${websiteUrl}
- **Email:** [${contactEmail}](mailto:${contactEmail})
- **Governing Jurisdiction:** ${jurisdiction}
`;
}
