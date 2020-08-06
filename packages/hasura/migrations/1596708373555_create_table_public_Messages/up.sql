CREATE TABLE "public"."Messages"("id" serial NOT NULL, "text" text NOT NULL, "user_id" text NOT NULL, "room_id" integer NOT NULL, "timestamp" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
