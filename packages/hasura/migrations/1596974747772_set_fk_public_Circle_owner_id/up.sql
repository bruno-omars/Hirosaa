alter table "public"."Circle"
           add constraint "Circle_owner_id_fkey"
           foreign key ("owner_id")
           references "public"."User"
           ("id") on update restrict on delete restrict;
