"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Eye,
  RefreshCw,
  Scale,
  Send,
  Target,
  Check,
  TrendingUp,
} from "lucide-react";

const navLinksConfig = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Risk Score AI", href: "#risk-score-ai", id: "risk-score-ai" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "Scoring Methodology", href: "#scoring-methodology", id: "scoring-methodology" },
  { label: "API", href: "https://app.riskscoreai.com/api-docs", external: true, id: "api" },
];

export default function Home() {
  const [scoringActiveBlock, setScoringActiveBlock] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinksConfig
        .filter(link => !link.external)
        .map(link => ({
          id: link.id,
          element: document.getElementById(link.id),
        }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header className="main-header" style={{
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
            {navLinksConfig.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!link.external && link.href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      // Home and Why Us get 120px, Overview gets 50px, others get 0
                      const headerOffset = link.id === "home" || link.id === "why-us" ? 68: link.id === "overview" ? 50 : 0;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: activeSection === link.id ? "#7c5cbf" : "rgba(26,26,46,0.75)",
                  transition: "color 0.2s",
                  cursor: "pointer",
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

      <main style={{ position: "relative" }}>
        {/* Hero Section */}
        <section id="home" className="hero-section" style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 32px 0" }}>
          <div style={{ position: "relative" }}>
            {/* Gradient background with overlays (clipped) */}
            <div className="hero-gradient-bg" style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              overflow: "hidden",
              background: "linear-gradient(135deg, #1BA1E3 0%, #9B72CB 45%, #D96570 72%, #F49C46 100%)",
            }}>
            {/* Three glassmorphism overlays - left (tall left on top, small right at back) */}
            <div className="hero-overlays-left" style={{
              position: "absolute", bottom: 0, left: 0,
              display: "flex", alignItems: "flex-end",
              zIndex: 0,
              gap: 0,
            }}>
              <div style={{
                position: "relative",
                zIndex: 2,
                width: 120,
                height: 420,
                borderTopRightRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                zIndex: 1,
                width: 140,
                height: 340,
                borderTopRightRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
                marginLeft: -70,
              }} />
              <div style={{
                position: "relative",
                zIndex: 0,
                width: 130,
                height: 250,
                borderTopRightRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
                marginLeft: -70,
              }} />
            </div>
            {/* Three glassmorphism overlays - right (tall right on top, small left at back) */}
            <div className="hero-overlays-right" style={{
              position: "absolute", bottom: 0, right: 0,
              display: "flex", alignItems: "flex-end",
              zIndex: 0,
              gap: 0,
            }}>
              <div style={{
                position: "relative",
                zIndex: 0,
                width: 130,
                height: 250,
                borderTopLeftRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
                marginRight: -70,
              }} />
              <div style={{
                position: "relative",
                zIndex: 1,
                width: 140,
                height: 340,
                borderTopLeftRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
                marginRight: -70,
              }} />
              <div style={{
                position: "relative",
                zIndex: 2,
                width: 120,
                height: 420,
                borderTopLeftRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
              }} />
            </div>

            </div>
            {/* Hero content */}
            <div className="hero-content" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "80px 60px 0" }}>
              {/* Badge */}
              <a href="#" className="btn" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                borderRadius: 50,
                backgroundColor: "rgba(255,255,255,0.22)",
                backdropFilter: "blur(6px)",
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
                marginBottom: 28,
                border: "1px solid rgba(255,255,255,0.3)",
              }}>
                RiskScore AI
                <ArrowUpRight size={14} />
              </a>

              {/* Heading */}
              <h1 className="hero-heading" style={{
                maxWidth: "100%",
                width: "100%",
                fontWeight: 800,
                fontSize: 72,
                lineHeight: 1.12,
                color: "white",
                marginBottom: 20,
                letterSpacing: "-1px",
                textAlign: "center",
              }}>
                <span style={{ display: "block" }}>The Future of Medical</span>
                <span className="hero-heading-line2" style={{ display: "block", whiteSpace: "nowrap" }}>Documentation Risk Management</span>
              </h1>

              {/* Sub */}
              <p style={{
                maxWidth: 640,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.93)",
                marginBottom: 36,
              }}>
                RiskScore AI aids insurers and physicians in documentation without PHI access. It automates reviews and offers risk-scored audits.
              </p>

              {/* CTA Button */}
              <a
                href="https://app.riskscoreai.com/login/insurance-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero btn-get-started"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  borderRadius: 50,
                  backgroundColor: "white",
                  border: "none",
                  padding: "12px 28px",
                  margin: "16px 0",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  cursor: "pointer",
                  letterSpacing: "-0.1px",
                  textDecoration: "none",
                }}
              >
                Get Started
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
            </div>

            {/* Feature Cards - inside hero, flush to bottom */}
            <div className="hero-cards-grid" style={{
              position: "relative",
              zIndex: 10,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              padding: "40px 60px 0",
            }}>

            {/* Left Card */}
            <div className="hero-card hero-card-left" style={{
              alignSelf: "flex-end",
              height: 175,
              borderRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "white",
              padding: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}>
              <div className="hero-card-left-inner" style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", gap: 16, height: "100%" }}>
                {/* Left side: logo + text */}
                <div className="hero-card-left-text" style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: 50,
                    background: "radial-gradient(171.1% 260.03% at -4.9% -112.36%, #1BA1E3 0%, #5489D6 30%, #9B72CB 54.5%, #D96570 82.5%, #F49C46 100%)",
                    display: "flex", alignItems: "center", justifyContent: "flex-end",
                    flexShrink: 0,
                    paddingRight: 6,
                  }}>
                    <Image src="/filetext.svg" alt="" width={15} height={15} />
                  </div>
                  <h4 style={{ fontWeight: 800, fontSize: 16, color: "#1a1a2e", margin: 0 }}>
                    Scoring Audits of Clinical Notes
                  </h4>
                  <p className="hero-card-left-desc" style={{ fontSize: 12, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    Evaluates structure, rationale, follow-ups, consent, &amp; more.
                  </p>
                </div>
                {/* Right side: 97% + mini bar chart */}
                <div className="hero-card-left-stats" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                  backgroundColor: "#F9F9F9",
                  padding: 10,
                  borderRadius: 8,
                }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 2.5 }}>
                    <div style={{ height: 14, width: 6, borderRadius: 3, backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 18, width: 6, borderRadius: 3, backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 14, width: 6, borderRadius: 3, backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 20, width: 6, borderRadius: 3, backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 18, width: 6, borderRadius: 3, backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 23, width: 6, borderRadius: 3, backgroundColor: "#5489D6" }} />
                  </div>
                  <p style={{ marginTop: 4, fontSize: 18, fontWeight: 700, color: "#1a1a2e", marginBottom: 2, lineHeight: 1 }}>
                    97%
                  </p>
                  <p style={{ margin: 0, fontSize: 9, fontWeight: 600, color: "rgba(26,26,46,0.6)" }}>
                    Visit-ready notes
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Card - elevated */}
            <div className="hero-card hero-card-middle" style={{
              borderRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "white",
              padding: 24,
              boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
              marginTop: -16,
              transform: "scale(1.03)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: 50,
                    background: "radial-gradient(171.1% 260.03% at -4.9% -112.36%, #1BA1E3 0%, #5489D6 30%, #9B72CB 54.5%, #D96570 82.5%, #F49C46 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <RefreshCw size={15} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(26,26,46,0.85)" }}>Visit Note Status</div>
                    <div style={{ fontSize: 11, color: "rgba(26,26,46,0.45)" }}>Clear progress tracking</div>
                  </div>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  borderRadius: 50, backgroundColor: "#dcfce7",
                  padding: "4px 10px",
                  flexShrink: 0,
                }}>
                  <TrendingUp size={13} color="#16a34a" strokeWidth={2} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#15803d" }}>12%</span>
                </div>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", marginBottom: 6 }}>
                Risk Mitigation Dashboard
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(26,26,46,0.7)", marginBottom: 20 }}>
                Flag at-risk providers. Track trends. Intervene early.
              </p>

              {/* Stepper */}
              <div style={{ marginBottom: 14 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 0,
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.08)",
                  padding: 8,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}>
                  <div style={{
                    width: 25, height: 25, borderRadius: 50,
                    backgroundColor: "#A083F1",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    zIndex: 1,
                  }}>
                    <Send size={10} color="white" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, height: 5, backgroundColor: "#A083F1", margin: "0 -2px" }} />
                  <div style={{
                    width: 25, height: 25, borderRadius: 50,
                    backgroundColor: "#A083F1",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    zIndex: 1,
                  }}>
                    <FileText size={10} color="white" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, height: 5, margin: "0 -2px", borderRadius: 3, background: "linear-gradient(to right, #A083F1 50%, rgba(160,131,241,0.2) 50%)" }} />
                  <div style={{
                    width: 25, height: 25, borderRadius: 50,
                    border: "1px solid #D6DBE2",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    zIndex: 1,
                    backgroundColor: "#D6DBE2",
                  }}>
                    <Check size={10} color="white" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div className="hero-card-status-badges" style={{ display: "flex", gap: 8 }}>
                <span style={{
                  borderRadius: 50, backgroundColor: "rgba(249,115,22,0.12)",
                  padding: "4px 12px", fontSize: 11.5, fontWeight: 600, color: "#ea6c1a",
                }}>
                  In Session
                </span>
                <span style={{
                  borderRadius: 50, backgroundColor: "rgba(74,144,217,0.12)",
                  padding: "4px 12px", fontSize: 11.5, fontWeight: 600, color: "#3b7fc4",
                }}>
                  Review
                </span>
                <span style={{
                  borderRadius: 50, backgroundColor: "#dcfce7",
                  padding: "4px 12px", fontSize: 11.5, fontWeight: 600, color: "#15803d",
                }}>
                  Ready
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="hero-card hero-card-right" style={{
              alignSelf: "flex-end",
              height: 175,
              borderRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "white",
              padding: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}>
              {/* Row 1: logo + Visit Summary Snapshot */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{
                  width: 32, height: 32,
                  borderRadius: 50,
                  background: "radial-gradient(171.1% 260.03% at -4.9% -112.36%, #1BA1E3 0%, #5489D6 30%, #9B72CB 54.5%, #D96570 82.5%, #F49C46 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Eye size={14} color="white" strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
                  Visit Summary Snapshot
                </h4>
              </div>

              {/* Row 2: Left div (header + text) | Right div (donut chart) */}
              <div className="hero-card-right-row2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                {/* Left div */}
                <div className="hero-card-right-text" style={{ flex: 1, minWidth: 0 }}>
                  <h4 className="hero-card-right-title" style={{ fontWeight: 800, fontSize: 16, color: "#1a1a2e", marginBottom: 6, lineHeight: 1.3 }}>
                    <span style={{ whiteSpace: "nowrap" }}>Zero PHI Required HIPAA</span>
                    <br />
                    -compliant
                  </h4>
                  <p className="hero-card-right-desc" style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    Fully HIPAA-compliant. No protected health data accessed or stored.
                  </p>
                </div>
                {/* Right div: Donut chart + legend - exact match to design */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, minWidth: 100 }}>
                  <div style={{ position: "relative", width: 52, height: 52 }}>
                    <svg width="52" height="52" viewBox="0 0 46 46">
                      {/* Background track */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#e8e8ed" strokeWidth="5" />
                      {/* Blue ~62% - largest */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#1BA1E3" strokeWidth="5"
                        strokeDasharray="60 47" strokeDashoffset="0" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                      {/* Orange ~27% - second */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#F49C46" strokeWidth="5"
                        strokeDasharray="27 80" strokeDashoffset="-63" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                      {/* Red ~11% - smallest */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#D96570" strokeWidth="5"
                        strokeDasharray="11 96" strokeDashoffset="-93" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1BA1E3", flexShrink: 0 }} />
                      <div style={{ height: 6, width: 36, borderRadius: "999px", backgroundColor: "rgba(26,26,46,0.18)" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F49C46", flexShrink: 0 }} />
                      <div style={{ height: 6, width: 28, borderRadius: "999px", backgroundColor: "rgba(26,26,46,0.12)" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#D96570", flexShrink: 0 }} />
                      <div style={{ height: 6, width: 20, borderRadius: "999px", backgroundColor: "rgba(26,26,46,0.08)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>

        {/* What's Risk Score AI Section */}
        <section id="risk-score-ai" className="whats-risk-score" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px 80px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#1a1a2e",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}>
              What&apos;s{" "}
              <span style={{
                background: "linear-gradient(135deg, #9B72CB, #5489D6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Risk Score AI
              </span>
            </h2>
            <p style={{
              maxWidth: 1000,
              margin: "0 auto",
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(26,26,46,0.7)",
            }}>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>Every malpractice case hinges on one thing: the note. Was it documented? Was it complete? Was it timely? RiskScore AI™ turns</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>documentation into a defense strategy, by scoring each note for clarity, completeness, & compliance.</span>
            </p>
          </div>

          {/* Main Grid: Image (left) | Cards (right) */}
          <div className="whats-risk-score-grid" style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.4fr) minmax(0, 0.6fr)",
            gap: 32,
            alignItems: "stretch",
          }}>
            {/* Left: Image with glassmorphism overlay */}
            <div className="whats-risk-score-image" style={{ position: "relative", borderRadius: 24, overflow: "hidden", height: "100%", minHeight: 520 }}>
              <Image
                src="/hero1.png"
                alt="Doctor using tablet in clinical setting"
                width={520}
                height={680}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Glassmorphism overlay card - bottom left */}
              <div style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                padding: 16,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                maxWidth: 220,
              }}>
                {/* Donut chart: Outpatient 72%, Specialty 19%, Hospital 9% */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <svg width="56" height="56" viewBox="0 0 46 46">
                    <circle cx="23" cy="23" r="17" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="5" />
                    <circle cx="23" cy="23" r="17" fill="none" stroke="#D96570" strokeWidth="5"
                      strokeDasharray="77 30" strokeDashoffset="0" strokeLinecap="round"
                      transform="rotate(-90 23 23)" />
                    <circle cx="23" cy="23" r="17" fill="none" stroke="#F49C46" strokeWidth="5"
                      strokeDasharray="20 87" strokeDashoffset="-79" strokeLinecap="round"
                      transform="rotate(-90 23 23)" />
                    <circle cx="23" cy="23" r="17" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="5"
                      strokeDasharray="10 97" strokeDashoffset="-101" strokeLinecap="round"
                      transform="rotate(-90 23 23)" />
                  </svg>
                  <span style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "white",
                  }}>
                    72%
                  </span>
                </div>
                {/* Legend */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#D96570", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "white", fontWeight: 500 }}>Outpatient: 72%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F49C46", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "white", fontWeight: 500 }}>Specialty: 19%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.8)", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "white", fontWeight: 500 }}>Hospital: 9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Cards */}
            <div className="whats-risk-score-cards" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Top row: 2 cards */}
              <div className="whats-risk-score-top-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Get Help card */}
                <div style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 24,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Image src="/globe.svg" alt="" width={30} height={30} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>Get Help</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    Get fast, reliable help whenever you need it. Our team is available to assist with onboarding, setup, and day-to-day questions.
                  </p>
                </div>
                {/* Clearer Notes card */}
                <div style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 24,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Image src="/filetext2.svg" alt="" width={25} height={25} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>Clearer Notes, Better<br />Coverage</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    Generate structured notes in real time & improve documentation clarity across your team.
                  </p>
                </div>
              </div>

              {/* Bottom: Clarity Trend card */}
              <div style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 24,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                position: "relative",
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              }}>
                <span style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  borderRadius: 50,
                  backgroundColor: "#dcfce7",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#15803d",
                }}>
                  +8%
                  <TrendingUp size={14} strokeWidth={2} />
                </span>
                <p style={{ fontSize: 12, color: "rgba(26,26,46,0.5)", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 8px" }}>Clarity Trend</p>
                <p style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e", margin: "0 0 20px" }}>92/100</p>
                {/* Bar chart */}
                <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 150, marginBottom: 12, borderRadius: 20 }}>
                  {[30, 50, 80, 90, 30, 60, 70, 50, 80, 60, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        minHeight: 8,
                        borderRadius: 8,
                        backgroundColor: i === 10 ? "#F49C46" : "rgba(244,156,70,0.2)",
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12, color: "rgba(26,26,46,0.5)" }}>
                  <span>Last Month</span>
                  <span>Current</span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(26,26,46,0.6)", margin: 0, fontWeight: 600 }}>Monthly improvement tracked across team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Insurers Choose RiskScore AI Section - full width bg, content same width as other sections */}
        <section id="why-us" className="why-insurers" style={{
          width: "100%",
          backgroundColor: "#F6F6F6",
          padding: "80px 0",
        }}>
          <div className="why-insurers-grid" style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.6fr) minmax(0, 0.4fr)",
            gap: 48,
            alignItems: "center",
          }}>
            {/* Left: Text content */}
            <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", textAlign: "left" }}>
              <h2 style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}>
                Why Insurers
                <br />
                Choose <span style={{ color: "#9B72CB" }}>RiskScore AI</span>
              </h2>
              <p style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(26,26,46,0.75)",
                margin: "0 0 32px",
                maxWidth: 540,
              }}>
                RiskScore AI™ is a patent-pending solution that empowers both insurers and physicians to evaluate, improve, and protect medical documentation at scale, all without accessing PHI. For providers, it delivers AI-driven feedback that strengthens chart quality, reduces malpractice exposure, and saves valuable time by automating documentation review. For insurers, it provides risk-scored documentation audits that transform how they measure risk, reduce litigation, and improve profitability.
              </p>
              <button className="btn btn-purple" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 9999,
                backgroundColor: "#9B72CB",
                border: "none",
                color: "white",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                Access RiskScore AI
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
            {/* Right: Image - square, larger */}
            <div className="why-insurers-image" style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1 / 1", maxWidth: 560, justifySelf: "end", marginRight: 24 }}>
              <Image
                src="/hero2.png"
                alt="Medical professionals reviewing documentation"
                width={560}
                height={560}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Section - 3 cards */}
        <section id="overview" className="features-section" style={{
          width: "100%",
          backgroundColor: "white",
          padding: "80px 0",
        }}>
          <div className="features-grid" style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}>
            {/* Card 1 - Orange */}
            <div className="features-card" style={{
              borderRadius: 24,
              border: "1px solid rgba(244,156,70,0.4)",
              background: "linear-gradient(135deg, rgba(244,156,70,0.12) 0%, white 100%)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#F49C46",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}>
                <Image src="/sparcle.svg" alt="" width={20} height={20} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px", lineHeight: 1.3 }}>
                Scoring Audits of Clinical Notes
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,46,0.75)", margin: "0 0 24px", flex: 1 }}>
                Evaluates structure, rationale, follow-ups, consent, & more.
              </p>
              <button className="btn btn-outline" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                Learn More
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>

            {/* Card 2 - Blue */}
            <div className="features-card" style={{
              borderRadius: 24,
              border: "1px solid rgba(27,161,227,0.4)",
              background: "linear-gradient(135deg, rgba(27,161,227,0.12) 0%, white 100%)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#1BA1E3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}>
                <Image src="/bar.svg" alt="" width={20} height={20} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px", lineHeight: 1.3 }}>
                Risk Mitigation Dashboard
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,46,0.75)", margin: "0 0 24px", flex: 1 }}>
                Flag at-risk providers. Track trends. Intervene early.
              </p>
              <button className="btn btn-outline" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                Learn More
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>

            {/* Card 3 - Red/Pink */}
            <div className="features-card" style={{
              borderRadius: 24,
              border: "1px solid rgba(217,101,112,0.4)",
              background: "linear-gradient(135deg, rgba(217,101,112,0.12) 0%, white 100%)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#D96570",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}>
                <Image src="/database.svg" alt="" width={24} height={24} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px", lineHeight: 1.3 }}>
                Zero PHI Required HIPAA-compliant
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,46,0.75)", margin: "0 0 24px", flex: 1 }}>
                Fully HIPAA-compliant. No protected health data accessed or stored.
              </p>
              <button className="btn btn-outline" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                Learn More
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </section>

        {/* Risk Score AI Scoring Methodology Section */}
        <section id="scoring-methodology" className="scoring-methodology" style={{
          width: "100%",
          backgroundColor: "#F7F7F7",
          padding: "80px 0",
        }}>
          <div style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}>
            {/* Header */}
            <div className="scoring-methodology-header" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "0 0 4px",
                lineHeight: 1.2,
              }}>
                Risk Score AI
              </h2>
              <h2 style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#9B72CB",
                margin: 0,
                lineHeight: 1.2,
              }}>
                Scoring Methodology
              </h2>
            </div>

            {/* Two-column: Text blocks (left) | Image (right) */}
            <div className="scoring-methodology-grid" style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.45fr) minmax(0, 0.55fr)",
              gap: 48,
              alignItems: "center",
            }}>
              {/* Left: Two text blocks */}
              <div className="scoring-methodology-text" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Block 1: White card with purple left border */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setScoringActiveBlock(0)}
                  onKeyDown={(e) => e.key === "Enter" && setScoringActiveBlock(0)}
                  style={{
                    backgroundColor: scoringActiveBlock === 0 ? "white" : "transparent",
                    borderRadius: 16,
                    padding: 24,
                    borderLeft: scoringActiveBlock === 0 ? "4px solid #9B72CB" : "4px solid transparent",
                    boxShadow: scoringActiveBlock === 0 ? "0 4px 16px rgba(155,114,203,0.2)" : "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease, border-left 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <Image src="/filetext3.svg" alt="" width={28} height={28} style={{ flexShrink: 0 }} />
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: 0, lineHeight: 1.3 }}>
                      From Medical Note Text to Quantified Risk Reduction
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    Our advanced AI system transforms unstructured medical documentation into precise, actionable risk scores that enable insurers to make data-driven decisions about provider risk management and documentation quality improvement.
                  </p>
                </div>

                {/* Block 2: No card, on background */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setScoringActiveBlock(1)}
                  onKeyDown={(e) => e.key === "Enter" && setScoringActiveBlock(1)}
                  style={{
                    backgroundColor: scoringActiveBlock === 1 ? "white" : "transparent",
                    borderRadius: 16,
                    padding: 24,
                    borderLeft: scoringActiveBlock === 1 ? "4px solid #9B72CB" : "4px solid transparent",
                    boxShadow: scoringActiveBlock === 1 ? "0 4px 16px rgba(155,114,203,0.2)" : "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease, border-left 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Image src="/filetext3.svg" alt="" width={28} height={28} style={{ filter: "invert(72%) sepia(68%) saturate(684%) hue-rotate(350deg) brightness(102%) contrast(102%)" }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: 0, lineHeight: 1.3 }}>
                      How We Extract Risk Scores from Medical Notes
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(26,26,46,0.7)", margin: 0 }}>
                    We analyze the structure, completeness, and quality of documentation without accessing any patient health information (PHI). Our system evaluates documentation patterns, clinical reasoning, and compliance factors to generate objective risk assessments.
                  </p>
                </div>
              </div>

              {/* Right: Image - changes based on active block */}
              <div className="scoring-methodology-image" style={{ borderRadius: 24, overflow: "hidden", width: 623, height: 344 }}>
                <Image
                  key={scoringActiveBlock}
                  src={scoringActiveBlock === 0 ? "/hero3.png" : "/hero2.png"}
                  alt={scoringActiveBlock === 0 ? "Professional reviewing data dashboards" : "Medical professionals reviewing documentation"}
                  width={623}
                  height={344}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Process Flow Section */}
        <section className="process-flow" style={{
          width: "100%",
          padding: "80px 0",
        }}>
          <div style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#1a1a2e",
                margin: 0,
                lineHeight: 1.2,
              }}>
                The{" "}
                <span style={{ color: "#9B72CB" }}>Process Flow</span>
              </h2>
            </div>

            {/* 5 Cards Row */}
            <div className="process-flow-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: 20,
            }}>
              {/* Step 1 */}
              <div className="process-flow-card" style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#F49C46", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/filetext4.svg" alt="" width={18} height={18} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", padding: "4px 12px", borderRadius: 9999, border: "1px solid rgba(26,26,46,0.2)" }}>Step 1</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.3 }}>Medical Note (Text)</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>Clinician notes are entered or imported.</p>
              </div>

              {/* Step 2 */}
              <div className="process-flow-card" style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#5489D6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/eye.svg" alt="" width={18} height={18} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", padding: "4px 12px", borderRadius: 9999, border: "1px solid rgba(26,26,46,0.2)" }}>Step 2</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.3 }}>AI Analysis</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>AI reviews note structure and clarity.</p>
              </div>

              {/* Step 3 */}
              <div className="process-flow-card" style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#1BA1E3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/pencil.svg" alt="" width={18} height={18} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", padding: "4px 12px", borderRadius: 9999, border: "1px solid rgba(26,26,46,0.2)" }}>Step 3</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.3 }}>Content Extraction</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>Key elements: diagnosis, history, exam, plan, risks.</p>
              </div>

              {/* Step 4 */}
              <div className="process-flow-card" style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#D96570", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/bar.svg" alt="" width={14} height={14} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", padding: "4px 12px", borderRadius: 9999, border: "1px solid rgba(26,26,46,0.2)" }}>Step 4</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.3 }}>Scoring Algorithm</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>A model engine evaluates gaps and docs.</p>
              </div>

              {/* Step 5 */}
              <div className="process-flow-card" style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#A083F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/wrench.svg" alt="" width={18} height={18} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", padding: "4px 12px", borderRadius: 9999, border: "1px solid rgba(26,26,46,0.2)" }}>Step 5</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px", lineHeight: 1.3 }}>Risk Score (0-100)</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,46,0.7)", margin: 0 }}>Get a clear score with tips to improve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section className="our-methodology" style={{
          width: "100%",
          backgroundColor: "#F7F7F7",
          padding: "80px 0",
        }}>
          <div className="our-methodology-grid" style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.45fr) minmax(0, 0.55fr)",
            gap: 48,
            alignItems: "center",
          }}>
            {/* Left: Heading + Image */}
            <div>
              <h2 className="our-methodology-title" style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#1a1a2e",
                margin: "0 0 24px",
                lineHeight: 1.2,
              }}>
                Our{" "}
                <span style={{ color: "#9B72CB" }}>Methodology</span>
              </h2>
              <div className="our-methodology-image" style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1 / 1", maxWidth: 440 }}>
                <Image
                  src="/hero2.png"
                  alt="Healthcare professionals reviewing documentation"
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right: 4 Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Card 1 */}
              <div className="our-methodology-card" style={{
                backgroundColor: "white",
                borderRadius: 18,
                padding: 20,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignSelf: "flex-end",
                gap: 14,
                maxWidth: 550,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#F49C46", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Target size={22} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px", lineHeight: 1.3 }}>Objective Assessment</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(26,26,46,0.7)", margin: 0 }}>Consistent, unbiased evaluation of documentation quality across all providers</p>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                backgroundColor: "white",
                borderRadius: 18,
                padding: 20,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                alignSelf: "flex-end",
                maxWidth: 420,
              }} className="our-methodology-card our-methodology-card-narrow">
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1BA1E3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Image src="/shield.svg" alt="" width={22} height={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px", lineHeight: 1.3 }}>HIPAA Compliant</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(26,26,46,0.7)", margin: 0 }}>No PHI access required - we analyze structure & patterns only</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="our-methodology-card" style={{
                backgroundColor: "white",
                borderRadius: 18,
                padding: 20,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignSelf: "flex-end",
                gap: 14,
                maxWidth: 550,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#D96570", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Scale size={22} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px", lineHeight: 1.3 }}>Scalable Solution</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(26,26,46,0.7)", margin: 0 }}>Process thousands of medical notes simultaneously with consistent accuracy</p>
                </div>
              </div>

              {/* Card 4 */}
              <div style={{
                backgroundColor: "white",
                borderRadius: 18,
                padding: 20,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                alignSelf: "flex-end",
                maxWidth: 420,
              }} className="our-methodology-card our-methodology-card-narrow">
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#A083F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <TrendingUp size={22} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px", lineHeight: 1.3 }}>Actionable Insights</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(26,26,46,0.7)", margin: 0 }}>Clear risk scores enable targeted interventions & quality improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 50 }} />

        {/* Footer */}
        <footer className="footer" style={{
          backgroundColor: "#F8F9FA",
          padding: "48px 32px 24px",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Logo */}
            <Link href="/" className="footer-logo" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none", marginBottom: 24 }}>
              <Image src="/logo.svg" alt="RiskScore AI" width={220} height={44} />
            </Link>

            {/* Primary nav */}
            <nav className="footer-primary-nav" style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 20 }}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("home");
                  if (element) {
                    const headerOffset = 60;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none", cursor: "pointer" }}
              >
                Home
              </a>
              <a
                href="#risk-score-ai"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("risk-score-ai");
                  if (element) {
                    const headerOffset = 0;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none", cursor: "pointer" }}
              >
                Risk Score Scribe
              </a>
              <a
                href="#why-us"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("why-us");
                  if (element) {
                    const headerOffset = 68;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none", cursor: "pointer" }}
              >
                Why Us!
              </a>
            </nav>

            {/* Secondary nav */}
            <nav className="footer-secondary-nav" style={{ display: "flex", justifyContent: "center", gap: 60, marginBottom: 24, flexWrap: "wrap", fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}>
              <Link href="/privacy-policy" style={{ fontSize: 14, fontWeight: 400, color: "#444A57", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/legal" style={{ fontSize: 14, fontWeight: 400, color: "#444A57", textDecoration: "none" }}>Legal</Link>
              <a href="/TERM.pdf" style={{ fontSize: 14, fontWeight: 400, color: "#444A57", textDecoration: "none" }}>Terms of Use</a>
              <a href="/HIPAA.pdf" style={{ fontSize: 14, fontWeight: 400, color: "#444A57", textDecoration: "none" }}>HIPAA Compliance</a>
            </nav>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.2)", marginBottom: 20 }} />

            {/* Copyright */}
            <p style={{ fontSize: 13, color: "#374151", margin: 0, fontWeight: 500 }}>© RiskScore AI. All right reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}