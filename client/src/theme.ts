import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Noto Sans JP', sans-serif" },
        body: { value: "'Noto Sans JP', sans-serif" },
        mono: { value: "JetBrains Mono, monospace" },
      },
      radii: {
        sm: { value: "calc(0.65rem - 4px)" },
        md: { value: "calc(0.65rem - 2px)" },
        lg: { value: "0.65rem" },
        xl: { value: "calc(0.65rem + 4px)" },
      },
      colors: {
        // Primary colors
        primary: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3b82f6" },
          600: { value: "#2563eb" },
          700: { value: "#1d4ed8" },
          800: { value: "#1e40af" },
          900: { value: "#1e3a8a" },
        },
        // Dark theme colors
        dark: {
          bg: { value: "#000000" },
          card: { value: "#0a0a0a" },
          cardBorder: { value: "#1a1a1a" },
          badgeBg: { value: "#1a1a1a" },
          textPrimary: { value: "#ffffff" },
          textMuted: { value: "#999999" },
          textSubtle: { value: "#666666" },
        },
        // Effect colors (rgba values)
        effects: {
          iconBg: { value: "rgba(59, 130, 246, 0.1)" },
          redIconBg: { value: "rgba(239, 68, 68, 0.1)" },
          shimmerGradient: { value: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)" },
          hoverGradient: { value: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.05) 80%, #0a0a0a 100%)" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Light mode colors
        bg: {
          DEFAULT: {
            value: { base: "#ffffff", _dark: "oklch(0.141 0.005 285.823)" },
          },
          subtle: {
            value: { base: "oklch(0.98 0.001 286.375)", _dark: "oklch(0.21 0.006 285.885)" },
          },
          muted: {
            value: { base: "oklch(0.967 0.001 286.375)", _dark: "oklch(0.274 0.006 286.033)" },
          },
        },
        fg: {
          DEFAULT: {
            value: { base: "#0a0a0a", _dark: "oklch(0.85 0.005 65)" },
          },
          muted: {
            value: { base: "oklch(0.552 0.016 285.938)", _dark: "oklch(0.705 0.015 286.067)" },
          },
          subtle: {
            value: { base: "oklch(0.4 0.015 65)", _dark: "oklch(0.7 0.005 65)" },
          },
        },
        border: {
          DEFAULT: {
            value: { base: "oklch(0.92 0.004 286.32)", _dark: "oklch(1 0 0 / 10%)" },
          },
        },
        accent: {
          DEFAULT: {
            value: { base: "oklch(0.967 0.001 286.375)", _dark: "oklch(0.274 0.006 286.033)" },
          },
          fg: {
            value: { base: "oklch(0.141 0.005 285.823)", _dark: "oklch(0.92 0.005 65)" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
