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
  demo: {
    title: "Experience Digital Elegance",
    subtitle: "See how Chief of Staff transforms your workflow into a seamless, AI-guided experience.",
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
  competitive: {
    eyebrow: "COMPETITIVE POSITIONING",
    title: "Where Chief of Staff Wins",
    subtitle: "Mapped against the AI productivity market on two axes that actually matter for leaders.",
    axes: {
      xLeft: "SINGLE TOOL / SILOED",
      xRight: "COMMITMENT-AWARE",
      yTopLeft: "SYNTHESISES BROADLY — MISSES COMMITMENTS",
      yTopRight: "SYNTHESISES ACROSS TOOLS + TRACKS EVERY COMMITMENT",
      yBottomLeft: "SINGLE-SOURCE — NO COMMITMENT TRACKING",
      yBottomRight: "TRACKS COMMITMENTS — SILOED BY TOOL",
      xAxisLabel: "HORIZONTAL AXIS — COMMITMENT INTELLIGENCE",
      yAxisLabel: "Y-axis: breadth of system integration · X-axis: commitment intelligence",
    },
    winZone: {
      badge: "WIN ZONE",
      winner: {
        name: "Chief of Staff",
        description:
          "Jira + Confluence + Slack + Gmail + Calendar → one 8-minute morning brief. Only tool that surfaces spoken commitments at risk before you start your day.",
      },
      emptyNote: {
        title: "This quadrant is empty.",
        description:
          "No competitor combines cross-system synthesis with commitment intelligence. This is the white space.",
      },
    },
    topLeft: [
      {
        name: "Notion AI",
        description: "Connects notes + docs but doesn't track what you promised across tools",
      },
      {
        name: "Microsoft Copilot",
        description: "Cross-M365 synthesis but no Jira/Confluence commitment intelligence",
      },
      {
        name: "Google Gemini (Workspace)",
        description: "Reads Gmail + Drive + Calendar — stops at the Google boundary",
      },
    ],
    bottomLeft: [
      {
        name: "ChatGPT / Claude (raw)",
        description:
          "Powerful reasoning but no live data connections — you have to bring the context",
      },
      {
        name: "Perplexity / Glean",
        description:
          "Search-first, not synthesis-first. Finds information, doesn't track commitments",
      },
      {
        name: "Slack AI / Jira AI",
        description: "Summarises within one tool — never sees the full picture",
      },
    ],
    bottomRight: [
      {
        name: "Fellow.ai",
        description:
          "Meeting notes + action item tracking — only sees what happens in meetings",
      },
      {
        name: "Reclaim / Motion",
        description: "Smart calendar scheduling — task-focused, not commitment-aware",
      },
      {
        name: "Ambient / alfred_",
        description: "AI assistant layer — email + calendar only, no Jira/Confluence depth",
      },
    ],
    analysis: [
      {
        label: "THE WHITE SPACE",
        description:
          "No competitor combines cross-system synthesis with commitment tracking. The top-right quadrant is Chief of Staff's alone.",
      },
      {
        label: "THE MOAT",
        description:
          "Jira + Confluence integration is the sharpest defensible edge. Microsoft and Google can't go here without cannibalising Atlassian partnerships.",
      },
      {
        label: "THE BEACHHEAD",
        description:
          "Atlassian ecosystem users are the only segment where all four quadrant advantages are simultaneously visible and provable today.",
      },
      {
        label: "THE EXPANSION PATH",
        description:
          "Add Asana, Monday, Linear, GitHub → move the y-axis for non-Atlassian leaders. The x-axis position (commitment intelligence) stays constant.",
      },
    ],
    legend: {
      cosLabel: "Chief of Staff",
      competitorsLabel: "Competitors",
    },
  },
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
  },
} as const;
