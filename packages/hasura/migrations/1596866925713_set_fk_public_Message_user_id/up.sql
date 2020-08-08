alter table "public"."Message"
           add constraint "Message_user_id_fkey"
           foreign key ("user_id")
           references "public"."User"
           ("id") on update restrict on delete restrict;
