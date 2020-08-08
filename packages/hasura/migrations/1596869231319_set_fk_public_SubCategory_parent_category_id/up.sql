alter table "public"."SubCategory"
           add constraint "SubCategory_parent_category_id_fkey"
           foreign key ("parent_category_id")
           references "public"."ParentCategory"
           ("id") on update restrict on delete restrict;
