ALTER TABLE "public"."user" ADD COLUMN "name" text;
ALTER TABLE "public"."user" ALTER COLUMN "name" DROP NOT NULL;
