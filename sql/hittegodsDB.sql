--
-- PostgreSQL database dump
--

-- Dumped from database version 10.11
-- Dumped by pg_dump version 12.3

-- Started on 2020-07-22 14:55:17

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

--
-- TOC entry 207 (class 1259 OID 21759)
-- Name: category; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.category (
    categoryid integer NOT NULL,
    category character varying(20) NOT NULL
);


ALTER TABLE public.category OWNER TO hittegods;

--
-- TOC entry 206 (class 1259 OID 21757)
-- Name: category_categoryid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.category_categoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_categoryid_seq OWNER TO hittegods;

--
-- TOC entry 4357 (class 0 OID 0)
-- Dependencies: 206
-- Name: category_categoryid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.category_categoryid_seq OWNED BY public.category.categoryid;


--
-- TOC entry 201 (class 1259 OID 21708)
-- Name: color; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.color (
    colorid integer NOT NULL,
    color character varying(255) NOT NULL
);


ALTER TABLE public.color OWNER TO hittegods;

--
-- TOC entry 200 (class 1259 OID 21706)
-- Name: color_colorid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.color_colorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.color_colorid_seq OWNER TO hittegods;

--
-- TOC entry 4358 (class 0 OID 0)
-- Dependencies: 200
-- Name: color_colorid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.color_colorid_seq OWNED BY public.color.colorid;


--
-- TOC entry 223 (class 1259 OID 32797)
-- Name: confirmedmatch; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.confirmedmatch (
    confirmedmatchid integer NOT NULL,
    lostid integer,
    foundid integer
);


ALTER TABLE public.confirmedmatch OWNER TO hittegods;

--
-- TOC entry 222 (class 1259 OID 32795)
-- Name: confirmedmatch_confirmedmatchid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.confirmedmatch_confirmedmatchid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.confirmedmatch_confirmedmatchid_seq OWNER TO hittegods;

--
-- TOC entry 4359 (class 0 OID 0)
-- Dependencies: 222
-- Name: confirmedmatch_confirmedmatchid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.confirmedmatch_confirmedmatchid_seq OWNED BY public.confirmedmatch.confirmedmatchid;


--
-- TOC entry 219 (class 1259 OID 28657)
-- Name: found; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.found (
    foundid integer NOT NULL,
    nameonitem text,
    phonenumberonitem text,
    emailonitem text,
    description text,
    brand text,
    date date,
    lineid integer,
    colorid integer,
    catid integer,
    subcatid integer,
    statusid integer,
    findername text
);


ALTER TABLE public.found OWNER TO hittegods;

--
-- TOC entry 218 (class 1259 OID 28655)
-- Name: found_foundid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.found_foundid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.found_foundid_seq OWNER TO hittegods;

--
-- TOC entry 4360 (class 0 OID 0)
-- Dependencies: 218
-- Name: found_foundid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.found_foundid_seq OWNED BY public.found.foundid;


--
-- TOC entry 209 (class 1259 OID 21769)
-- Name: line; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.line (
    lineid integer NOT NULL,
    line character varying(20) NOT NULL,
    description text
);


ALTER TABLE public.line OWNER TO hittegods;

--
-- TOC entry 208 (class 1259 OID 21765)
-- Name: line_lineid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.line_lineid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.line_lineid_seq OWNER TO hittegods;

--
-- TOC entry 4361 (class 0 OID 0)
-- Dependencies: 208
-- Name: line_lineid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.line_lineid_seq OWNED BY public.line.lineid;


--
-- TOC entry 215 (class 1259 OID 21864)
-- Name: lost; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.lost (
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    description character varying(255) NOT NULL,
    brand character varying(20) NOT NULL,
    date date,
    lineid integer NOT NULL,
    colorid integer NOT NULL,
    subcatid integer NOT NULL,
    statusid integer NOT NULL,
    catid integer NOT NULL,
    lostid integer NOT NULL
);


ALTER TABLE public.lost OWNER TO hittegods;

--
-- TOC entry 214 (class 1259 OID 21862)
-- Name: lost_catid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_catid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_catid_seq OWNER TO hittegods;

--
-- TOC entry 4362 (class 0 OID 0)
-- Dependencies: 214
-- Name: lost_catid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_catid_seq OWNED BY public.lost.catid;


--
-- TOC entry 211 (class 1259 OID 21854)
-- Name: lost_colorid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_colorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_colorid_seq OWNER TO hittegods;

--
-- TOC entry 4363 (class 0 OID 0)
-- Dependencies: 211
-- Name: lost_colorid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_colorid_seq OWNED BY public.lost.colorid;


--
-- TOC entry 210 (class 1259 OID 21852)
-- Name: lost_lineid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_lineid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_lineid_seq OWNER TO hittegods;

--
-- TOC entry 4364 (class 0 OID 0)
-- Dependencies: 210
-- Name: lost_lineid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_lineid_seq OWNED BY public.lost.lineid;


--
-- TOC entry 217 (class 1259 OID 27827)
-- Name: lost_lostid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_lostid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_lostid_seq OWNER TO hittegods;

--
-- TOC entry 4365 (class 0 OID 0)
-- Dependencies: 217
-- Name: lost_lostid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_lostid_seq OWNED BY public.lost.lostid;


--
-- TOC entry 213 (class 1259 OID 21860)
-- Name: lost_statusid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_statusid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_statusid_seq OWNER TO hittegods;

--
-- TOC entry 4366 (class 0 OID 0)
-- Dependencies: 213
-- Name: lost_statusid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_statusid_seq OWNED BY public.lost.statusid;


--
-- TOC entry 212 (class 1259 OID 21858)
-- Name: lost_subcatid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.lost_subcatid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lost_subcatid_seq OWNER TO hittegods;

--
-- TOC entry 4367 (class 0 OID 0)
-- Dependencies: 212
-- Name: lost_subcatid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.lost_subcatid_seq OWNED BY public.lost.subcatid;


--
-- TOC entry 221 (class 1259 OID 32776)
-- Name: match; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.match (
    matchid integer NOT NULL,
    lostid integer NOT NULL,
    foundid integer NOT NULL,
    score numeric NOT NULL,
    new boolean NOT NULL
);


ALTER TABLE public.match OWNER TO hittegods;

--
-- TOC entry 220 (class 1259 OID 32774)
-- Name: match_matchid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.match_matchid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.match_matchid_seq OWNER TO hittegods;

--
-- TOC entry 4368 (class 0 OID 0)
-- Dependencies: 220
-- Name: match_matchid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.match_matchid_seq OWNED BY public.match.matchid;


--
-- TOC entry 216 (class 1259 OID 25226)
-- Name: session; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO hittegods;

--
-- TOC entry 205 (class 1259 OID 21726)
-- Name: status; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.status (
    statusid integer NOT NULL,
    status character varying(20) NOT NULL
);


ALTER TABLE public.status OWNER TO hittegods;

--
-- TOC entry 204 (class 1259 OID 21724)
-- Name: status_statusid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.status_statusid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.status_statusid_seq OWNER TO hittegods;

--
-- TOC entry 4369 (class 0 OID 0)
-- Dependencies: 204
-- Name: status_statusid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.status_statusid_seq OWNED BY public.status.statusid;


--
-- TOC entry 203 (class 1259 OID 21716)
-- Name: subcategory; Type: TABLE; Schema: public; Owner: hittegods
--

CREATE TABLE public.subcategory (
    subcategoryid integer NOT NULL,
    subcategory character varying(20) NOT NULL
);


ALTER TABLE public.subcategory OWNER TO hittegods;

--
-- TOC entry 202 (class 1259 OID 21714)
-- Name: subcategory_subcategoryid_seq; Type: SEQUENCE; Schema: public; Owner: hittegods
--

CREATE SEQUENCE public.subcategory_subcategoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subcategory_subcategoryid_seq OWNER TO hittegods;

--
-- TOC entry 4370 (class 0 OID 0)
-- Dependencies: 202
-- Name: subcategory_subcategoryid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hittegods
--

ALTER SEQUENCE public.subcategory_subcategoryid_seq OWNED BY public.subcategory.subcategoryid;


--
-- TOC entry 4153 (class 2604 OID 21762)
-- Name: category categoryid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.category ALTER COLUMN categoryid SET DEFAULT nextval('public.category_categoryid_seq'::regclass);


--
-- TOC entry 4150 (class 2604 OID 21711)
-- Name: color colorid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.color ALTER COLUMN colorid SET DEFAULT nextval('public.color_colorid_seq'::regclass);


--
-- TOC entry 4163 (class 2604 OID 32800)
-- Name: confirmedmatch confirmedmatchid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch ALTER COLUMN confirmedmatchid SET DEFAULT nextval('public.confirmedmatch_confirmedmatchid_seq'::regclass);


--
-- TOC entry 4161 (class 2604 OID 28660)
-- Name: found foundid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found ALTER COLUMN foundid SET DEFAULT nextval('public.found_foundid_seq'::regclass);


--
-- TOC entry 4154 (class 2604 OID 21772)
-- Name: line lineid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.line ALTER COLUMN lineid SET DEFAULT nextval('public.line_lineid_seq'::regclass);


--
-- TOC entry 4155 (class 2604 OID 21867)
-- Name: lost lineid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN lineid SET DEFAULT nextval('public.lost_lineid_seq'::regclass);


--
-- TOC entry 4156 (class 2604 OID 21868)
-- Name: lost colorid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN colorid SET DEFAULT nextval('public.lost_colorid_seq'::regclass);


--
-- TOC entry 4157 (class 2604 OID 21870)
-- Name: lost subcatid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN subcatid SET DEFAULT nextval('public.lost_subcatid_seq'::regclass);


--
-- TOC entry 4158 (class 2604 OID 21871)
-- Name: lost statusid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN statusid SET DEFAULT nextval('public.lost_statusid_seq'::regclass);


--
-- TOC entry 4159 (class 2604 OID 21872)
-- Name: lost catid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN catid SET DEFAULT nextval('public.lost_catid_seq'::regclass);


--
-- TOC entry 4160 (class 2604 OID 27829)
-- Name: lost lostid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost ALTER COLUMN lostid SET DEFAULT nextval('public.lost_lostid_seq'::regclass);


--
-- TOC entry 4162 (class 2604 OID 32779)
-- Name: match matchid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.match ALTER COLUMN matchid SET DEFAULT nextval('public.match_matchid_seq'::regclass);


--
-- TOC entry 4152 (class 2604 OID 21729)
-- Name: status statusid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.status ALTER COLUMN statusid SET DEFAULT nextval('public.status_statusid_seq'::regclass);


--
-- TOC entry 4151 (class 2604 OID 21719)
-- Name: subcategory subcategoryid; Type: DEFAULT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.subcategory ALTER COLUMN subcategoryid SET DEFAULT nextval('public.subcategory_subcategoryid_seq'::regclass);


--
-- TOC entry 4335 (class 0 OID 21759)
-- Dependencies: 207
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.category (categoryid, category) FROM stdin;
1	Klær
2	Personlige effekter
3	Elektronikk
4	Bagg, vesker og sekk
5	Annet
\.


--
-- TOC entry 4329 (class 0 OID 21708)
-- Dependencies: 201
-- Data for Name: color; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.color (colorid, color) FROM stdin;
1	blue
2	Rød
3	Gul
4	Grønn
5	Lilla
6	Blå
7	Oransj
8	Turkis
9	Svart
10	Hvit
11	Grå
12	Gull
13	Sølv
14	Annet
15	Rosa
16	Brun
17	
\.


--
-- TOC entry 4351 (class 0 OID 32797)
-- Dependencies: 223
-- Data for Name: confirmedmatch; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.confirmedmatch (confirmedmatchid, lostid, foundid) FROM stdin;
\.


--
-- TOC entry 4347 (class 0 OID 28657)
-- Dependencies: 219
-- Data for Name: found; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.found (foundid, nameonitem, phonenumberonitem, emailonitem, description, brand, date, lineid, colorid, catid, subcatid, statusid, findername) FROM stdin;
\.


--
-- TOC entry 4337 (class 0 OID 21769)
-- Dependencies: 209
-- Data for Name: line; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.line (lineid, line, description) FROM stdin;
409		\N
329	1	Ranheim - Strindheim - sentrum - Tiller - Heimdal - Kattem
330	2	Strindheim- Lade- sentrum- Lund
331	3	Lohove- Sentrum- Hallset
332	9	St. Olavs gate - Lian
333	10	Sæterbakken- Strindheim- Sentrum- Ratesvingen
334	11	Risvollan- Sentrum- Stavset
335	12	Dragvoll - Strindheim - sentrum - Øya / Marienborg
336	13	Strindheim- Lerkendal- Havstad
337	14	Lerkendal- Brundalen- Strindheim
338	15	Strindheim- E6- Nidarvoll- Tiller- Torgård
339	16	Flatåsen- Heimdal- Torgård
340	20	Grilstad - Strindheim - Ladehammeren- Sentrum - Romolslia
341	21	Pirbadet- Sentrum- Trolla
342	22	Vestlia- Othilienborg- Sentrum - Tyholt
343	23	Brattøra - St. Olavs- Hallset - Flatåsen - Sandmoen
344	24	City Syd- Kroppanmarka- Lerkendal
345	25	Vikåsen- Strindheim- Singsaker- Trondheim hurtigbåtterminalen 
346	26	Sentrum- Skistua
347	28	Ilsvika-Pirbadet via Singsaker
348	40	Flatåsen- Tonstad
349	41	Ranheim- Reppe
350	42	Buenget- Hallset- Munkvoll
351	43	Bergheim/Voll studentby- Blakli
352	44	Ranheim - Klokkerplassen - Værestrøa
353	45	Sjetnmarka- Tiller- Tillerringen- Sandmoen
354	46	Lundåsen- Lundåsen
355	50	Sverresborg - Byåsen - Flatåsen - Saupstadringen - Heimdal - Sandmoen
356	51	Sandmoen- Tillerringen- St. Olavs hospital
357	52	Saupstad- Kattem - Heimdal - Flatåsen - Byåsen - St. Olavs Hospital
358	53	Lundåsen- Heimdal- Saupstad- Flatåsen- Hallset- Ila- Sentrum- Sandmoen
359	54	Vikåsen/Ranheim- Lade- sentrum- Sluppen- Østre Rosten- Sandmoen
360	70	Stjørdal/Hommelvik- Strindheim/Trondheim sentrum
361	71	Brekkåsen- Melhus - Tiller- Trondheim sentrum- Solsiden
362	72	Tiller- Sandmoen- Klæbu
363	73	Tempe- Bostad- Klæbu
364	74	Tempe- Bratsberg- Flatjord
365	75	Trondheim S- Sentrum- Spongdal
366	76	Flakkråa- Klefstadbukta- Spongdal
367	77	Heimdal- Klett- Spongdal
368	78	Heimdal- Ringvål (-Spongdal)
369	79	Sluppen/Strindheim - Være - Vikhammeråsen
370	80	Jonsvatnet / Vikåsen - Lohove
371	81	Bratsberg- Nyjord- Bruråk
372	82	Melhus- Hesttrøa
373	83	Klæbu- Bjørkli/Tangen
374	85	Hommelvik- Sneisen
375	86	Hommelvik- Sveberg-Leistad- Vikhammer
376	88	Brekkåsen - Melhus
377	101	Nattbuss Byåsen/Flatåsen
378	102	Nattbuss Valentinlyst/Jakobsli
379	103	Nattbuss Kroppanmarka/Sjetnema
380	104	Nattbuss Kolstad/Heimstad
381	105	Nattbuss Buenget
382	106	Nattbuss Lade/Værestrøa
383	107	Nattbuss Reppe/Vikåsen/Fortuna
384	108	Nattbuss Stavset
385	109	Nattbuss Bjørndalen/Kattem/Lun
386	110	Nattbuss Trondheim- Melhus
387	111	Nattbuss Tiller
388	112	Nattbuss Nidarvoll/Klæbu
389	113	Nattbuss Moholt/Brøset
390	114	Nattbuss Sentrum - Spongdal
391	115	Nattbuss Othilienborg/Risvolla
392	116	Trondheim- Hommelvik- Stjørdal
393	201	Ranheim- Være- Vikåsen/Markaplassen skole
394	202	Olderdalen - Engstrømbakken
395	203	Muruvik- Hommelvik
396	204	Hommelvik skole- Sneisen
397	205	Storsand/Smiskaret- Hommelvik- Sveberg skole
398	206	Hommelvik- Sveberg
399	207	Vikhammer skole - Malvik - Vikhammer skole
400	208	Rye- Flakk- Rye skole / Spongdal skole
401	209	Spongdal- Hangeråsen- Rye- Spongdal skole
402	210	Fallet- Berg- Spongdal skole
403	211	Værestrøa- Vikåsen- Brundalen
404	212	Rye skole- Flakk/Hangeråsen- Rye- Langlo- Spongdal
405	214	Klæbu- Bjørkli- Ler
406	215	Lauglo/Fjøsvollan- Leinum- Nypantunet
407	216	Heimdal- Skjetlein
408	217	Flakk- Østre Lund
\.


--
-- TOC entry 4343 (class 0 OID 21864)
-- Dependencies: 215
-- Data for Name: lost; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.lost (name, email, phone, description, brand, date, lineid, colorid, subcatid, statusid, catid, lostid) FROM stdin;
\.


--
-- TOC entry 4349 (class 0 OID 32776)
-- Dependencies: 221
-- Data for Name: match; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.match (matchid, lostid, foundid, score, new) FROM stdin;
\.


--
-- TOC entry 4344 (class 0 OID 25226)
-- Dependencies: 216
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.session (sid, sess, expire) FROM stdin;
fDKNchAWNi9lfhnPlwypj3-L5gDkJDly	{"cookie":{"originalMaxAge":86400000,"expires":"2020-07-23T12:54:42.223Z","secure":false,"httpOnly":true,"path":"/"},"passport":{"user":{"given_name":"Test Hittegods","upn":"test.hittegods1@atb.no"}}}	2020-07-23 12:54:49
\.


--
-- TOC entry 4333 (class 0 OID 21726)
-- Dependencies: 205
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.status (statusid, status) FROM stdin;
7	Mistet
9	Funnet
10	Utlevert
11	På vei
12	Til utlevering
\.


--
-- TOC entry 4331 (class 0 OID 21716)
-- Dependencies: 203
-- Data for Name: subcategory; Type: TABLE DATA; Schema: public; Owner: hittegods
--

COPY public.subcategory (subcategoryid, subcategory) FROM stdin;
1	Briller
4	Nøkler
13	Annet
14	Overdeler
15	Hodeplagg
17	Sekk og Bag
18	Bagasje
19	Veske
20	Mobil
21	Ladere og kabler
22	PC og nettbrett
23	Bank og ID-kort
25	Lommebok
16	Hansker og votter
\.


--
-- TOC entry 4371 (class 0 OID 0)
-- Dependencies: 206
-- Name: category_categoryid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.category_categoryid_seq', 5, true);


--
-- TOC entry 4372 (class 0 OID 0)
-- Dependencies: 200
-- Name: color_colorid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.color_colorid_seq', 11, true);


--
-- TOC entry 4373 (class 0 OID 0)
-- Dependencies: 222
-- Name: confirmedmatch_confirmedmatchid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.confirmedmatch_confirmedmatchid_seq', 117, true);


--
-- TOC entry 4374 (class 0 OID 0)
-- Dependencies: 218
-- Name: found_foundid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.found_foundid_seq', 194, true);


--
-- TOC entry 4375 (class 0 OID 0)
-- Dependencies: 208
-- Name: line_lineid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.line_lineid_seq', 408, true);


--
-- TOC entry 4376 (class 0 OID 0)
-- Dependencies: 214
-- Name: lost_catid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_catid_seq', 1, true);


--
-- TOC entry 4377 (class 0 OID 0)
-- Dependencies: 211
-- Name: lost_colorid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_colorid_seq', 1, true);


--
-- TOC entry 4378 (class 0 OID 0)
-- Dependencies: 210
-- Name: lost_lineid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_lineid_seq', 1, true);


--
-- TOC entry 4379 (class 0 OID 0)
-- Dependencies: 217
-- Name: lost_lostid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_lostid_seq', 176, true);


--
-- TOC entry 4380 (class 0 OID 0)
-- Dependencies: 213
-- Name: lost_statusid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_statusid_seq', 1, true);


--
-- TOC entry 4381 (class 0 OID 0)
-- Dependencies: 212
-- Name: lost_subcatid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.lost_subcatid_seq', 1, true);


--
-- TOC entry 4382 (class 0 OID 0)
-- Dependencies: 220
-- Name: match_matchid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.match_matchid_seq', 646, true);


--
-- TOC entry 4383 (class 0 OID 0)
-- Dependencies: 204
-- Name: status_statusid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.status_statusid_seq', 10, true);


--
-- TOC entry 4384 (class 0 OID 0)
-- Dependencies: 202
-- Name: subcategory_subcategoryid_seq; Type: SEQUENCE SET; Schema: public; Owner: hittegods
--

SELECT pg_catalog.setval('public.subcategory_subcategoryid_seq', 25, true);


--
-- TOC entry 4171 (class 2606 OID 21764)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (categoryid);


--
-- TOC entry 4165 (class 2606 OID 21713)
-- Name: color color_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT color_pkey PRIMARY KEY (colorid);


--
-- TOC entry 4186 (class 2606 OID 33739)
-- Name: confirmedmatch confirmedmatch_foundid_key; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch
    ADD CONSTRAINT confirmedmatch_foundid_key UNIQUE (foundid);


--
-- TOC entry 4188 (class 2606 OID 33737)
-- Name: confirmedmatch confirmedmatch_lostid_key; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch
    ADD CONSTRAINT confirmedmatch_lostid_key UNIQUE (lostid);


--
-- TOC entry 4190 (class 2606 OID 32802)
-- Name: confirmedmatch confirmedmatch_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch
    ADD CONSTRAINT confirmedmatch_pkey PRIMARY KEY (confirmedmatchid);


--
-- TOC entry 4180 (class 2606 OID 28665)
-- Name: found found_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_pkey PRIMARY KEY (foundid);


--
-- TOC entry 4173 (class 2606 OID 21775)
-- Name: line line_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.line
    ADD CONSTRAINT line_pkey PRIMARY KEY (lineid);


--
-- TOC entry 4175 (class 2606 OID 27831)
-- Name: lost lost_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT lost_pkey PRIMARY KEY (lostid);


--
-- TOC entry 4182 (class 2606 OID 44920)
-- Name: match match_foundid_lostid_key; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT match_foundid_lostid_key UNIQUE (foundid, lostid);


--
-- TOC entry 4184 (class 2606 OID 32784)
-- Name: match match_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT match_pkey PRIMARY KEY (matchid);


--
-- TOC entry 4178 (class 2606 OID 25233)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- TOC entry 4169 (class 2606 OID 21731)
-- Name: status status_pkey1; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey1 PRIMARY KEY (statusid);


--
-- TOC entry 4167 (class 2606 OID 21721)
-- Name: subcategory subcategory_pkey; Type: CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.subcategory
    ADD CONSTRAINT subcategory_pkey PRIMARY KEY (subcategoryid);


--
-- TOC entry 4176 (class 1259 OID 25234)
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: hittegods
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- TOC entry 4195 (class 2606 OID 21904)
-- Name: lost catID; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT "catID" FOREIGN KEY (catid) REFERENCES public.category(categoryid) NOT VALID;


--
-- TOC entry 4192 (class 2606 OID 21884)
-- Name: lost colorID; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT "colorID" FOREIGN KEY (colorid) REFERENCES public.color(colorid) NOT VALID;


--
-- TOC entry 4204 (class 2606 OID 32808)
-- Name: confirmedmatch confirmedmatch_foundid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch
    ADD CONSTRAINT confirmedmatch_foundid_fkey FOREIGN KEY (foundid) REFERENCES public.found(foundid);


--
-- TOC entry 4203 (class 2606 OID 32803)
-- Name: confirmedmatch confirmedmatch_lostid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.confirmedmatch
    ADD CONSTRAINT confirmedmatch_lostid_fkey FOREIGN KEY (lostid) REFERENCES public.lost(lostid);


--
-- TOC entry 4198 (class 2606 OID 28676)
-- Name: found found_catid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_catid_fkey FOREIGN KEY (catid) REFERENCES public.category(categoryid);


--
-- TOC entry 4197 (class 2606 OID 28671)
-- Name: found found_colorid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_colorid_fkey FOREIGN KEY (colorid) REFERENCES public.color(colorid);


--
-- TOC entry 4196 (class 2606 OID 28666)
-- Name: found found_lineid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_lineid_fkey FOREIGN KEY (lineid) REFERENCES public.line(lineid);


--
-- TOC entry 4200 (class 2606 OID 28686)
-- Name: found found_statusid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_statusid_fkey FOREIGN KEY (statusid) REFERENCES public.status(statusid);


--
-- TOC entry 4199 (class 2606 OID 28681)
-- Name: found found_subcatid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.found
    ADD CONSTRAINT found_subcatid_fkey FOREIGN KEY (subcatid) REFERENCES public.subcategory(subcategoryid);


--
-- TOC entry 4191 (class 2606 OID 21879)
-- Name: lost lineID; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT "lineID" FOREIGN KEY (lineid) REFERENCES public.line(lineid) NOT VALID;


--
-- TOC entry 4202 (class 2606 OID 32790)
-- Name: match match_foundid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT match_foundid_fkey FOREIGN KEY (foundid) REFERENCES public.found(foundid);


--
-- TOC entry 4201 (class 2606 OID 32785)
-- Name: match match_lostid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT match_lostid_fkey FOREIGN KEY (lostid) REFERENCES public.lost(lostid);


--
-- TOC entry 4194 (class 2606 OID 21899)
-- Name: lost statusID; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT "statusID" FOREIGN KEY (statusid) REFERENCES public.status(statusid) NOT VALID;


--
-- TOC entry 4193 (class 2606 OID 21894)
-- Name: lost subcatID; Type: FK CONSTRAINT; Schema: public; Owner: hittegods
--

ALTER TABLE ONLY public.lost
    ADD CONSTRAINT "subcatID" FOREIGN KEY (subcatid) REFERENCES public.subcategory(subcategoryid) NOT VALID;


-- Completed on 2020-07-22 14:55:26

--
-- PostgreSQL database dump complete
--

