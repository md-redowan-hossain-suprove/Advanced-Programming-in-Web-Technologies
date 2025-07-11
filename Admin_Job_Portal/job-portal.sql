PGDMP  ,                    }         
   job_portal    17.4    17.4 0    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    32835 
   job_portal    DATABASE     p   CREATE DATABASE job_portal WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
    DROP DATABASE job_portal;
                     postgres    false            �            1259    32838    admin    TABLE     �   CREATE TABLE public.admin (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public.admin;
       public         heap r       postgres    false            �            1259    32837    admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public               postgres    false    218            �           0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public               postgres    false    217            �            1259    40961    company    TABLE     �   CREATE TABLE public.company (
    id integer NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    email character varying NOT NULL,
    "contactNumber" character varying NOT NULL
);
    DROP TABLE public.company;
       public         heap r       postgres    false            �            1259    40960    company_id_seq    SEQUENCE     �   CREATE SEQUENCE public.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.company_id_seq;
       public               postgres    false    224            �           0    0    company_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.company_id_seq OWNED BY public.company.id;
          public               postgres    false    223            �            1259    41023 
   complaints    TABLE     �   CREATE TABLE public.complaints (
    id integer NOT NULL,
    client_name character varying(255) NOT NULL,
    message text NOT NULL,
    reply text
);
    DROP TABLE public.complaints;
       public         heap r       postgres    false            �            1259    41022    complaints_id_seq    SEQUENCE     �   CREATE SEQUENCE public.complaints_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.complaints_id_seq;
       public               postgres    false    226            �           0    0    complaints_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.complaints_id_seq OWNED BY public.complaints.id;
          public               postgres    false    225            �            1259    32862    notice    TABLE     �   CREATE TABLE public.notice (
    id integer NOT NULL,
    title character varying NOT NULL,
    content character varying NOT NULL
);
    DROP TABLE public.notice;
       public         heap r       postgres    false            �            1259    32861    notice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.notice_id_seq;
       public               postgres    false    222            �           0    0    notice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.notice_id_seq OWNED BY public.notice.id;
          public               postgres    false    221            �            1259    41042    support_message    TABLE     �   CREATE TABLE public.support_message (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    message text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);
 #   DROP TABLE public.support_message;
       public         heap r       postgres    false            �            1259    41041    support_message_id_seq    SEQUENCE     �   CREATE SEQUENCE public.support_message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.support_message_id_seq;
       public               postgres    false    228            �           0    0    support_message_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.support_message_id_seq OWNED BY public.support_message.id;
          public               postgres    false    227            �            1259    32849    user    TABLE     L  CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    "cvStatus" character varying DEFAULT 'pending'::character varying NOT NULL,
    "vivaStatus" character varying DEFAULT 'not called'::character varying NOT NULL,
    "cvFilePath" character varying
);
    DROP TABLE public."user";
       public         heap r       postgres    false            �            1259    32848    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               postgres    false    220            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public               postgres    false    219            :           2604    32841    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            ?           2604    40964 
   company id    DEFAULT     h   ALTER TABLE ONLY public.company ALTER COLUMN id SET DEFAULT nextval('public.company_id_seq'::regclass);
 9   ALTER TABLE public.company ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            @           2604    41026    complaints id    DEFAULT     n   ALTER TABLE ONLY public.complaints ALTER COLUMN id SET DEFAULT nextval('public.complaints_id_seq'::regclass);
 <   ALTER TABLE public.complaints ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    226    225    226            >           2604    32865 	   notice id    DEFAULT     f   ALTER TABLE ONLY public.notice ALTER COLUMN id SET DEFAULT nextval('public.notice_id_seq'::regclass);
 8   ALTER TABLE public.notice ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            A           2604    41045    support_message id    DEFAULT     x   ALTER TABLE ONLY public.support_message ALTER COLUMN id SET DEFAULT nextval('public.support_message_id_seq'::regclass);
 A   ALTER TABLE public.support_message ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    227    228    228            ;           2604    32852    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �          0    32838    admin 
   TABLE DATA           4   COPY public.admin (id, email, password) FROM stdin;
    public               postgres    false    218   �4       �          0    40961    company 
   TABLE DATA           L   COPY public.company (id, name, address, email, "contactNumber") FROM stdin;
    public               postgres    false    224   .5       �          0    41023 
   complaints 
   TABLE DATA           E   COPY public.complaints (id, client_name, message, reply) FROM stdin;
    public               postgres    false    226   6       �          0    32862    notice 
   TABLE DATA           4   COPY public.notice (id, title, content) FROM stdin;
    public               postgres    false    222   �6       �          0    41042    support_message 
   TABLE DATA           P   COPY public.support_message (id, name, email, message, "createdAt") FROM stdin;
    public               postgres    false    228   7       �          0    32849    user 
   TABLE DATA           Y   COPY public."user" (id, name, email, "cvStatus", "vivaStatus", "cvFilePath") FROM stdin;
    public               postgres    false    220   %9       �           0    0    admin_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.admin_id_seq', 3, true);
          public               postgres    false    217            �           0    0    company_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.company_id_seq', 7, true);
          public               postgres    false    223            �           0    0    complaints_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.complaints_id_seq', 2, true);
          public               postgres    false    225            �           0    0    notice_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.notice_id_seq', 2, true);
          public               postgres    false    221                        0    0    support_message_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.support_message_id_seq', 12, true);
          public               postgres    false    227                       0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 12, true);
          public               postgres    false    219            N           2606    40968 &   company PK_056f7854a7afdba7cbd6d45fc20 
   CONSTRAINT     f   ALTER TABLE ONLY public.company
    ADD CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.company DROP CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20";
       public                 postgres    false    224            D           2606    32871 $   admin UQ_de87485f6489f5d0995f5841952 
   CONSTRAINT     b   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE (email);
 P   ALTER TABLE ONLY public.admin DROP CONSTRAINT "UQ_de87485f6489f5d0995f5841952";
       public                 postgres    false    218            H           2606    32873 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public                 postgres    false    220            F           2606    32845    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public                 postgres    false    218            P           2606    41030    complaints complaints_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.complaints
    ADD CONSTRAINT complaints_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.complaints DROP CONSTRAINT complaints_pkey;
       public                 postgres    false    226            L           2606    32869    notice notice_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.notice
    ADD CONSTRAINT notice_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.notice DROP CONSTRAINT notice_pkey;
       public                 postgres    false    222            R           2606    41050 $   support_message support_message_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.support_message
    ADD CONSTRAINT support_message_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.support_message DROP CONSTRAINT support_message_pkey;
       public                 postgres    false    228            J           2606    32858    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public                 postgres    false    220            �   t   x�3�LL���30vH�M���K���T1JR14P14,r44�*�7��7�qM�r��MuLrɉ�tu�HL*�Jr*�*,J�ʋt̋	�/�2�萕�T�_T�1�$fhdl����� �%�      �   �   x�U�1o�0F���^�I��]H�.W'`S�C���ob7���S�5�ё��TQ�Ot^���Z�E0��xB�f�F�U�?N�d�;��L!�2H�\�?]��珔,�E&�G����J�M�5l����rcG>��"3��o�g�y,�s��.ۦ�UY(�@7b������Ѣuo�x�^)�*��\�����(˪�Z|gB�?de�      �   c   x��A@0�����`�B$�6����4�.ܞؿWS�G@��:��x�Y�1�NN]���4�s��.��I�|4ʚK�(�+o���K��2WƘ�� D      �   s   x�E�1�0E����7� t�n]����]#��������0�Ix���SQM�%��`��[�/ۦx��)�U9�hZt=n8�	�'?�w�r�c�*��v<�3��`+�      �     x�}��R�0�ϛ�� c'1�\
-��-Cf襗�Z�
������+9� �S�{��������xc�p�/�X���4p��Y`��b'C�d���ce̓��"[g��Y�c�]��b9_/��z=[��4㮉��!?4�No���cӣu�����2���Nu^µ��@�l����wc:,�ގ=��5y�'&{������U��+�j���U��~�#�Q�ߔ���e�W��I�4��2[ϳ��W����)�.�A�I�酉�SY��j��Q�$�Z�;��^�n:����ڵ�A��ϴX��y/��`�t�V��K�8p��\��޳"�#��������>I�5.��?ii�@Zq��Vx�����7����6�5�Ѵ!a&&�|�W�(��S1�r�v�z�c�3J�W���g�˗�^��`R9"����L$���F?U�T���YY>s�����I��X}Fz��)f�ur�&����ǔ"���x����H�t{��>���V���?0����l6���zD      �     x����j�0������4��5PJpHM{(�F�Tv,�HJھ}e�
	��3�F�����%���L����r�*0Tw$@��ql?�������T�$�~<!����!���!��6���J�!*���>\	p�?��t�� q��H{�wz=:R�V��T��Zk�W�A��?�m���h$jd�h��l��qBl	����߉B.��}�hI���{kб=t�-G@s��h��W��u��u��$�����*�K7���_�Y��~!��     