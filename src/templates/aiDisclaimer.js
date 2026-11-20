export function generateAiDisclaimer(config) {
  const {
    appName = "Your App",
    companyName = "Your Company LLC",
    contactEmail = "support@yourapp.com",
    aiProviders = ["OpenAI", "Anthropic"],
    effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  } = config;

  return `# Artificial Intelligence (AI) Disclaimer & Acceptable Use Policy

**Effective Date:** ${effectiveDate}  
**Applies To:** ${appName} (operated by ${companyName})

This Artificial Intelligence Disclaimer & Acceptable Use Policy supplements the Terms of Service and Privacy Policy for **${appName}**. It details how artificial intelligence technologies are deployed, their inherent operational limitations, and your responsibilities when using AI-powered features.

---

## 1. Third-Party AI Infrastructure

${appName} integrates with state-of-the-art third-party artificial intelligence foundation models provided by:
${aiProviders.map(p => `- **${p}** (Enterprise Developer API)`).join('\n')}

All communications between our application and AI infrastructure providers are conducted via secure, encrypted endpoints. By using our AI features, you acknowledge that your prompt data is routed to these authorized sub-processors solely to generate requested outputs.

---

## 2. Inherent Probabilistic Limitations & Hallucinations

1. **Non-Deterministic Outputs:** Generative artificial intelligence operates through complex probabilistic language and statistical models. Outputs are machine-generated predictions and may occasionally contain factual errors, misstatements, hallucinations, outdated facts, or incomplete conclusions.
2. **Independent Verification Required:** You agree that you must independently evaluate and verify the accuracy, appropriateness, and completeness of any AI-generated text, code, analysis, or recommendation before acting upon or publishing it.
3. **No Substitute for Professional Advice:** AI outputs provided by ${appName} do **NOT** constitute licensed legal, financial, accounting, medical, or engineering advice. Always consult a qualified professional before making high-stakes decisions.

---

## 3. Intellectual Property & Output Rights

1. **Ownership of Inputs:** You retain all intellectual property rights to the prompts, documents, or data you submit to ${appName}.
2. **Assignment of Outputs:** As between you and ${companyName}, you own all rights, title, and interest in and to the unique outputs generated for your account, subject to compliance with our Terms of Service.
3. **Public Model Training Exemption:** We explicitly mandate through developer API terms that your confidential prompt inputs and customer data are **NOT** utilized to train, fine-tune, or improve public foundation models.

---

## 4. Prohibited AI Uses

You agree never to use ${appName}'s AI capabilities to:
- Generate deceptive content, impersonations, deepfakes, or political disinformation.
- Facilitate malware creation, automated exploitation, or unauthorized penetration testing.
- Produce unlawful hate speech, harassment, sexually explicit material involving minors, or self-harm content.
- Circumvent content moderation boundaries or safety classifiers ("jailbreaking").
- Violate the Acceptable Use Policies of underlying model providers (${aiProviders.join(', ')}).

---

## 5. Limitation of Liability for AI Outputs

TO THE FULLEST EXTENT PERMITTED BY LAW, ${companyName.toUpperCase()} DISCLAIMS ALL LIABILITY FOR ANY DAMAGES, LOSSES, OR CLAIMS ARISING DIRECTLY OR INDIRECTLY FROM YOUR RELIANCE ON ANY AI-GENERATED OUTPUTS, RECOMMENDATIONS, OR CALCULATIONS PRODUCED BY ${appName.toUpperCase()}.

---

## 6. Contact & Feedback

If you encounter unexpected AI behavior, harmful outputs, or wish to report an issue, please notify our team at **[${contactEmail}](mailto:${contactEmail})**.
`;
}
