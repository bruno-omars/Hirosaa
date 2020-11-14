alter table "public"."User"
           add constraint "User_organization_id_fkey"
           foreign key ("organization_id")
           references "public"."Organization"
           ("id") on update restrict on delete restrict;
