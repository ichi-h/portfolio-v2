interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "プログラミング言語",
    skills: [
      "TypeScript 👑",
      "PHP 👑",
      "Go 💪",
      "Python 💪",
      "Elm 💪",
      "Rust, F#, Haskell, PureScript 🎨",
    ],
  },
  {
    title: "フロントエンドフレームワーク",
    skills: [
      "React, Vue 👑",
      "Next.js, Remix, Nuxt.js 💪",
      "Astro 🎨",
    ],
  },
  {
    title: "バックエンドフレームワーク",
    skills: ["Laravel 👑", "Echo 💪", "Hono 🎨"],
  },
  {
    title: "アーキテクチャ",
    skills: [
      "Clean Architecture, Layered Architecture, MVC 👑",
      "RESTful API, RPC API 👑",
      "DDD 💪",
      "CQS/CQRS 💪",
    ],
  },
  {
    title: "データベース",
    skills: ["MySQL 👑"],
  },
  {
    title: "Webサーバー/リバースプロキシ",
    skills: ["Nginx 👑"],
  },
  {
    title: "API基盤",
    skills: ["OpenAPI/Swagger/Redoc 👑", "Protocol Buffers/Connect 🎨"],
  },
  {
    title: "クラウド",
    skills: ["Vercel 👑", "AWS, GCP 💪", "Cloudflare 🎨"],
  },
  {
    title: "コンテナ / オーケストレーション / OS・構成管理",
    skills: ["Docker 👑", "Kubernetes 🎨", "Nix/NixOS 🎨"],
  },
  {
    title: "認証・認可",
    skills: ["Auth0 👑"],
  },
  {
    title: "開発周辺ツール / コラボレーション",
    skills: ["Git/GitHub, Figma, Notion, Slack 👑", "Sentry 💪"],
  },
  {
    title: "生成AI / AIエージェント",
    skills: ["Devin 💪", "Dify 💪"],
  },
  {
    title: "連携サービス",
    skills: ["Zoom API 💪", "Google Calendar API 💪"],
  },
];
