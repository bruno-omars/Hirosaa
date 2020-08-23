alter table "public"."Circle"
           add constraint "Circle_sub_category_id_fkey"
           foreign key ("sub_category_id")
           references "public"."SubCategory"
           ("id") on update restrict on delete restrict;
