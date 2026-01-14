# Tech

## 解決したい問題とその方法

以下の項目を簡単に伝えられるポートフォリオが欲しい

- どういった人物なのか
  - → 名前、サムネイル、プロフィール、各SNS、好きな言葉（キャッチコピー）
- エンジニアとしてどういった価値観を持っているか
- 何ができるのか
  - → スキルセット、技術記事
- どういったキャリアを積んだのか
  - → オープン職務履歴書

## ページ構成

全ページを `/` ページへセクションごとに配置する  
1セクションは最低でも100vh分の高さを持つ

- Top
  - サムネイル
  - 名前（ichi-h）
  - 各SNSリンク（GitHub, X, Zenn）
  - ichi-h.comへのリンク
    - リンク名: Philosophy, Art & Life >
    - 配置場所: 右下
- About Me
  - モットー
    - 以下のキャッチコピーを見出しとし、タイピングアニメーションで入力して5秒停止、消して再入力を繰り返してループする
      - 設計で人をハッピーにする。
      - fun resolve(issue, solution): happiness outcome
    - 本文
  - 生年月日（1997年5月14日）
  - MBTI: INTJ-T（建築家）
  - 出身地: 北海道札幌市
  - 居住地: 兵庫県神戸市
  - 学歴: 同志社大学 文化情報学部（2017年4月入学 - 2022年3月中退）
  - Email: info@ichi-h.com
  - 職務履歴
  - スキルセット
- Posts
  - おすすめの技術記事
  - 「and more」リンクをクリックでzennへ別タブで遷移

### 職務履歴

TODO: やった結果どうなったかを書く

- 用語定義
  - 要求定義: システム上の問題ではなく、ユーザーが本質的に抱えているビジネス上の問題を明らかにし、なぜそれを解決しなければならないのか、何が行われれば解決できるのか、何をもって解決されたと判断するのかなどを仮定すること
  - 要件定義: 要求定義に基づき、ドメインモデリングや機能、ワイヤーフレーム、UI、ユーザーフロー、権限管理、非機能要求など、どのようなシステムを構築する必要があるのかを具体的に定義すること
  - システムデザイン: 要求・要件定義に基づき、DB設計、API設計、システムフロー、技術選定、インフラ構成など、技術的にどのようにシステムを実現するかを設計すること

- 株式会社Wizleap | テックリードエンジニア（2022年1月 - 2025年7月）
  - 会社概要
    - 100社以上の保険代理店と共同募集を行う保険代理店兼アポ配信企業
    - 丸紅株式会社との資本業務提携契約を締結し、シリーズAとして単独で3.5億円を調達
      - https://prtimes.jp/main/html/rd/p/000000138.000052686.html
    - アポ配信企業向け案件配信システム「MCマーケットクラウド」
      - https://prtimes.jp/main/html/rd/p/000000135.000052686.html
    - 保険代理店向け業務品質管理クラウドシステム「MCエキスパートクラウド」
      - https://prtimes.jp/main/html/rd/p/000000249.000052686.html
    - 相談件数10万件以上、相談満足度98%以上を持つtoC向け保険相談サービス「マネーキャリア」
      - https://prtimes.jp/main/html/rd/p/000000240.000052686.html
  - 概要
    - 10名前後のエンジニア組織におけるテックリードエンジニアとして従事
    - TODO: なんか書く
  - 通年
    - 保険代理店・アポ配信企業向けシステムの要求定義・要件定義・システムデザイン・開発・保守・運用
    - Vue/React両対応の独自UIコンポーネントライブラリの開発・保守・運用
    - 技術負債の解消・レガシーなシステムの刷新
    - 技術記事の寄稿
    - エンジニアやエンジニア組織の育成・改革
      - 定期的な技術勉強会の文化を定着
      - ペアプロ文化の定着
      - コードレビュー文化の定着
      - 開発前のシステムデザイン（詳細設計）を行う文化の定着
    - エンジニア採用
      - 技術要綱の作成
      - 採用課題の作成から採点
      - 採用面談から採用検討
  - 2022年
    - toC向け保険比較ランキングサイトの開発→リリース達成
    - toC向け保険相談LPページの改善・開発
    - 解読困難なコードが大量にある主要プロジェクトへ、Vuexを用いた状態管理を導入するリファクタリング
    - 解読困難なコードが大量にある主要プロジェクトへ、簡易的なClean Architectureを導入するリファクタリング
    - 主要プロジェクトへTypeScriptを導入するリファクタリング
    - Vue/React両対応の独自UIコンポーネントライブラリの立ち上げ
  - 2023年
    - アポ配信企業向けシステムの本リリース達成
    - アポ配信企業向けに提供する外部APIの要求定義・要件定義・システムデザイン・開発・保守・運用
    - アポ配信企業向けシステムのVue→Reactへのマイグレーション開始
    - 技術課題を実務遂行における技術力を確認できるものへと刷新、採点基準の明確化
    - 全員がフルスタックエンジニアとなる開発体制から、フロントエンドとバックエンドの担当者を分離した開発体制の導入
    - OpenAPIを用いたスキーマ駆動開発の導入
  - 2024年
    - アポ配信企業向けシステムのVue→Reactへのマイグレーションをエラー0で完了
    - アポ配信企業向け新規プロダクトのシステムデザイン、およびGolang + DDD + Clean Architecture + CQSにて開発
    - 社内CRMシステム改善プロジェクトのシステムデザイン
    - OpenAPIスキーマ管理のDX改善（Zodを用いたスキーマ管理システムの自社開発、PR単位でのStub生成システムを構築）
    - コーディングガイドラインの策定
  - 2025年
    - エンジニアのスキルマップの策定
    - 既存プロダクトをGolang + DDD + Clean Architecture + CQSへとリファクタリングするプロジェクトの開始
    - 保険代理店向け業務品質管理の新機能をGolang + DDD + Clean Architecture + CQSにて開発
    - イベントストーミングを用いたドメインモデリングの検討
    - Notionへユビキタス言語DBの作成
    - フロントエンドにおけるログ収集システムのシステムデザイン
    - バックエンドのログシステム改善の提案（PoC）
    - DWHの設計を提案（PoC）
    - 生成AIを用いたコードレビューシステムの作成・導入
    - 生成AIを用いたテストコード作成システムの作成・導入

### スキルセット

- 区分
  - 👑: 3年以上の実務経験
  - 💪: 1年以上の実務経験
  - 🌱: 1年未満の実務経験
  - 🎨: 個人開発にて経験
- プログラミング言語
  - TypeScript 👑
  - PHP 👑
  - Go 💪
  - Python 💪
  - Elm 🌱
  - Rust 🎨
  - F# 🎨
  - Haskell 🎨
  - PureScript 🎨
- フロントエンドライブラリ
  - React 👑
  - Vue 👑
  - Vanilla Extract 👑
  - Zod 👑
  - Nuxt.js 💪
  - Next.js 🌱
  - Remix 🌱
  - Astro 🎨
  - Tailwind CSS 🎨
- バックエンドライブラリ
  - Laravel 👑
  - Echo 💪
  - Hono 🎨
- アーキテクチャ
  - Clean Architecture 👑
  - MVC 👑
  - RESTful API 👑
  - RPC API 👑
  - DDD 💪
  - CQS/CQRS 💪
- データベース
  - MySQL 👑
- Webサーバー/リバースプロキシ
  - Nginx 👑
- API基盤
  - OpenAPI/Swagger/Redoc 👑
  - Protocol Buffers/Connect 🎨
- クラウド
  - Vercel 👑
  - AWS 💪
  - Google Cloud Platform 💪
  - Cloudflare 🎨
- コンテナ / オーケストレーション / OS・構成管理
  - Docker 👑
  - Kubernetes 🎨
  - Nix/NixOS 🎨
- 認証・認可
  - Auth0 👑
- 開発周辺ツール / コラボレーション
  - Git/GitHub 👑
  - Figma 👑
  - Notion 👑
  - Slack 👑
  - Sentry 💪
- 生成AI / AIエージェント
  - Devin 🌱
  - Dify 🌱
- 連携サービス
  - Zoom API 💪
  - Google Calendar API 💪

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

Cloudflare Pagesへデプロイ:

```bash
pnpm deploy
```

## Project Structure

```
src/
├── api/          # Notion API integration
├── assets/       # Static assets
├── components/   # React/Astro components
│   ├── pages/    # Page-level components
│   └── parts/    # Reusable parts
├── layouts/      # Layout templates
├── pages/        # Astro pages (file-based routing)
└── utils/        # Utility functions
```
