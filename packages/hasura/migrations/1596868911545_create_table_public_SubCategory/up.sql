CREATE TABLE "public"."SubCategory"("id" serial NOT NULL, "circle_id" integer NOT NULL, "category_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("circle_id") REFERENCES "public"."Circle"("id") ON UPDATE restrict ON DELETE restrict);
