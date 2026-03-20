/**
 * Brand Design Tokens
 * Reference for colors, typography, and icon usage
 */

export const colors = {
  vibrantBlue: "#1BA1E3",
  steelBlue: "#5489D6",
  mediumPurple: "#9B72CB",
  mutedRose: "#D96570",
  orange: "#F49C46",
  lightViolet: "#A083F1",
  surface: "#F3F2F7",
  foreground: "#1a1a2e",
} as const;

export const fonts = {
  heading: "var(--font-urbanist)",
  body: "var(--font-poppins)",
} as const;

/**
 * Tailwind classes for brand colors:
 * bg-vibrant-blue, bg-steel-blue, bg-medium-purple, bg-muted-rose
 * bg-orange, bg-light-violet, bg-surface
 * text-vibrant-blue, text-steel-blue, etc.
 *
 * Typography:
 * font-heading - Urbanist (H1-H6)
 * font-body - Poppins (paragraphs, labels)
 *
 * Icons: Use lucide-react with strokeWidth={1.5} for outline style
 */
