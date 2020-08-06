
ALTER TABLE "public"."users" ADD COLUMN "icon" text NULL;

ALTER TABLE "public"."users" ADD COLUMN "name" text NULL;

ALTER TABLE "public"."users" ADD COLUMN "email" text NULL;

ALTER TABLE "public"."users" ADD COLUMN "introduction" text NULL;

ALTER TABLE "public"."users" ADD COLUMN "interested_in" text NULL;

ALTER TABLE "public"."users" ADD COLUMN "last_seen" timestamptz NULL;

ALTER TABLE "public"."users" ADD COLUMN "created_at" timestamptz NULL;
