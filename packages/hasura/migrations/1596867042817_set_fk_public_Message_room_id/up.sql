alter table "public"."Message"
           add constraint "Message_room_id_fkey"
           foreign key ("room_id")
           references "public"."Room"
           ("id") on update restrict on delete cascade;
