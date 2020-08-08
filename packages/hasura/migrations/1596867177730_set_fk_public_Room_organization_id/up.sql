alter table "public"."Room"
           add constraint "Room_organization_id_fkey"
           foreign key ("organization_id")
           references "public"."Organization"
           ("id") on update restrict on delete cascade;
