--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7 (Debian 11.7-2.pgdg90+1)
-- Dumped by pg_dump version 11.7 (Debian 11.7-2.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO postgres;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO postgres;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO postgres;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO postgres;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO postgres;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO postgres;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO postgres;

--
-- Name: places_certificate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.places_certificate (
    id integer NOT NULL,
    designation character varying(50) NOT NULL,
    comment text NOT NULL,
    farm_id integer NOT NULL
);


ALTER TABLE public.places_certificate OWNER TO postgres;

--
-- Name: places_certificate_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.places_certificate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_certificate_id_seq OWNER TO postgres;

--
-- Name: places_certificate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.places_certificate_id_seq OWNED BY public.places_certificate.id;


--
-- Name: places_farm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.places_farm (
    id integer NOT NULL,
    "farmName" character varying(50) NOT NULL,
    bio text NOT NULL,
    address character varying(100) NOT NULL,
    country character varying(50) NOT NULL,
    region character varying(50) NOT NULL,
    phone character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    facebook character varying(50) NOT NULL,
    twitter character varying(50) NOT NULL,
    linkedin character varying(50) NOT NULL,
    instagram character varying(50) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.places_farm OWNER TO postgres;

--
-- Name: places_farm_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.places_farm_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_farm_id_seq OWNER TO postgres;

--
-- Name: places_farm_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.places_farm_id_seq OWNED BY public.places_farm.id;


--
-- Name: places_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.places_history (
    id integer NOT NULL,
    location character varying(100) NOT NULL,
    milestone character varying(100) NOT NULL,
    duration character varying(25) NOT NULL,
    comment text NOT NULL,
    farm_id integer NOT NULL
);


ALTER TABLE public.places_history OWNER TO postgres;

--
-- Name: places_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.places_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_history_id_seq OWNER TO postgres;

--
-- Name: places_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.places_history_id_seq OWNED BY public.places_history.id;


--
-- Name: places_picture; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.places_picture (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    farm_id integer NOT NULL
);


ALTER TABLE public.places_picture OWNER TO postgres;

--
-- Name: places_picture_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.places_picture_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_picture_id_seq OWNER TO postgres;

--
-- Name: places_picture_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.places_picture_id_seq OWNED BY public.places_picture.id;


--
-- Name: products_feature; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_feature (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    percentage integer NOT NULL,
    farm_id integer NOT NULL
);


ALTER TABLE public.products_feature OWNER TO postgres;

--
-- Name: products_feature_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_feature_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_feature_id_seq OWNER TO postgres;

--
-- Name: products_feature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_feature_id_seq OWNED BY public.products_feature.id;


--
-- Name: products_product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product (
    id integer NOT NULL,
    "coffeeName" character varying(50) NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    variety character varying(50) NOT NULL,
    processing character varying(50) NOT NULL,
    crop_year integer NOT NULL,
    farm_id integer NOT NULL
);


ALTER TABLE public.products_product OWNER TO postgres;

--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO postgres;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products_product.id;


--
-- Name: users_profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_profile (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.users_profile OWNER TO postgres;

--
-- Name: users_profile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_profile_id_seq OWNER TO postgres;

--
-- Name: users_profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_profile_id_seq OWNED BY public.users_profile.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: places_certificate id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_certificate ALTER COLUMN id SET DEFAULT nextval('public.places_certificate_id_seq'::regclass);


--
-- Name: places_farm id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_farm ALTER COLUMN id SET DEFAULT nextval('public.places_farm_id_seq'::regclass);


--
-- Name: places_history id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_history ALTER COLUMN id SET DEFAULT nextval('public.places_history_id_seq'::regclass);


--
-- Name: places_picture id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_picture ALTER COLUMN id SET DEFAULT nextval('public.places_picture_id_seq'::regclass);


--
-- Name: products_feature id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_feature ALTER COLUMN id SET DEFAULT nextval('public.products_feature_id_seq'::regclass);


--
-- Name: products_product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product ALTER COLUMN id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- Name: users_profile id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_profile ALTER COLUMN id SET DEFAULT nextval('public.users_profile_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add profile	7	add_profile
26	Can change profile	7	change_profile
27	Can delete profile	7	delete_profile
28	Can view profile	7	view_profile
29	Can add farm	8	add_farm
30	Can change farm	8	change_farm
31	Can delete farm	8	delete_farm
32	Can view farm	8	view_farm
33	Can add picture	9	add_picture
34	Can change picture	9	change_picture
35	Can delete picture	9	delete_picture
36	Can view picture	9	view_picture
37	Can add history	10	add_history
38	Can change history	10	change_history
39	Can delete history	10	delete_history
40	Can view history	10	view_history
41	Can add certificate	11	add_certificate
42	Can change certificate	11	change_certificate
43	Can delete certificate	11	delete_certificate
44	Can view certificate	11	view_certificate
45	Can add product	12	add_product
46	Can change product	12	change_product
47	Can delete product	12	delete_product
48	Can view product	12	view_product
49	Can add feature	13	add_feature
50	Can change feature	13	change_feature
51	Can delete feature	13	delete_feature
52	Can view feature	13	view_feature
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$mJLPoe3Y1y0J$KqkLsQsfIkkpkOKPZShrqHRE2lipNXfGv47z0Ic0Wg0=	2020-03-11 09:48:13.516444-05	t	commodoro				t	t	2020-03-11 09:47:44.060955-05
2	pbkdf2_sha256$180000$jsvgyQ8aPAJi$fFsP6DDtcfTIzr9GNGdU6IH9Y84MIC02Yd2RynaNG3o=	\N	f	carlosdiaz	Carlos	Diaz	carlos@diaz.com	f	t	2020-03-11 09:48:57.639824-05
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-03-11 09:48:57.814772-05	2	carlosdiaz	1	[{"added": {}}]	4	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	users	profile
8	places	farm
9	places	picture
10	places	history
11	places	certificate
12	products	product
13	products	feature
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-03-11 09:44:39.172175-05
2	auth	0001_initial	2020-03-11 09:44:39.562664-05
3	admin	0001_initial	2020-03-11 09:44:40.326586-05
4	admin	0002_logentry_remove_auto_add	2020-03-11 09:44:40.462974-05
5	admin	0003_logentry_add_action_flag_choices	2020-03-11 09:44:40.477074-05
6	contenttypes	0002_remove_content_type_name	2020-03-11 09:44:40.515823-05
7	auth	0002_alter_permission_name_max_length	2020-03-11 09:44:40.528754-05
8	auth	0003_alter_user_email_max_length	2020-03-11 09:44:40.547159-05
9	auth	0004_alter_user_username_opts	2020-03-11 09:44:40.570356-05
10	auth	0005_alter_user_last_login_null	2020-03-11 09:44:40.587832-05
11	auth	0006_require_contenttypes_0002	2020-03-11 09:44:40.603353-05
12	auth	0007_alter_validators_add_error_messages	2020-03-11 09:44:40.644273-05
13	auth	0008_alter_user_username_max_length	2020-03-11 09:44:40.7277-05
14	auth	0009_alter_user_last_name_max_length	2020-03-11 09:44:40.75465-05
15	auth	0010_alter_group_name_max_length	2020-03-11 09:44:40.781391-05
16	auth	0011_update_proxy_permissions	2020-03-11 09:44:40.810572-05
17	places	0001_initial	2020-03-11 09:44:41.186403-05
18	places	0002_auto_20200310_1858	2020-03-11 09:44:41.403948-05
19	products	0001_initial	2020-03-11 09:44:41.592807-05
20	products	0002_auto_20200310_1938	2020-03-11 09:44:41.882539-05
21	products	0003_auto_20200310_1950	2020-03-11 09:44:41.933209-05
22	products	0004_auto_20200311_1440	2020-03-11 09:44:41.98734-05
23	sessions	0001_initial	2020-03-11 09:44:42.147437-05
24	users	0001_initial	2020-03-11 09:44:42.352118-05
25	users	0002_auto_20200310_1858	2020-03-11 09:44:42.393114-05
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
s4i7y0w1cbj87u1tlbhhynacphdq7cze	Y2VhNDZiMDg3OTAyZDk4YzEwOTNkYjMwNGQ3NzZkZTQ2ODg1ZTg1Yjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1MjA1MmIwNTI2ZGMzNjA5MjI4YzNkZWQ0MThkMjBlMGQ5NmM3NGY1In0=	2020-03-25 09:48:13.528212-05
\.


--
-- Data for Name: places_certificate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.places_certificate (id, designation, comment, farm_id) FROM stdin;
1	Rain Forest Alliance	Certification of standard in sustainable farms	1
2	JAS	Certification of organic coffee for exports in Japan	1
3	UTZ	Certification of sustainable coffee farm	1
\.


--
-- Data for Name: places_farm; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.places_farm (id, "farmName", bio, address, country, region, phone, email, facebook, twitter, linkedin, instagram, user_id) FROM stdin;
1	Las Margaritas	The altitude ranges from 1200 to 1800 meters above sea level (masl) with many of the farms we buy from lying within the 1400 to 1800-meter range. Elsewhere in Colombia, the lower part of this range could potentially produce uninteresting, flat coffees. Coffees produced at higher elevations are typically denser and are therefore appreciated more by specialty coffee professionals. Typically, an increase of elevation means an increase in perceived acidity in the cup. This is potentially in part due to an increase in exposure to UV radiation, but mostly caused by the larger diurnal swings that happen at higher elevations. The cooler nights that occur at higher elevations lead to slower cherry maturation, which leads to sweeter, more complex cups.	Km 15 Vía Cachipay - Vereda Guayabal	Colombia	Latin America	+57 3003838123	carlos@diaz.com	carlosdiaz	carlosdiaz	carlosdiaz	carlosdiaz	2
\.


--
-- Data for Name: places_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.places_history (id, location, milestone, duration, comment, farm_id) FROM stdin;
1	Cachipay - Cundinamarca	Farm Las Margaritas is born	MAY 1995	Carlos Diaz build a small house in an area of 7 hectares to harvest coffee and tangerine..	1
2	Cachipay - Cundinamarca	First harvest of Caturra	JUN 1996	With a total of 3 hectares Las Margaritas harvested its first batch of coffee.	1
3	Cachipay - Cundinamarca	First export to USA	OCT 2002	A first batch of 20 bags of 50kg were exported to USA	1
4	Cachipay - Cundinamarca	Las Margaritas coffee obtains Rain Forest certificate	APR 2008	The farm obtains the Rain Forest certification.	1
\.


--
-- Data for Name: places_picture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.places_picture (id, image, farm_id) FROM stdin;
\.


--
-- Data for Name: products_feature; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_feature (id, title, percentage, farm_id) FROM stdin;
1	Fragance	70	1
2	Flavor	75	1
3	Aftertaste	80	1
4	Acidity	85	1
5	Body	85	1
6	Uniformity	90	1
7	Balance	92	1
8	Clean cup	86	1
9	Sweetness	75	1
10	Overall	86	1
\.


--
-- Data for Name: products_product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product (id, "coffeeName", description, price, variety, processing, crop_year, farm_id) FROM stdin;
1	Caturra LT 001	Caturra	7	Caturra	Honey washed	2020	1
\.


--
-- Data for Name: users_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_profile (id, image, user_id) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 52, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 2, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 13, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 25, true);


--
-- Name: places_certificate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.places_certificate_id_seq', 3, true);


--
-- Name: places_farm_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.places_farm_id_seq', 1, true);


--
-- Name: places_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.places_history_id_seq', 4, true);


--
-- Name: places_picture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.places_picture_id_seq', 1, false);


--
-- Name: products_feature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_feature_id_seq', 10, true);


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 1, true);


--
-- Name: users_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_profile_id_seq', 1, false);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: places_certificate places_certificate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_certificate
    ADD CONSTRAINT places_certificate_pkey PRIMARY KEY (id);


--
-- Name: places_farm places_farm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_farm
    ADD CONSTRAINT places_farm_pkey PRIMARY KEY (id);


--
-- Name: places_history places_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_history
    ADD CONSTRAINT places_history_pkey PRIMARY KEY (id);


--
-- Name: places_picture places_picture_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_picture
    ADD CONSTRAINT places_picture_pkey PRIMARY KEY (id);


--
-- Name: products_feature products_feature_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_feature
    ADD CONSTRAINT products_feature_pkey PRIMARY KEY (id);


--
-- Name: products_product products_product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_pkey PRIMARY KEY (id);


--
-- Name: users_profile users_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_profile
    ADD CONSTRAINT users_profile_pkey PRIMARY KEY (id);


--
-- Name: users_profile users_profile_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_profile
    ADD CONSTRAINT users_profile_user_id_key UNIQUE (user_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: places_certificate_farm_id_0a10ad08; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX places_certificate_farm_id_0a10ad08 ON public.places_certificate USING btree (farm_id);


--
-- Name: places_farm_user_id_dddff69f; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX places_farm_user_id_dddff69f ON public.places_farm USING btree (user_id);


--
-- Name: places_history_farm_id_72270535; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX places_history_farm_id_72270535 ON public.places_history USING btree (farm_id);


--
-- Name: places_picture_farm_id_22a84fa9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX places_picture_farm_id_22a84fa9 ON public.places_picture USING btree (farm_id);


--
-- Name: products_feature_farm_id_330bce0c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_feature_farm_id_330bce0c ON public.products_feature USING btree (farm_id);


--
-- Name: products_product_farm_id_76d1008e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_farm_id_76d1008e ON public.products_product USING btree (farm_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: places_certificate places_certificate_farm_id_0a10ad08_fk_places_farm_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_certificate
    ADD CONSTRAINT places_certificate_farm_id_0a10ad08_fk_places_farm_id FOREIGN KEY (farm_id) REFERENCES public.places_farm(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: places_farm places_farm_user_id_dddff69f_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_farm
    ADD CONSTRAINT places_farm_user_id_dddff69f_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: places_history places_history_farm_id_72270535_fk_places_farm_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_history
    ADD CONSTRAINT places_history_farm_id_72270535_fk_places_farm_id FOREIGN KEY (farm_id) REFERENCES public.places_farm(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: places_picture places_picture_farm_id_22a84fa9_fk_places_farm_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.places_picture
    ADD CONSTRAINT places_picture_farm_id_22a84fa9_fk_places_farm_id FOREIGN KEY (farm_id) REFERENCES public.places_farm(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_feature products_feature_farm_id_330bce0c_fk_places_farm_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_feature
    ADD CONSTRAINT products_feature_farm_id_330bce0c_fk_places_farm_id FOREIGN KEY (farm_id) REFERENCES public.places_farm(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_farm_id_76d1008e_fk_places_farm_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_farm_id_76d1008e_fk_places_farm_id FOREIGN KEY (farm_id) REFERENCES public.places_farm(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_profile users_profile_user_id_2112e78d_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_profile
    ADD CONSTRAINT users_profile_user_id_2112e78d_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

