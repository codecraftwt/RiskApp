import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Eye,
  RefreshCw,
  Send,
  Check,
  TrendingUp,
} from "lucide-react";

const navLinks = [
  { label: "Home", active: true },
  { label: "Risk Score AI", active: false },
  { label: "Why Us", active: false },
  { label: "Overview", active: false },
  { label: "Scoring Methodology", active: false },
  { label: "API", active: false },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f7ff", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        backgroundColor: "rgba(248,247,255,0.97)",
        backdropFilter: "blur(8px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 32px",
        }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.svg"
              alt="RiskScore AI"
              width={180}
              height={36}
              priority
            />
          </a>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: link.active ? "#7c5cbf" : "rgba(26,26,46,0.75)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button style={{
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
          }}>
            Get Started
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <main style={{ position: "relative" }}>
        {/* Hero Section */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px 180px" }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 12,
            padding: "80px 60px",
            background: "linear-gradient(135deg, #1BA1E3 0%, #9B72CB 45%, #D96570 72%, #F49C46 100%)",
          }}>
            {/* Three glassmorphism overlays - left (tall left on top, small right at back) */}
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              display: "flex", alignItems: "flex-end",
              zIndex: 0,
              gap: 0,
            }}>
              <div style={{
                position: "relative",
                zIndex: 2,
                width: 120,
                height: 320,
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
                height: 250,
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
                height: 180,
                borderTopRightRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
                marginLeft: -70,
              }} />
            </div>
            {/* Three glassmorphism overlays - right (tall right on top, small left at back) */}
            <div style={{
              position: "absolute", bottom: 0, right: 0,
              display: "flex", alignItems: "flex-end",
              zIndex: 0,
              gap: 0,
            }}>
              <div style={{
                position: "relative",
                zIndex: 0,
                width: 130,
                height: 180,
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
                zIndex: 2,
                width: 120,
                height: 320,
                borderTopLeftRadius: 24,
                backgroundColor: "#FFFFFF1F",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                flexShrink: 0,
              }} />
            </div>

            {/* Hero content */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              {/* Badge */}
              <a href="#" style={{
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
              <h1 style={{
                maxWidth: 700,
                fontWeight: 800,
                fontSize: 52,
                lineHeight: 1.12,
                color: "white",
                marginBottom: 20,
                letterSpacing: "-1px",
              }}>
                The Future of Medical Documentation Risk Management
              </h1>

              {/* Sub */}
              <p style={{
                maxWidth: 560,
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.93)",
                marginBottom: 36,
              }}>
                RiskScore AI aids insurers and physicians in documentation without PHI access. It automates reviews and offers risk-scored audits.
              </p>

              {/* CTA Button */}
              <button style={{
                display: "flex", alignItems: "center", gap: 8,
                borderRadius: 50,
                backgroundColor: "white",
                border: "none",
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 700,
                color: "#1a1a2e",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                letterSpacing: "-0.1px",
              }}>
                Get Started
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          marginTop: -148,
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>

            {/* Left Card */}
            <div style={{
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "white",
              padding: 24,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 50,
                  backgroundColor: "#7c5cbf",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <FileText size={18} color="white" strokeWidth={2} />
                </div>
                {/* Mini bar chart */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <div style={{ height: 28, width: 8, borderRadius: "3px 3px 0 0", backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 42, width: 8, borderRadius: "3px 3px 0 0", backgroundColor: "#1BA1E3" }} />
                    <div style={{ height: 20, width: 8, borderRadius: "3px 3px 0 0", backgroundColor: "#e0e0e8" }} />
                    <div style={{ height: 34, width: 8, borderRadius: "3px 3px 0 0", backgroundColor: "#4a90d9" }} />
                    <div style={{ height: 20, width: 8, borderRadius: "3px 3px 0 0", backgroundColor: "#e0e0e8" }} />
                  </div>
                  <p style={{ marginTop: 4, fontSize: 10, fontWeight: 600, color: "rgba(26,26,46,0.6)" }}>
                    97% Visit-ready notes
                  </p>
                </div>
              </div>
              <h4 style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 8 }}>
                Scoring Audits of Clinical Notes
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(26,26,46,0.7)" }}>
                Evaluates structure, rationale, follow-ups, consent, &amp; more.
              </p>
            </div>

            {/* Middle Card - elevated */}
            <div style={{
              borderRadius: 16,
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
                    backgroundColor: "#7c5cbf",
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
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 50,
                    backgroundColor: "#7c5cbf",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Send size={15} color="white" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, height: 2, backgroundColor: "#e5e7eb" }} />
                  <div style={{
                    width: 36, height: 36, borderRadius: 50,
                    backgroundColor: "#7c5cbf",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <FileText size={15} color="white" strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1, height: 2, backgroundColor: "#e5e7eb" }} />
                  <div style={{
                    width: 36, height: 36, borderRadius: 50,
                    backgroundColor: "#7c5cbf",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Check size={15} color="white" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div style={{ display: "flex", gap: 8 }}>
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
            <div style={{
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.06)",
              backgroundColor: "white",
              padding: 24,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 50,
                  backgroundColor: "#7c5cbf",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Eye size={18} color="white" strokeWidth={2} />
                </div>
                {/* Donut chart + lines */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ position: "relative", width: 46, height: 46 }}>
                    {/* Simulated donut with SVG */}
                    <svg width="46" height="46" viewBox="0 0 46 46">
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#e0e0e8" strokeWidth="5" />
                      {/* Orange arc */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#F49C46" strokeWidth="5"
                        strokeDasharray="35 72" strokeDashoffset="0" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                      {/* Blue arc */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#1BA1E3" strokeWidth="5"
                        strokeDasharray="25 72" strokeDashoffset="-36" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                      {/* Rose arc */}
                      <circle cx="23" cy="23" r="17" fill="none" stroke="#D96570" strokeWidth="5"
                        strokeDasharray="18 72" strokeDashoffset="-62" strokeLinecap="round"
                        transform="rotate(-90 23 23)" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ height: 6, width: 32, borderRadius: 3, backgroundColor: "rgba(26,26,46,0.18)" }} />
                    <div style={{ height: 6, width: 24, borderRadius: 3, backgroundColor: "rgba(26,26,46,0.12)" }} />
                    <div style={{ height: 6, width: 28, borderRadius: 3, backgroundColor: "rgba(26,26,46,0.08)" }} />
                  </div>
                </div>
              </div>
              <h4 style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 8 }}>
                Visit Summary Snapshot
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(26,26,46,0.7)" }}>
                Zero PHI Required HIPAA-compliant.
              </p>
            </div>

          </div>
        </section>

        <div style={{ height: 80 }} />
      </main>
    </div>
  );
}