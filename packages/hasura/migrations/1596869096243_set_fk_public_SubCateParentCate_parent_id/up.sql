alter table "public"."SubCateParentCate"
           add constraint "SubCateParentCate_parent_id_fkey"
           foreign key ("parent_id")
           references "public"."ParentCategory"
           ("id") on update restrict on delete restrict;
