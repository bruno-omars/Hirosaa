ALTER TABLE "public"."User" ALTER COLUMN "id" TYPE integer;
ALTER TABLE ONLY "public"."User" ALTER COLUMN "id" SET DEFAULT 'nextval('user_id_seq'::regclass)';
