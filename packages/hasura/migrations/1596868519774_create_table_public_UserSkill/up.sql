CREATE TABLE "public"."UserSkill"("id" serial NOT NULL, "user_id" text NOT NULL, "skill_id" integer NOT NULL, "level" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON UPDATE restrict ON DELETE cascade);
