CREATE TABLE public."Messages" (
    id integer NOT NULL,
    text text NOT NULL,
    user_id text NOT NULL,
    room_id integer NOT NULL,
    "timestamp" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public."Messages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Messages_id_seq" OWNED BY public."Messages".id;
CREATE TABLE public.rooms (
    id integer NOT NULL,
    avatar text NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
CREATE TABLE public.users (
    id integer NOT NULL,
    username text,
    avatar text,
    name text,
    email text,
    introduction text,
    interested_in text,
    last_seen timestamp with time zone,
    created_at timestamp with time zone
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public."Messages" ALTER COLUMN id SET DEFAULT nextval('public."Messages_id_seq"'::regclass);
ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_username_key UNIQUE (username);
