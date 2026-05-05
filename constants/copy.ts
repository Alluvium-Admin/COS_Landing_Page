export const copy = {
  appName: "Chief of Staff",
  tagline: "Your personal AI executive assistant for managing tasks and schedule with elegance.",
  cta: {
    waitlist: "Join the Waitlist",
    learnMore: "Learn More",
    getStarted: "Get Started",
  },
  hero: {
    title: "Elevate Your Efficiency with AI Elegance",
    subtitle: "Focus on what matters. Let your personal AI Chief of Staff handle the rest.",
  },
  problem: {
    title: "The Burden of Modern High Performance",
    description: "In a world of constant noise and infinite tasks, the most successful leaders know that clarity is their greatest asset.",
  },
  features: [
    {
      title: "Effortless Management",
      description: "A sleek, minimalist interface designed specifically for high-performers who value time and mental clarity.",
    },
    {
      title: "Stay Ahead of the Curve",
      description: "Smart notifications and reminders that keep you on track without the digital clutter.",
    },
    {
      title: "AI Intentions",
      description: "Start every day with focus. Set your intentions and let our AI guide your productivity.",
    },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Chief of Staff. All rights reserved.`,
    tagline: "Executive clarity for the modern leader.",
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "#features" },
          { label: "How it Works", href: "#how-it-works" },
          { label: "Waitlist", href: "#waitlist" },
        ],
      },
      {
        title: "Legal",
        items: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    social: {
      twitter: "https://twitter.com/chiefofstaff",
      linkedin: "https://linkedin.com/company/chiefofstaff",
    },
  }
} as const;
