// ─────────────────────────────────────────────
// Khel Setu Foundation — Single Source of Truth
// Update values here and they reflect site-wide
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "Khel Setu Foundation",
  domain: "khelsetu.org",
  tagline: "Bridging Problems to Solutions Through Sports & Community",
  location: "Rajasthan",

  mission:
    "To create an integrated social development ecosystem in Rajasthan by leveraging sports, mental wellness, education, and community engagement to transform lives and build resilient communities.",

  missionShort:
    "Creating an integrated social development ecosystem in Rajasthan through sports, mental wellness, education, and community engagement.",

  missionChallenges:
    "Khel Setu works to design and implement impact-driven programs that address key societal challenges — drug abuse, mental health issues, lack of life skills, limited access to knowledge, gender inequality, and elderly neglect.",

  founder: {
    name: "Abhishek Gupta",
    title: "Founder",
    image: "/images/founder.jpg",
  },

  contact: {
    address: {
      line1: "Plot No. 20, Ganga Sagar Vistar",
      line2: "Jagdamba Colony, Agra Road",
      city: "Jaipur",
      state: "Rajasthan",
      pin: "302031",
      full: "Plot No. 20, Ganga Sagar Vistar, Jagdamba Colony, Agra Road, Jaipur, Rajasthan - 302031",
    },
    phone: "+91 8094939595",
    email: "khelsetu.org@gmail.com",
    hours: {
      weekdays: "Monday – Saturday: 10:00 AM – 6:00 PM",
      weekend: "Sunday: Closed",
    },
  },

  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },

  stats: {
    campaigns: "100+",
    projects: "6",
    events: "50+",
    livesTouched: "1000+",
  },

  formspree: "https://formspree.io/f/mzdjkpnp",
} as const;

export const projects = [
  {
    id: "playfree",
    name: "PlayFree",
    fullName: "Project PlayFree",
    subtitle: "Sports Against Drugs",
    icon: "⚽",
    desc: "Using sports as a preventive strategy against drug abuse — creating healthy alternatives, discipline, and purpose for community youth.",
    href: "/projects#playfree",
    accent: "from-gold/10 to-transparent",
    pdf: "/documents/PlayFree-Overview.pdf",
  },
  {
    id: "endorphin",
    name: "Endorphin",
    fullName: "Project Endorphin",
    subtitle: "Mental Wellness Movement",
    icon: "🏃",
    desc: "Building a community-based mental wellness ecosystem through awareness, mindfulness, yoga, and emotional resilience programs.",
    href: "/projects#endorphin",
    accent: "from-crimson/10 to-transparent",
    pdf: "/documents/Endorphin-Overview.pdf",
  },
  {
    id: "life-ready",
    name: "Life Ready",
    fullName: "Project Life Ready",
    subtitle: "Life Skills for Youth",
    icon: "🎯",
    desc: "Equipping school and college students with essential life skills — decision-making, communication, emotional intelligence, and civic responsibility.",
    href: "/projects#life-ready",
    accent: "from-navy/10 to-transparent",
    pdf: "/documents/LifeReady-Overview.pdf",
  },
  {
    id: "readrise",
    name: "ReadRise",
    fullName: "Project ReadRise",
    subtitle: "Reading & Library Development",
    icon: "📚",
    desc: "Promoting reading culture and strengthening library infrastructure — ensuring knowledge reaches the last mile.",
    href: "/projects#readrise",
    accent: "from-gold/10 to-transparent",
    pdf: "/documents/ReadRise-Overview.pdf",
  },
  {
    id: "mukti",
    name: "Mukti",
    fullName: "Project Mukti",
    subtitle: "Women Empowerment",
    icon: "💪",
    desc: "Empowering women through knowledge, awareness, and skill development — building confidence, leadership, and financial independence.",
    href: "/projects#mukti",
    accent: "from-crimson/10 to-transparent",
    pdf: "/documents/Mukti-Overview.pdf",
  },
  {
    id: "second-innings",
    name: "Second Innings",
    fullName: "Project Second Innings",
    subtitle: "Elderly Welfare",
    icon: "🔄",
    desc: "Improving the wellbeing and dignity of senior citizens through community gatherings, health awareness, and intergenerational programs.",
    href: "/projects#second-innings",
    accent: "from-navy/10 to-transparent",
    pdf: "/documents/SecondInnings-Overview.pdf",
  },
] as const;
