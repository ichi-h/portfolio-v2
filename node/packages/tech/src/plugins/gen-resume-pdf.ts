import fs from "node:fs";
import path from "node:path";

import { mdToPdf } from "md-to-pdf";

import { summary, resume } from "../components/pages/home/md";
import { skills } from "../components/pages/home/skills";

import type { Plugin } from "vite";

interface GenResumePdfOptions {
  outputDir?: string;
  name?: string;
}

const genMdResume = (name: string) => {
  const today = new Date();

  return `# 職務経歴書

<p style="text-align: right">${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日</p>
<p style="text-align: right">${name}</p>

${summary.default.replaceAll("# ", " ")}
${resume.join("\n\n").replaceAll("# ", " ")}
## 使用技術

- 👑: 3年以上の実務経験
- 💪: 3年未満の実務経験
- 🎨: 個人開発にて使用

${skills.map((skill) => `### ${skill.title}\n\n${skill.skills.map((item) => `- ${item}`).join("\n")}`).join("\n\n")}

## URLs

- GitHub: https://github.com/ichi-h
- Zenn: https://zenn.dev/ichi_h
`;
};

const pdfCss = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap');

* {
  font-family: "Zen Kaku Gothic New", "Noto Color Emoji", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

h1 { font-size: 1.5rem; text-align: center; }
h2 { font-size: 1.25rem; }
h3 { font-size: 1rem; }
h4 { font-size: 0.75rem; }
h5 { font-size: 0.5rem; }
`;

export function genResumePdf(options: GenResumePdfOptions = {}): Plugin {
  const { outputDir = "dist", name = "ichi-h" } = options;

  return {
    name: "vite-plugin-gen-resume-pdf",
    async closeBundle() {
      try {
        const mdResume = genMdResume(name);

        const pdf = await mdToPdf({ content: mdResume }, { css: pdfCss });

        if (pdf) {
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          const pdfPath = path.join(outputDir, "resume.pdf");
          const mdPath = path.join(outputDir, "resume.md");

          fs.writeFileSync(mdPath, mdResume);
          console.log(`Markdown saved successfully: ${mdPath}`);

          fs.writeFileSync(pdfPath, pdf.content);
          console.log(`PDF generated successfully: ${pdfPath}`);
        }
      } catch (error) {
        console.error("Failed to generate resume:", error);
      }
    },
  };
}
