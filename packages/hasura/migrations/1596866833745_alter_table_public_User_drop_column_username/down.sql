ALTER TABLE "public"."User" ADD COLUMN "username" text;
ALTER TABLE "public"."User" ALTER COLUMN "username" DROP NOT NULL;
ALTER TABLE "public"."User" ADD CONSTRAINT user_username_key UNIQUE (username);
