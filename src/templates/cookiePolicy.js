export function generateCookiePolicy(config) {
  const {
    appName = "Your App",
    companyName = "Your Company LLC",
    websiteUrl = "https://yourapp.com",
    contactEmail = "support@yourapp.com",
    effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    analytics = ["Google Analytics"]
  } = config;

  return `# Cookie Policy for ${appName}

**Effective Date:** ${effectiveDate}  
**Last Updated:** ${effectiveDate}

This Cookie Policy explains how **${companyName}** ("we", "us", or "our") uses cookies, local storage, and similar tracking technologies on the **${appName}** website ([${websiteUrl}](${websiteUrl})).

---

## 1. What Are Cookies?

Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit web pages. They are widely used to make websites work efficiently, provide personalized experiences, maintain session authentication, and deliver analytical reporting.

---

## 2. Categories of Cookies We Use

We utilize the following categories of cookies and browser storage mechanisms:

### A. Strictly Necessary Cookies (Essential)
These cookies are required for the basic operation and security of ${appName}. They enable core features such as user authentication, session persistence, CSRF protection, and load balancing. The website cannot function properly without these cookies.

### B. Functional & Preference Cookies
These cookies remember your preferences, such as selected theme (dark/light mode), interface language, or customized workspace settings, delivering an optimized, personalized user experience.

### C. Performance & Analytics Cookies
${analytics.length > 0 ? `We utilize analytics partners (${analytics.join(', ')}) to gather anonymized information regarding how visitors interact with our Service. This data helps us understand bounce rates, popular features, navigation bottlenecks, and system performance.` : `We do not utilize intrusive third-party cross-site behavioral tracking cookies.`}

---

## 3. How to Manage and Disable Cookies

Most modern web browsers allow you to manage your cookie preferences through browser settings:
- You can configure your browser to reject all cookies, notify you when a cookie is placed, or delete existing cookies.
- Please note that if you disable strictly necessary cookies, some features of ${appName} may become unavailable or fail to function properly.

Browser instructions:
- **Google Chrome:** Settings > Privacy and Security > Cookies and other site data
- **Mozilla Firefox:** Preferences > Privacy & Security > Cookies and Site Data
- **Apple Safari:** Preferences > Privacy > Block all cookies
- **Microsoft Edge:** Settings > Privacy, search, and services > Cookies

---

## 4. Updates to This Cookie Policy

We may update this Cookie Policy from time to time to reflect operational, legal, or regulatory updates. Please revisit this page periodically to remain informed.

---

## 5. Contact Us

If you have questions regarding our use of cookies or tracking technologies, please contact:

- **Entity:** ${companyName}
- **Website:** ${websiteUrl}
- **Email:** [${contactEmail}](mailto:${contactEmail})
`;
}
