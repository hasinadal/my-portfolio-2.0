import ImageHelper from "../Helpers/ImageHelper";

const FeaturedProjectsData = [
  {
    id: "cs01",
    title: "TezHub",
    slug: "tezhub",
    category: "Product Design",
    tags: ["SaaS", "Figma", "UX Research"],
    year: "2023",
    role: "Lead UI/UX Designer",
    duration: "4 months",
    shortDescription:
      "Unified 7–8 fragmented restaurant products into a single, cohesive SaaS platform spanning POS, digital signage, and loyalty.",
    problem:
      "Disparate legacy tools forced restaurant operators to context-switch constantly, increasing training time and error rate.",
    process: [
      {
        heading: "Discovery & Audit",
        body: "Audited all 8 existing products, mapped overlapping flows, and ran stakeholder interviews to identify consolidation opportunities.",
      },
      {
        heading: "Information Architecture",
        body: "Restructured navigation around user roles (Owner, Manager, Staff) rather than product silos, reducing top-level items by 60%.",
      },
      {
        heading: "Design System",
        body: "Built a shared component library in Figma covering 80+ components, enabling consistent UI across all modules.",
      },
      {
        heading: "Prototyping & Testing",
        body: "Ran 3 rounds of usability testing with 12 restaurant operators; iterated on onboarding flow and order-management screen.",
      },
    ],
    outcome:
      "Unified platform reduced operator onboarding time by 40% and increased feature adoption from 2 modules to 6+ per account.",
    metrics: [
      { label: "Onboarding time", value: "−40%" },
      { label: "Modules used per account", value: "2 → 6+" },
      { label: "Components in design system", value: "80+" },
    ],
    coverImage: ImageHelper.TezHUBCover,
    gallery: [ImageHelper.TezHUBCover],
    tools: ["Figma", "FigJam", "Maze"],
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F92E8ayZCG6pK6z0d5rVfNX%2FTezHUB-by-TZ%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DjlchnmRhNK7OpwWH-1",
    prevSlug: null,
    nextSlug: "edxplore-admin-panel",
  },
  {
    id: "cs02",
    title: "EdXplore Admin Panel",
    slug: "edxplore-admin-panel",
    category: "Dashboard Design",
    tags: ["Admin", "Education", "Figma", "Mobile"],
    year: "2023",
    role: "UI/UX Designer",
    duration: "3 months",
    shortDescription:
      "Designed the desktop and mobile admin panel for India's leading skilling platform — enabling institutes to manage courses and enrollments at scale.",
    problem:
      "Administrators were using spreadsheets and email threads to manage 500+ training institutes, causing delays and data loss.",
    process: [
      {
        heading: "User Research",
        body: "Interviewed 8 platform administrators to map daily workflows, pain points, and priority actions.",
      },
      {
        heading: "Wireframing",
        body: "Low-fidelity wireframes for 30+ screens covering institute management, course publishing, and analytics dashboards.",
      },
      {
        heading: "Responsive Design",
        body: "Designed desktop and mobile versions in parallel, sharing a common token system to ensure visual consistency.",
      },
      {
        heading: "Handoff",
        body: "Delivered annotated Figma specs with redlines, interaction notes, and a developer Q&A doc.",
      },
    ],
    outcome:
      "Admin task completion time dropped by 55%; mobile version enabled field officers to approve institutes on-the-go.",
    metrics: [
      { label: "Task completion time", value: "−55%" },
      { label: "Screens designed", value: "30+" },
      { label: "Platforms covered", value: "Desktop + Mobile" },
    ],
    coverImage: ImageHelper.EdXploreAdminPanel,
    gallery: [ImageHelper.EdXploreAdminPanel, ImageHelper.EdXploreAdminPanelMobileVersion],
    tools: ["Figma", "Notion", "Zeplin"],
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSlofBkzRyGfy7lMBB0CaQc%2FEdXplore-Admin-Panel%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DvqoFr3c4I7uqGycb-1",
    prevSlug: "tezhub",
    nextSlug: "meco-motorsports",
  },
  {
    id: "cs03",
    title: "MECO Motorsports",
    slug: "meco-motorsports",
    category: "Web Design",
    tags: ["Branding", "Motorsports", "Web", "Figma"],
    year: "2023",
    role: "UI/UX Designer",
    duration: "2 months",
    shortDescription:
      "End-to-end website design for India's premier motorsports management company — from initial concept through final production-ready prototype.",
    problem:
      "MECO had no unified digital presence; event information was scattered across PDFs and social media, losing potential sponsors and participants.",
    process: [
      {
        heading: "Brand Immersion",
        body: "Deep-dive into MECO's event history, sponsorship decks, and competitor sites to establish a visual language that feels fast and premium.",
      },
      {
        heading: "Concept Exploration",
        body: "Produced 3 visual directions ranging from editorial-minimal to bold-kinetic; team aligned on a high-contrast dark theme with speed-inspired typography.",
      },
      {
        heading: "Final Design",
        body: "Full multi-page website covering Home, Events, Tracks, Championships, and Sponsorship — with a fully linked Figma prototype.",
      },
    ],
    outcome:
      "Delivered two design phases (exploration + final) that became the foundation for MECO's development sprint.",
    metrics: [
      { label: "Design phases", value: "2" },
      { label: "Pages designed", value: "8+" },
      { label: "Prototype fidelity", value: "High" },
    ],
    coverImage: ImageHelper.MecoFinalWebUi,
    gallery: [ImageHelper.MecoWebUi, ImageHelper.MecoFinalWebUi],
    tools: ["Figma", "FigJam"],
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRhxolZEwe1bjcxfIXgnc7A%2FMeco-Web-UiUx-Final-Design-by-Tabrez-Dal%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D0uXfBHcLc4zqsbK3-1",
    prevSlug: "edxplore-admin-panel",
    nextSlug: null,
  },
];

export default FeaturedProjectsData;
