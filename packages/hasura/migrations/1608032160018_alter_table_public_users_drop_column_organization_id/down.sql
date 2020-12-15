ALTER TABLE "public"."users" ADD COLUMN "organization_id" text;
ALTER TABLE "public"."users" ALTER COLUMN "organization_id" DROP NOT NULL;
ALTER TABLE "public"."users" ADD CONSTRAINT User_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES "public"."organizations" (id) ON DELETE restrict ON UPDATE restrict;
