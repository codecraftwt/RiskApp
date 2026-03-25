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

export default function Legal() {
  // On legal page, no section is "active" since it's a separate page
  // But we highlight Home as it's the main navigation back
  const activeSection = "home";
  return (
    <div className="legal-page" style={{ minHeight: "100vh", backgroundColor: "white", fontFamily: "'Segoe UI', sans-serif" }}>
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
      <main className="legal-page-main" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 32px 80px" }}>
        {/* Card 1: Header Card */}
        <div className="legal-page-header-card" style={{
          backgroundColor: "white",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          padding: "32px 40px",
          marginBottom: 24,
        }}>
          <Link href="/" className="legal-page-back-link" style={{
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
            Legal Information
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
        <div className="legal-page-content-card" style={{
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
            Terms of Service
          </h2>

          {/* Intro Paragraph */}
          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            marginBottom: 32,
          }}>
            By using RiskScore AI™ services, you agree to these terms and conditions. Our services are designed to provide AI-powered medical documentation risk management solutions for insurance carriers and healthcare providers.
          </p>

          {/* Section I */}
          <h3 style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0d7377",
            margin: "32px 0 16px",
            lineHeight: 1.3,
          }}>
            Service Description
          </h3>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            marginBottom: 16,
          }}>
            RiskScore AI™ provides risk-scored documentation audits and evaluation services. Our system analyzes medical documentation for clarity, completeness, and compliance without accessing Protected Health Information (PHI).
          </p>

          {/* Section II */}
          <h3 style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0d7377",
            margin: "32px 0 16px",
            lineHeight: 1.3,
          }}>
            Intellectual Property
          </h3>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            marginBottom: 16,
          }}>
            RiskScore AI™ and AI Clinical Scribe™ are trademarks of our company. All content, features, and functionality are owned by us and protected by copyright, trademark, and other intellectual property laws.
          </p>

          {/* Section III */}
          <h3 style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0d7377",
            margin: "32px 0 16px",
            lineHeight: 1.3,
          }}>
            Limitation of Liability
          </h3>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            marginBottom: 16,
          }}>
            Our services are provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from the use of our services. Users should always verify results and consult with legal professionals for compliance matters.
          </p>

          {/* Section IV */}
          <h3 style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0d7377",
            margin: "32px 0 16px",
            lineHeight: 1.3,
          }}>
            Contact Information
          </h3>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(26,26,46,0.8)",
            marginBottom: 12,
          }}>
            For legal inquiries or questions about these terms, please contact us:
          </p>

          {/* Email Box with teal-50 background */}
          <div className="legal-page-email-box" style={{
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
