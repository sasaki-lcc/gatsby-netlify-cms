## 概要、目的
lincwellの使用技術に簡単に触れる(2回目　1回目はnetlify-cmsディレクトリ)
https://linc-well.com/

## 起動
cd project-name
最初のみ　yarn
npm run dev

## ToDo
- 英語版の仮想URLの作成【済】
- ページ構成の把握【済】
- 投資情報の投稿機能を追加【済】
- styledcomponent導入【済】
- importの候補や閉じタグ補完が効かない問題
- typeScript対応【済】
- storyboadr対応
- NextCMSの環境作成【済】
- NextCMSのログイン【済】
- GraphQL再確認【済】
- Jest再確認
- API対応確認 axiosでjsonplaceholder使えるか【使えた！済】あとはバンドルしてからの挙動

## 次回
・諸々エラーが起こる問題【済】
@typesを諸々追加
・一覧のブラッシュアップ【済】
・プレビュー作成
preview-templates
・apiの情報をmdに入れるには
・axiosで取得したデータがhtmlに埋め込まれない、キャッシュは可能か
・取得したapi情報をgraphQLに格納できるのか【調査中】
https://reffect.co.jp/html/graphql

## blog以外にcontentsを追加するには
demo/gatsby-netlify-cms/static/admin/config.yml
に加える
IRを追加

## typescriptについて
GatsbyはJavaScriptとTypeScriptをネイティブにサポートしており、いつでもファイルを.js/.jsxから.ts/に変更tsxし

## styledcomponent
インストール
https://www.gatsbyjs.com/docs/how-to/styling/styled-components/

## propsやルーティング
Nextと同じルーティングやpropsとtypeの設定で大丈夫そう

## NetlifyCMS
なんか勝手にやってくれるみたい
https://bagelee.com/design/gatsbyjs/create-website-with-gatsbyjs-and-netlifycms/


参考
https://zenn.dev/enuenu/articles/2151089c11e8e0

## 突然ログインできない
https://usomitainikagayakumachi.tokyo/2020-03-18-%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E8%A8%98%E4%BA%8B%E3%82%92netlifycms%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B/

## storybook


# 過去のリードミー

## 概要、目的
lincwellの使用技術に簡単に触れる
https://linc-well.com/

## 技術
コード管理：Github【済】
CMS：NetlifyCMS【-】
デプロイ：Netlify【-】
使用言語：React、TypeScript【済】
ライブラリ： Gatsby
その他：GraphQL
Gatsbyの画像設定方法Nextと同じでも可能

## 問題
問題GraphQLが最初の項目しか取得できない→解決、配列とobjか混在するとうまくいかないのかもただのobjのみにしたら複数取得できた

## 参考
https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners
https://qiita.com/irico/items/cf87eb29ecaf7e135fcd
GraphQL
https://note.com/daikinishimatsu/n/n6eb2a5bdf01c
NetlifyCMS
こっち
https://zenn.dev/enuenu/articles/2151089c11e8e0
やっぱこっち
https://qiita.com/Kento75/items/7316dd5b7a8014d6c178

## 先方のガイドラインとReference
https://github.com/lincwell/frontend-coding-guideline

https://betterprogramming.pub/21-best-practices-for-a-clean-react-project-df788a682fb

## 起動
cd project-name
gatsby develop

## GraphQL　GUIの起動
http://localhost:8000/___graphql
