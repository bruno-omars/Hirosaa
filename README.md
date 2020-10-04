# Hirosaa

## プロジェクトの進め方(Hasura)

- サーバ起動

```bash
$ docker-compose up -d
```

- サンプルデータの作成
  最初にサーバを起動した時と、`hasura/seeds`が変更された場合に必要。

```bash
$ yarn hasura seeds apply
```

- ログイン
  Slack に貼ってあるメールアドレスとパスワードを使用してログイン

- コンソールを起動
  クエリを試す時やテーブル作成・認可の設定などする場合

```bash
$ yarn hasura console
```

- 型を生成
  フロントエンド開発時に必要。
  具体的には、`web/src/graphql`に Query や Mutation を定義した後に叩く。

```bash
$ yarn web generate
```

- Test 環境や Production 環境にデプロイする
  コンソールを起動し、テーブルなどを変更した場合は行う必要がある。
  具体的には、`hasura/migrations`や`hasura/metadata`などが変更された時。
  これは今後 CI/CD に組み込むが現在は手動で行う必要がある。

```bash
bin/apply-all
```
