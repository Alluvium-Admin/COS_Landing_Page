export const colors = {
  primary: "#F5F3E9", // main beige background
  secondary: "#D4AF37", // gold from logo
  border: "rgba(0, 0, 0, 0.15)", // darker gray for borders
  text: "#1A1A1A", // standard text color
  textMuted: "#71717A", // muted text color
  card: "#FFFFFF", // white for cards
  accent: "#1B64E2", // blue
  success: "#1D8E42", // green
  destructive: "#D83C31", // red
} as const;

export const spacing = {
  container: "32px",
  section: "80px",
} as const;

export const radii = {
  card: "24px",
  button: "100px",
} as const;

export const theme = {
  colors,
  spacing,
  radii,
} as const;
