# fragments.ichi-h.com

## 概要

- ichi-hが執筆した詩などの文学作品の断片集を掲載するサイト

## 構成

- デザイン
  - 非常にシンプルでミニマルなデザイン
  - mono.300をベースとし、文字をmono.900で表示

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
  - notionから得られたページの表示方法
    - parseMd2Htmlを用いてnotionのページをHTMLに変換し、dangerouslySetInnerHTMLで表示する
    - dangerouslySetInnerHTMLを使用するタグにfragmentクラスを付与し、その配下にある要素に対してglobalStyleでスタイルを適用する
    - 画像は中央寄せで表示
    - レスポンシブデザインに対応させること
  - トップページへ戻るボタン
    - 左下にアイコンを表示
    - アイコンはuiパッケージ（後述）からLeftArrowIconを使用

## 作品の取得方法

- notion apiを使用して以下に該当するデータを取得する
  - categoriesプロパティにfragmentが含まれるページ
- **notion apiを使用する都合上、環境変数 `NOTION_SECRET_KEY` と `NOTION_DATA_SOURCE_ID` が流出しないように注意すること**

## 使用技術

- vinext
  - https://vinext.io/
  - Next.jsをviteで再実装したフレームワーク
  - 使用方法はNext.jsと同じ
  - SSRとCSRにて実装
  - デプロイ先はCloudflare Workers
- portfolio-shared
  - プロジェクトに共通する機能を提供するパッケージ
  - このプロジェクトにおいては、主にnotionとの通信を行う機能を利用する
  - 使用方法はpackages/worksおよびpackages/techを参照
- portfolio-styles
  - プロジェクトにおけるデザインシステムのスタイルを管理するパッケージ
  - vanilla-extractでスタイルを定義し、各プロジェクトから呼び出して使用する
  - 使用方法はpackages/worksおよびpackages/techを参照
- portfolio-ui
  - 上記のデザインシステムに従ったReactコンポーネントを管理するパッケージ
  - 使用方法はpackages/worksおよびpackages/techを参照
