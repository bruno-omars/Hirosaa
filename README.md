# Hirosaa

## プロジェクトの進め方(Hasura)

- 起動する

```
$ docker-compose up -d # 起動
```

- コンソールでテーブル作成など作業する。
この時、以下のコマンドでコンソールを立ち上げる

```
$ yarn hasura console
```

- DevサーバにマイグレーションとメタデータをApplyする
(これは一発で叩けるようにコマンド化します)

```
yarn hasura migrate apply \
  --version "<version>" \
  --admin-secret "<admin-secret>" \
  --endpoint "https://crack-pheasant-27.hasura.app"
  
yarn hasura metadata apply \
  --admin-secret "<admin-secret>" \
  --endpoint "https://crack-pheasant-27.hasura.app"
```
