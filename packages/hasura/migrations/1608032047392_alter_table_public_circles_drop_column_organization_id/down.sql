ALTER TABLE "public"."circles" ADD COLUMN "organization_id" text;
ALTER TABLE "public"."circles" ALTER COLUMN "organization_id" DROP NOT NULL;
