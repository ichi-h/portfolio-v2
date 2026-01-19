interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Language",
    skills: [
      "TypeScript, PHP 👑",
      "Go, Python, Elm 💪",
      "Rust, F#, Haskell, PureScript 🎨",
    ],
  },
  {
    title: "Frontend Framework",
    skills: ["React, Vue 👑", "Next.js, Remix, Nuxt.js 💪", "Astro 🎨"],
  },
  {
    title: "Backend Framework",
    skills: ["Laravel 👑", "Echo 💪", "Hono 🎨"],
  },
  {
    title: "Architecture",
    skills: [
      "Clean Architecture, Layered Architecture, MVC 👑",
      "Monorepo 👑",
      "Modular Monolith 💪",
      "DDD 💪",
      "CQS/CQRS 💪",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL 👑"],
  },
  {
    title: "Web Server / Proxy",
    skills: ["Nginx 👑"],
  },
  {
    title: "API",
    skills: ["RESTful API, RPC API 👑", "OpenAPI/Swagger/Redoc 👑", "Protocol Buffers/Connect 🎨"],
  },
  {
    title: "Cloud",
    skills: ["Vercel 👑", "AWS, GCP 💪", "Cloudflare 🎨"],
  },
  {
    title: "Auth",
    skills: ["Auth0 👑"],
  },
  {
    title: "Development Tool",
    skills: ["Git 👑", "Docker 👑", "Kubernetes 🎨", "Nix/NixOS 🎨"],
  },
  {
    title: "Collaboration",
    skills: ["GitHub, Figma, Notion, Slack 👑", "Sentry 💪"],
  },
  {
    title: "Generative AI / AI Agent",
    skills: ["Devin 💪", "Dify 💪"],
  },
  {
    title: "Integration Service",
    skills: ["Zoom API 💪", "Google Calendar API 💪"],
  },
];
