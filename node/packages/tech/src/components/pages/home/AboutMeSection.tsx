import { Heading, Text, Link, Article } from "portfolio-ui";
import { TypingAnimation } from "./TypingAnimation";
import * as styles from "./index.css";

export const AboutMeSection = () => {
  return (
    <div className={styles.contentSection}>
      {/* Motto / Typing Animation */}
      <div className={styles.mottoSection}>
        <Heading level="2">
          <TypingAnimation
            words={[
              "設計で人をハッピーにする。",
              "fun resolve(issue, solution): happiness outcome",
            ]}
            className={styles.typingText}
          />
        </Heading>
      </div>

      {/* Profile Info */}
      <div className={styles.aboutContent}>
        <div className={styles.profileSection}>
          <div className={styles.profileGrid}>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>名前</Text>
              <Text color="mono.50">ichi-h</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>生年月日</Text>
              <Text color="mono.50">1997年5月14日</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>出身地</Text>
              <Text color="mono.50">北海道札幌市</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>居住地</Text>
              <Text color="mono.50">兵庫県神戸市</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>学歴</Text>
              <Text color="mono.50">同志社大学 文化情報学部 中退</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>MBTI</Text>
              <Text color="mono.50">INTJ-T（建築家）</Text>
            </div>
            <div className={styles.profileRow}>
              <Text color="mono.300" className={styles.profileLabel}>Email</Text>
              <Text color="mono.50">info@ichi-h.com</Text>
            </div>
          </div>
        </div>

        {/* Career */}
        <div className={styles.careerSection}>
          <Heading level="3">
            <Text color="mono.50" className={styles.sectionTitle}>職務履歴</Text>
          </Heading>

          <div className={styles.careerItem}>
            <Heading level="4">
              <Text color="mono.50" className={styles.careerTitle}>株式会社Wizleap | テックリードエンジニア</Text>
            </Heading>
            <Text color="mono.300" className={styles.careerPeriod}>2022年1月 - 2025年7月</Text>

            <ul className={styles.careerList}>
              <li><Text color="mono.50">InsurTech領域で100社以上の保険代理店と共同募集を行う保険代理店兼アポ配信企業にて、10名前後のエンジニア組織におけるテックリードエンジニアとして従事。</Text></li>
              <li><Text color="mono.50">相談件数10万件以上・相談満足度98%以上を持つtoC向けお金の相談プラットフォーム「マネーキャリア」や、金融機関向けSaaSプロダクト「MCマーケットクラウド」「MCエキスパートクラウド」など、複数のプロダクトにて上流から下流工程まで一貫して担当。</Text></li>
              <li><Text color="mono.50">プロダクト開発はもちろん、レガシーシステムの抜本的な改善や技術基盤の整備、エンジニア育成から組織改革まで幅広く携わり、エンジニア組織全体の成長と活性化に寄与。</Text></li>
              <li><Text color="mono.50">2023年の12月には丸紅株式会社との資本業務提携契約を締結し、シリーズAとして単独で3.5億円の資金調達を実施。</Text></li>
            </ul>

            <div className={styles.careerCategory}>
              <Heading level="5">
                <Text color="mono.200" className={styles.categoryTitle}>プロダクト開発</Text>
              </Heading>
              <Text color="mono.50" className={styles.categoryText}>
                上流工程では、ビジネス上の課題や意義などを検討する要求定義から、具体的なシステムへと落とし込むための要件定義の作成、またシステムを技術的に解釈するシステムデザインまで一貫して行い、下流工程でも自ら開発・保守・運用まで携わることで、ソフトウェアの外部品質・内部品質の両面から高品質なプロダクトの提供へと貢献しました。<br />
                また自社UIコンポーネントライブラリでは、企画の提案からシステムデザイン・開発・保守・運用までを一貫して担当し、のちにプロダクトオーナー兼スクラムマスターとしてライブラリ開発を主導しました。
              </Text>

              <ul className={styles.careerList}>
                <li><Text color="mono.50">保険代理店・アポ配信企業向けシステムの要求定義・要件定義・システムデザイン・開発・保守・運用</Text></li>
                <li><Text color="mono.50">アポ配信企業向けに提供する外部API機能開発のプロジェクト主導</Text></li>
                <li><Text color="mono.50">toC向け保険比較ランキングサイトの新規開発、toC向け保険相談LPページの改善にまつわる開発</Text></li>
                <li>
                  <details className={styles.detailsElement}>
                    <summary className={styles.summaryElement}>
                      <Text color="mono.200" className={styles.summaryText}>Vue/React両対応の自社UIコンポーネントライブラリのシステムデザイン・開発・保守・運用から、プロダクトオーナー兼スクラムマスターとして主導</Text>
                    </summary>
                    <div className={styles.detailsContent}>
                      <Text color="mono.50">
                        エンジニアの開発体制がフルスタックで行われていたときに、CSSによるデザイン構築を行う際、担当するエンジニアごとに品質のムラが発生していた点や、将来的にReactへのマイグレーションを考慮した際、現在のデザインシステムでは移行が困難であった点から、UIコンポーネントライブラリの開発を企画・提案しました。<br />
                        ライブラリのリリース後は、エンジニアの学習をサポートしつつ、定着後に集計したアンケート結果では、使用した開発者の8割がCSSの詳細を意識することが減り、全員が開発速度の向上を体感したという回答が得られました。<br />
                        また採用面でも、自社UIコンポーネントライブラリ経由から面談へ進む応募者が増加し、エンジニア採用へと寄与しました。<br />
                        最終的にはtoB向け主要プロダクトすべてにおいて採用され、UIコンポーネントライブラリが規定するデザインシステムに準拠したデザインを構築することで、UI/UXにおけるマネージャー・デザイナー・エンジニア間でのコミュニケーション基盤を確立し、一貫したUI/UXの提供を実現することができました。
                      </Text>
                    </div>
                  </details>
                </li>
              </ul>
            </div>

            <div className={styles.careerCategory}>
              <Heading level="5">
                <Text color="mono.200" className={styles.categoryTitle}>レガシーシステムの抜本的な改善・技術基盤整備</Text>
              </Heading>
              <Text color="mono.50" className={styles.categoryText}>
                解読困難なソースコード、バグを誘発しやすい根本的な設計や技術選定など、既存システムが抱えていた大量の技術負債を解消するため、バック・フロント問わず、段階的なものから大規模なものまで数々のリアーキテクチャを実施しました。<br />
                これらを通じて、システムの安定性や保守性、拡張性などの向上はもちろん、エンジニアの技術力も底上げされ、開発速度の向上や、個々のエンジニアによる自律した内部品質の維持が行える組織構築へと寄与しました。
              </Text>

              <ul className={styles.careerList}>
                <li><Text color="mono.50">数千行に渡る解読困難なコンポーネントを量産されてしまう、フロントエンドの複雑な状態管理へ対抗するために、Vuexの導入やVue2→3へのマイグレーションに伴うComposition APIを用いた状態管理を導入する段階的なリファクタリングの実施</Text></li>
                <li><Text color="mono.50">Fat Model & Controllerのシステム脱却のための、Layered Architectureを導入するリファクタリングの実施</Text></li>
                <li><Text color="mono.50">主要プロジェクトへTypeScriptを導入するリファクタリングの実施</Text></li>
                <li>
                  <details className={styles.detailsElement}>
                    <summary className={styles.summaryElement}>
                      <Text color="mono.200" className={styles.summaryText}>アポ配信企業向けシステムのVue→Reactへのマイグレーションを実施</Text>
                    </summary>
                    <div className={styles.detailsContent}>
                      <Text color="mono.50">
                        フロントエンド由来のバグが多発していた既存のVueプロジェクトに対し、TypeScriptによる型補完がより強力に効き、かつ「値の監視」ではなく「変更の管理」を徹底できるReactへのマイグレーションを実施しました。<br />
                        React導入のほかに、変更に強く堅牢なアーキテクチャの導入、型システムの厳格化、コンポーネント設計の見直し、必要があればバックエンドのAPI設計の改善も並行して行うなど、多角的なアプローチにより、システム全体の品質向上を図りました。<br />
                        通常の開発と並行して継続的にリファクタリングを実施し、1年半かけた段階的なマイグレーションをエラー0で完遂させ、完了後もフロントエンド由来のバグを大幅に減少させることに成功しました。
                      </Text>
                    </div>
                  </details>
                </li>
                <li>
                  <details className={styles.detailsElement}>
                    <summary className={styles.summaryElement}>
                      <Text color="mono.200" className={styles.summaryText}>新規・既存システムをGolang + DDD + Clean Architecture + CQSかつモジュラーモノリスで開発・移行するプロジェクトの推進</Text>
                    </summary>
                    <div className={styles.detailsContent}>
                      <Text color="mono.50">
                        保険にまつわる複雑なドメインを持つシステムをPHP + Laravelで開発していたものの、動的型付け言語による挙動の不安定さや、フレームワークに強く依存した設計による保守性の低さなど、多くの技術的課題を抱えていました。<br />
                        これらの課題を解決するため、静的型付け言語であるGolangへの移行を決定し、ドメイン駆動設計（DDD）やクリーンアーキテクチャ、CQSパターンを組み合わせた設計を採用することで、堅牢で保守性・拡張性の高いシステム基盤を構築しました。<br />
                        型システムやLinterを用いた静的解析による事前のバグ検出、アーキテクチャが規定する責務分離によるコードの可読性とTestabilityの確保、CommandとQueryの分離によるSQLの最適化などにより、システムの安定性とパフォーマンスの向上、大幅なDX改善を実現しました。
                      </Text>
                    </div>
                  </details>
                </li>
                <li><Text color="mono.50">OpenAPIを用いたスキーマ駆動開発の導入から、Zodを用いたスキーマ管理システムの開発、PR単位でのStub生成システムの構築といったDX改善の実施</Text></li>
                <li><Text color="mono.50">Auth0を用いた認証・認可システムの導入から、TypeScriptを用いたIaCシステムの開発によるDX改善の実施</Text></li>
                <li><Text color="mono.50">バックエンド・フロントエンドのログシステム改善やDWHの設計といったPoCの実施</Text></li>
              </ul>
            </div>

            <div className={styles.careerCategory}>
              <Heading level="5">
                <Text color="mono.200" className={styles.categoryTitle}>エンジニア育成・組織改革</Text>
              </Heading>
              <Text color="mono.50" className={styles.categoryText}>
                入社から退職まで通年でエンジニアの育成と組織改革に取り組み、技術的なスキルセットの向上だけでなく、開発体制や文化の改善、採用プロセスの見直しなど、多角的なアプローチによりエンジニア組織全体の成長と活性化に寄与しました。<br />
                技術負債を解消するだけでなく、エンジニア一人ひとりが自律的かつ協力的に高品質なコードを書けるようになることを目指し、バックエンド・フロントエンド双方でのスキルセットの底上げを実現しました。
              </Text>

              <ul className={styles.careerList}>
                <li><Text color="mono.50">定期的な技術勉強会、ペアプロ、コードレビュー、開発前のシステムデザインといった文化の定着</Text></li>
                <li><Text color="mono.50">全員がフルスタックエンジニアとなる開発体制から、フロントエンドとバックエンドの担当者を分離した開発体制の導入</Text></li>
                <li><Text color="mono.50">エンジニア採用における技術要綱の検討から採用課題の刷新・採点、採用面談まで担当</Text></li>
                <li><Text color="mono.50">Notionでのユビキタス言語DBの作成や、イベントストーミングを用いたドメインモデリングの導入</Text></li>
                <li><Text color="mono.50">コーディングガイドラインやスキルマップの策定</Text></li>
                <li><Text color="mono.50">生成AIを用いたコードレビューやテストコード生成システムの作成・導入</Text></li>
                <li><Text color="mono.50">技術記事の寄稿</Text></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={styles.skillSection}>
          <Heading level="3">
            <Text color="mono.50" className={styles.sectionTitle}>スキルセット</Text>
          </Heading>

          <div className={styles.skillLegend}>
            <Text color="mono.300" className={styles.legendText}>👑 3年以上の実務経験 | 💪 1年以上の実務経験 | 🌱 1年未満の実務経験 | 🎨 個人開発にて使用</Text>
          </div>

          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>プログラミング言語</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">TypeScript 👑</Text></li>
                <li><Text color="mono.50">PHP 👑</Text></li>
                <li><Text color="mono.50">Go 💪</Text></li>
                <li><Text color="mono.50">Python 💪</Text></li>
                <li><Text color="mono.50">Elm 🌱</Text></li>
                <li><Text color="mono.50">Rust, F#, Haskell, PureScript 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>フロントエンドライブラリ</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">React, Vue, Vanilla Extract, Zod 👑</Text></li>
                <li><Text color="mono.50">Next.js, Remix, Nuxt.js 🌱</Text></li>
                <li><Text color="mono.50">Astro, Tailwind CSS 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>バックエンドライブラリ</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Laravel 👑</Text></li>
                <li><Text color="mono.50">Echo 💪</Text></li>
                <li><Text color="mono.50">Hono 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>アーキテクチャ</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Clean Architecture, Layered Architecture, MVC 👑</Text></li>
                <li><Text color="mono.50">RESTful API, RPC API 👑</Text></li>
                <li><Text color="mono.50">DDD, CQS/CQRS 💪</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>データベース</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">MySQL 👑</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>Webサーバー/リバースプロキシ</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Nginx 👑</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>API基盤</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">OpenAPI/Swagger/Redoc 👑</Text></li>
                <li><Text color="mono.50">Protocol Buffers/Connect 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>クラウド</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Vercel 👑</Text></li>
                <li><Text color="mono.50">AWS, GCP 💪</Text></li>
                <li><Text color="mono.50">Cloudflare 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>コンテナ / オーケストレーション / OS・構成管理</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Docker 👑</Text></li>
                <li><Text color="mono.50">Kubernetes 🎨</Text></li>
                <li><Text color="mono.50">Nix/NixOS 🎨</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>認証・認可</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Auth0 👑</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>開発周辺ツール / コラボレーション</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Git/GitHub, Figma, Notion, Slack 👑</Text></li>
                <li><Text color="mono.50">Sentry 💪</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>生成AI / AIエージェント</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Devin, Dify 🌱</Text></li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <Text color="mono.200" className={styles.skillCategoryTitle}>連携サービス</Text>
              <ul className={styles.skillList}>
                <li><Text color="mono.50">Zoom API, Google Calendar API 💪</Text></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
