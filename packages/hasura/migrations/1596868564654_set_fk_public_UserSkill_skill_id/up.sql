alter table "public"."UserSkill"
           add constraint "UserSkill_skill_id_fkey"
           foreign key ("skill_id")
           references "public"."Skill"
           ("id") on update restrict on delete restrict;
