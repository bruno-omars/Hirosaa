ALTER TABLE "public"."Organization" ALTER COLUMN "id" TYPE integer;
ALTER TABLE ONLY "public"."Organization" ALTER COLUMN "id" SET DEFAULT 'nextval('"Organization_id_seq"'::regclass)';
