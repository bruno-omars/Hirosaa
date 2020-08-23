ALTER TABLE "public"."SubCategory" ADD COLUMN "circle_id" int4;
ALTER TABLE "public"."SubCategory" ALTER COLUMN "circle_id" DROP NOT NULL;
ALTER TABLE "public"."SubCategory" ADD CONSTRAINT SubCategory_circle_id_fkey FOREIGN KEY (circle_id) REFERENCES "public"."Circle" (id) ON DELETE restrict ON UPDATE restrict;
