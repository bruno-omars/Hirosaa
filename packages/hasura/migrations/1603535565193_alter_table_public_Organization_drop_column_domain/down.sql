ALTER TABLE "public"."Organization" ADD COLUMN "domain" text;
ALTER TABLE "public"."Organization" ALTER COLUMN "domain" DROP NOT NULL;
