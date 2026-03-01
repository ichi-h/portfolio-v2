# fragments.ichi-h.com

## 概要

- ichi-hが執筆した詩などの文学作品の断片集を掲載するサイト

## 構成

- デザイン
  - 非常にシンプルでミニマルなデザイン
  - mono.900をベースとし、文字をmono.50で表示

### トップページ /

- 概要
  - 作品の一覧を表示するページ
- 表示するもの
  - ページ名（fragments.ichi-h.com）
  - 作品のタイトル一覧（リストで表示）
  - copyright表記（ichi-h.comのものを流用）
  - CC BY-NC-ND 4.0
    - 公開されている作品はすべてこのライセンスで公開されていることを明記する

### 閲覧ページ /{fragment_id}

- 概要
  - ノベルゲーム形式で作品を閲覧するページ
- 表示するもの
  - 作品のデータ構造を仮として表示
    - 詳細な実装はこちらで行うため上記の表示のみ実装
  - トップページへ戻るボタン
    - 左下にアイコンを表示
    - アイコンはuiパッケージ（後述）からLeftArrowIconを使用

## 作品のデータ構造

```ts
interface Fragment {
  id: string;
  title: string;
  thumbnailUrl: string;
  content: string;
}
```

## 使用技術

- vinext
  - https://vinext.io/
  - Next.jsをviteで再実装したフレームワーク
  - 使用方法はNext.jsと同じ
  - SSRとCSRにて実装
  - デプロイ先はCloudflare Workers
- portfolio-styles
  - プロジェクトにおけるデザインシステムのスタイルを管理するパッケージ
  - vanilla-extractでスタイルを定義し、各プロジェクトから呼び出して使用する
  - 使用方法はpackages/worksおよびpackages/techを参照
- portfolio-ui
  - 上記のデザインシステムに従ったReactコンポーネントを管理するパッケージ
  - 使用方法はpackages/worksおよびpackages/techを参照
