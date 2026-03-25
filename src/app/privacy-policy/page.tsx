"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "Risk Score AI", href: "/#risk-score-ai", id: "risk-score-ai" },
  { label: "Why Us", href: "/#why-us", id: "why-us" },
  { label: "Overview", href: "/#overview", id: "overview" },
  { label: "Scoring Methodology", href: "/#scoring-methodology", id: "scoring-methodology" },
  { label: "API", href: "https://app.riskscoreai.com/api-docs", external: true, id: "api" },
];

export default function PrivacyPolicy() {
  // On privacy policy page, no section is "active" since it's a separate page
  // But we highlight Home as it's the main navigation back
  const activeSection = "home";
  return (
    <div className="privacy-page" style={{ minHeight: "100vh", backgroundColor: "white", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header - Same as Home Page */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        backgroundColor: "rgba(248,247,255,0.97)",
        backdropFilter: "blur(8px)",
      }}>
        <div className="header-inner" style={{
          maxWidth: 1400, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 32px",
        }}>
          {/* Logo */}
          <Link href="/" className="header-logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.svg"
              alt="RiskScore AI"
              width={180}
              height={36}
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: activeSection === link.id ? "#7c5cbf" : "rgba(26,26,46,0.75)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://app.riskscoreai.com/login/insurance-partner"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-header btn-get-started"
            style={{
              display: "flex", alignItems: "center", gap: 7,
              borderRadius: 50,
              background: "linear-gradient(135deg, #7c5cbf, #9b72cb)",
              border: "none",
              padding: "10px 22px",
              fontSize: 13.5,
              fontWeight: 600,
              color: "white",
              cursor: "pointer",
              letterSpacing: "0.1px",
              textDecoration: "none",
            }}
          >
            Get Started
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="privacy-page-main" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 32px 80px" }}>
        {/* Card 1: Header Card */}
        <div className="privacy-page-header-card" style={{
          backgroundColor: "white",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          padding: "32px 40px",
          marginBottom: 24,
        }}>
          <Link href="/" className="privacy-page-back-link" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            color: "rgb(19, 78, 74)",
            marginBottom: 16,
          }}>
            <ArrowLeft size={16} />
            Back
          </Link>
          
          <h1 style={{
            fontSize: 36,
            fontWeight: 700,
            color: "rgb(19, 78, 74)",
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}>
            Privacy Policy
          </h1>

          <p style={{
            fontSize: 14,
            color: "#0d7377",
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
          }}>
            Last updated: 25/03/2026
          </p>
        </div>

        {/* Card 2: Content Card */}
        <div className="privacy-page-content-card" style={{
          backgroundColor: "white",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          padding: "40px",
        }}>
          {/* Main Heading */}
          <h2 style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#0d7377",
            margin: "0 0 24px",
            lineHeight: 1.3,
          }}>
            RISK SCORE AI™ Privacy & Security
          </h2>

        {/* Intro Paragraph */}
        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 32,
        }}>
          At Risk Score AI™ (&ldquo;Risk Score AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we understand that you care about how your information is used and shared. This privacy policy (the &ldquo;Privacy Policy&rdquo;) describes our practices regarding the collection and use of information in connection with our website located at https://www.riskscoreai.com (the &ldquo;Website&rdquo;), our proprietary software as a service (SaaS) platform (the &ldquo;Platform&rdquo;), which is available as a web application via our Website and/or a mobile application (if any), and when you otherwise interact with us in any way.
        </p>

        {/* Section I */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          I. Description of Users and Acceptance of Terms
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          This Privacy Policy applies to visitors to the Website who view only publicly-available content (&ldquo;Visitors&rdquo;), customers who have signed up to access and use the Platform (the &ldquo;Customers&rdquo;), and Customer&apos;s employees and contractors authorized by Customer to access and use the Platform (&ldquo;Authorized Users&rdquo;).
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          By visiting our Website, Visitors agree to the terms of this Privacy Policy and the accompanying Terms of Use.
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          By accessing and/or using the Platform, each Customer and Authorized User agrees to the terms of this Privacy Policy and the accompanying Platform Terms of Use.
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 32,
        }}>
          Capitalized terms not defined in this Privacy Policy shall have the meaning set forth in our Terms of Use.
        </p>

        {/* Section II */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          II. The Information We Collect and/or Receive
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 24,
        }}>
          In the course of operating the Website and the Platform, and interacting with you, we collect and receive various types of information. You authorize us to collect and receive such information.
        </p>

        {/* Subsections */}
        <h4 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#0d7377",
          margin: "24px 0 12px",
          lineHeight: 1.3,
        }}>
          1. Contact Information
        </h4>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          When you contact us through the Website, email, mail, or phone, or when you subscribe to receive more information about our products and services, you will be asked to provide certain information, including your name, email address, phone number, company name, job title, and any other information you provide (collectively, the &ldquo;Contact Information&rdquo;). We use this information to provide the requested service or information and to contact you for direct marketing of our current and future services.
        </p>

        <h4 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#0d7377",
          margin: "24px 0 12px",
          lineHeight: 1.3,
        }}>
          2. Account Information
        </h4>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          To access and use our Platform, you must create an account. During the account creation process, you will be asked to provide your email address and create a password (collectively, &ldquo;Account Information&rdquo;). We use this information to process the creation of your account, verify your identity, and manage your account.
        </p>

        <h4 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#0d7377",
          margin: "24px 0 12px",
          lineHeight: 1.3,
        }}>
          3. Your Data
        </h4>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          In using the Platform, you will provide us with Your Data. We will use Your Data (excluding any personal information contained therein) in accordance with our Platform Terms of Use. Any personal information in Your Data will be used according to this Privacy Policy.
        </p>

        <h4 style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#0d7377",
          margin: "24px 0 12px",
          lineHeight: 1.3,
        }}>
          4. Information Obtained Automatically from Your Online Activity
        </h4>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          When you access or use the Website and the Platform, we use browser cookies, pixels, web beacons, and similar technologies (collectively, &ldquo;Tracking Technologies&rdquo;) to automatically collect certain technical information and other data (such as traffic data, usage data, location data, device information, logs, and other communications data). We may also evaluate your computer, mobile phone, or other access devices for malicious software or activity that may affect the availability of our Website and Platform.
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          When you access or use the Website and the Platform, third parties such as advertising companies, analytics networks, and providers may use Tracking Technologies to collect information about your online activities over time and across different websites, apps, and devices. This data may include personal information and/or statistical data that may not identify you personally; however, we or third parties may maintain, combine, or associate it with personal information collected in other ways or received from third parties. We and/or third parties use this information to enhance the performance and functionality of the Website and Platform, personalize your experience, serve targeted advertising, and for analytics purposes.
        </p>

        {/* Section III */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          III. How We Use and Share the Information
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          We may use and share your personal information for the following purposes:
        </p>

        <ul style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 24,
          paddingLeft: 0,
          listStyle: "none",
        }}>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To provide the Website and the Platform;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To solicit your feedback and inform you about our products and services and those of our third-party marketing partners;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To monitor, support, analyze, and improve the Website and Platform;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To communicate with you regarding the Website and Platform;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To fulfill your requests for information about new or improved products and services;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To engage in marketing, advertising, and tracking activities, and evaluate the efficacy of our efforts;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To conduct research, project planning, troubleshooting problems, and detecting and protecting against error, fraud, or other criminal activity;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To protect the safety and security of our Website and Platform, businesses, and customers;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To third-party contractors and service providers that assist us with the operation of our business and the Website and Platform;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To create and disclose aggregated, anonymous user statistics and other information;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To share some or all of your information with our parent company, subsidiaries, affiliates, or other companies under common control with us;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To fulfill our legal and regulatory requirements;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To comply with applicable law and respond to legal processes;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To assess or complete corporate transactions;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To audit our internal processes for compliance with legal and contractual requirements or our internal policies;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>To prevent, identify, investigate, and deter fraudulent, harmful, unauthorized, unethical, or illegal activity;</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span style={{ color: "#0d7377", fontWeight: 700, minWidth: 20 }}>•</span>
            <span>Otherwise, with your consent.</span>
          </li>
        </ul>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 32,
        }}>
          We will take reasonable measures (e.g., by contract) to require that any party receiving your personal information from us, including for purposes of providing the Website and Platform, undertakes to: (i) retain and use such information only for the purposes set out in this Privacy Policy; (ii) not disclose your personal information except with your consent, as permitted by applicable law, or as permitted by this Privacy Policy; and (iii) generally protect the privacy of your personal information.
        </p>

        {/* Section IV */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          IV. Accessing and Modifying Information and Communication Preferences
        </h3>

        <p style={{
          fontSize: 15,
          fontWeight: 700,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 12,
        }}>
          Update Information:
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          If the personal information we have for you changes, you may correct, update, or delete it by contacting us as set forth in Section XIII of this Privacy Policy. You may correct, update, or delete some of your personal information directly in your account on the Platform. We will use commercially reasonable efforts to process all such requests in a timely manner. Please note that it is not always possible to completely remove or modify information in our databases. Additionally, we will retain and use your information as necessary to comply with our legal and/or regulatory obligations, resolve disputes, and enforce our agreements.
        </p>

        <p style={{
          fontSize: 15,
          fontWeight: 700,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 12,
        }}>
          Marketing Communications:
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          You may manage your receipt of marketing and non-transactional communications by clicking on the &ldquo;unsubscribe&rdquo; link located at the bottom of any of our marketing emails. Please note that you cannot opt-out of receiving transactional emails. Website Visitors who do not want us to associate them with their email or home address to receive marketing communications at these addresses may opt out by visiting https://app.retention.com/optout.
        </p>

        <p style={{
          fontSize: 15,
          fontWeight: 700,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 12,
        }}>
          Cookie Management:
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          Most browsers let you remove or reject cookies. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. Please note that if you disable cookies or other Tracking Technologies, the Website and Platform may not work properly. For more information about cookies, including how to see what cookies have been set on your browser and how to manage and delete them, visit www.allaboutcookies.org.
        </p>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 32,
        }}>
          You will need to apply these opt-out settings on each device from which you wish to opt out. We cannot offer any assurances as to whether the companies we work with participate in the opt-out programs described above.
        </p>

        {/* Section V */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          V. How We Protect the Information
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          We take commercially reasonable security measures to ensure that your information is treated securely and protected from loss, misuse, and unauthorized access, disclosure, alteration, and destruction, considering the risks involved in processing and the nature of such data, and in compliance with applicable laws and regulations. Unfortunately, the Internet cannot be guaranteed to be 100% secure, and we cannot ensure or warrant the security of any information you provide to us. In particular, email sent to or from the Website and/or the Platform may not be secure, and you should take special care in deciding what information you send to us via email or other electronic means. We do not accept liability for unintentional disclosure of your information.
        </p>

        {/* Section VI */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          VI. External Sites
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          The Website and Platform may contain links to external third-party websites (&ldquo;External Sites&rdquo;). Risk Score AI™ has no control over the privacy practices or the content of these External Sites. As such, we are not responsible for the content or the privacy policies of those External Sites. You should check the applicable third-party privacy policy and terms of use when visiting any External Sites.
        </p>

        {/* Section VII */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          VII. Children
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          We do not knowingly collect personal information from children under the age of 18 through the Website and the Platform. If you are under 18, please do not give us any personal information. We encourage parents and legal guardians to monitor their children&apos;s Internet usage and help enforce our Privacy Policy by instructing their children never to provide personal information through the Website and the Platform without their permission. If you believe that a child under the age of 18 has provided personal information to us, please contact us, and we will endeavor to delete that information from our databases.
        </p>

        {/* Section VIII */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          VIII. Important Notice to Non-U.S. Residents
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          The Website, Platform, and their servers are operated in the United States. If you are located outside of the United States, please be aware that any information you provide to us may be transferred to, processed, maintained, and used on computers, servers, and systems located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside the United States and choose to use our Website and/or Platform, you consent to any transfer and processing of your personal information in accordance with this Privacy Policy and do so at your own risk.
        </p>

        {/* Section IX */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          IX. Do Not Track
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          As discussed above, third parties such as advertising networks and analytics providers may collect information about your online activities over time and across different websites when you access or use the Website and the Platform. Currently, various browsers offer a &ldquo;Do Not Track&rdquo; option, but there is no standard for commercial websites. At this time, we do not monitor, recognize, or honor any opt-out or do not track mechanisms, including general web browser &ldquo;Do Not Track&rdquo; settings and/or signals.
        </p>

        {/* Section X */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          X. Notice to California Residents
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          Pursuant to Section 1798.83 of the California Civil Code, residents of California have the right to obtain certain information about the types of personal information that companies with whom they have an established business relationship (and that are not otherwise exempt) have shared with third parties for direct marketing purposes during the preceding calendar year, including the names and addresses of those third parties, and examples of the types of services or products marketed by those third parties. If you wish to submit a request pursuant to Section 1798.83, please contact us via email at support@riskscoreai.com.
        </p>

        {/* Section XI */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          XI. Notice to Nevada Residents
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          If you are a resident of Nevada, you have the right to opt-out of the sale of certain personal information to third parties. You can exercise this right by contacting us at support@riskscoreai.com with the subject line &ldquo;Nevada Do Not Sell Request&rdquo; and providing us with your name and the email address associated with your account. Please note that we do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A.
        </p>

        {/* Section XII */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          XII. Changes to This Privacy Policy
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 16,
        }}>
          This Privacy Policy is effective as of the date stated at the top of this Privacy Policy. We may change this Privacy Policy from time to time with or without notice to you. Any such changes will be posted on the Website and the Platform. By visiting the Website, and/or accessing and/or using the Platform after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes. Please be aware that, to the extent permitted by applicable law, and without prejudice to the foregoing, our use of your information is governed by the Privacy Policy in effect at the time we collect the information. Please refer back to this Privacy Policy on a regular basis.
        </p>

        {/* Section XIII */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0d7377",
          margin: "32px 0 16px",
          lineHeight: 1.3,
        }}>
          XIII. Contact Us
        </h3>

        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "rgba(26,26,46,0.8)",
          marginBottom: 12,
        }}>
          If you have any questions about this Privacy Policy or to report a privacy issue, please contact us:
        </p>

          {/* Email Box with teal-50 background */}
          <div className="privacy-page-email-box" style={{
            backgroundColor: "rgb(240, 253, 250)",
            borderRadius: 12,
            padding: "20px 24px",
            marginTop: 24,
          }}>
          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            margin: 0,
          }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@riskscoreai.com"
              style={{
                color: "#0d7377",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              support@riskscoreai.com
            </a>
          </p>
        </div>
        </div>{/* End of Content Card */}
      </main>
    </div>
  );
}
