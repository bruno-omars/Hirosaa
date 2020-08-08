alter table "public"."Message" drop constraint "Message_user_id_fkey",
          add constraint "Message_user_id_fkey"
          foreign key ("user_id")
          references "public"."User"
          ("id")
          on update restrict
          on delete restrict;
