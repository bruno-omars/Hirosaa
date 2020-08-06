# Hirosaa

## プロジェクトの進め方(Hasura)

- 起動する

```
$ docker-compose up -d # 起動
```

- コンソールでテーブル作成など作業する。
この時、以下のコマンドでコンソールを立ち上げる
このやり方でコンソールを立ちあげてから作業しないと、テーブルの変更が追従されない
なので、hasura cloudのdevサーバのconsoleも立ち上げられないようにしています

```
$ yarn hasura console
```

- DevサーバにマイグレーションとメタデータをApplyする

```
bin/hasura-apply <バージョン指定>
```