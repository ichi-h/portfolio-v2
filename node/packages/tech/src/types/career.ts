export interface Company {
  name: string;
  role: string;
  period: string;
  overview: string[]; // 概要（冒頭の箇条書き）
  categories: Category[]; // カテゴリー（プロダクト開発、レガシーシステムの抜本的な改善・技術基盤整備、など）
}

export interface Category {
  title: string; // カテゴリーの見出し
  description: string; // カテゴリーの説明文（見出しの下の段落）
  items: CategoryItem[]; // カテゴリー内のアイテム（箇条書きまたは details）
}

export interface CategoryItem {
  text: string; // 箇条書きのテキスト
  details?: DetailItem; // 折りたたみ詳細（オプション）
}

export interface DetailItem {
  summary: string; // details の summary テキスト
  content: string[]; // details 内の段落（複数段落対応）
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
