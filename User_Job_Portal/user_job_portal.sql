PGDMP  
                    }            user_job_portal    17.4    17.4 "    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    32916    user_job_portal    DATABASE     u   CREATE DATABASE user_job_portal WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
    DROP DATABASE user_job_portal;
                     postgres    false            �            1259    32938    application    TABLE     �   CREATE TABLE public.application (
    id integer NOT NULL,
    "jobId" integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying NOT NULL,
    cv character varying NOT NULL
);
    DROP TABLE public.application;
       public         heap r       postgres    false            �            1259    32937    application_id_seq    SEQUENCE     �   CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.application_id_seq;
       public               postgres    false    220            �           0    0    application_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;
          public               postgres    false    219            �            1259    40970    contact    TABLE     �   CREATE TABLE public.contact (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    "phoneNumber" character varying NOT NULL,
    message character varying NOT NULL
);
    DROP TABLE public.contact;
       public         heap r       postgres    false            �            1259    40969    contact_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.contact_id_seq;
       public               postgres    false    222            �           0    0    contact_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;
          public               postgres    false    221            �            1259    32929    job    TABLE     �   CREATE TABLE public.job (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    salary integer NOT NULL,
    type character varying NOT NULL
);
    DROP TABLE public.job;
       public         heap r       postgres    false            �            1259    32928 
   job_id_seq    SEQUENCE     �   CREATE SEQUENCE public.job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.job_id_seq;
       public               postgres    false    218            �           0    0 
   job_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.job_id_seq OWNED BY public.job.id;
          public               postgres    false    217            �            1259    41008    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    41011    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    223            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    224            1           2604    32941    application id    DEFAULT     p   ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);
 =   ALTER TABLE public.application ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            2           2604    40973 
   contact id    DEFAULT     h   ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);
 9   ALTER TABLE public.contact ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221    222            0           2604    32932    job id    DEFAULT     `   ALTER TABLE ONLY public.job ALTER COLUMN id SET DEFAULT nextval('public.job_id_seq'::regclass);
 5   ALTER TABLE public.job ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            3           2604    41012    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223            �          0    32938    application 
   TABLE DATA           J   COPY public.application (id, "jobId", name, email, phone, cv) FROM stdin;
    public               postgres    false    220   b%       �          0    40970    contact 
   TABLE DATA           J   COPY public.contact (id, name, email, "phoneNumber", message) FROM stdin;
    public               postgres    false    222   �%       �          0    32929    job 
   TABLE DATA           B   COPY public.job (id, name, description, salary, type) FROM stdin;
    public               postgres    false    218   �&       �          0    41008    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public               postgres    false    223   ='       �           0    0    application_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.application_id_seq', 1, true);
          public               postgres    false    219            �           0    0    contact_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.contact_id_seq', 3, true);
          public               postgres    false    221            �           0    0 
   job_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.job_id_seq', 3, true);
          public               postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public               postgres    false    224            9           2606    40977 &   contact PK_2cbbe00f59ab6b3bb5b8d19f989 
   CONSTRAINT     f   ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.contact DROP CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989";
       public                 postgres    false    222            ;           2606    41017 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public                 postgres    false    223            =           2606    41021 $   users UQ_97672ac88f789774dd47f7c8be3 
   CONSTRAINT     b   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3";
       public                 postgres    false    223            7           2606    32945    application application_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.application DROP CONSTRAINT application_pkey;
       public                 postgres    false    220            5           2606    32936    job job_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.job
    ADD CONSTRAINT job_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.job DROP CONSTRAINT job_pkey;
       public                 postgres    false    218            >           2606    32953 *   application FK_dbc0341504212f830211b69ba0c    FK CONSTRAINT     �   ALTER TABLE ONLY public.application
    ADD CONSTRAINT "FK_dbc0341504212f830211b69ba0c" FOREIGN KEY ("jobId") REFERENCES public.job(id);
 V   ALTER TABLE ONLY public.application DROP CONSTRAINT "FK_dbc0341504212f830211b69ba0c";
       public               postgres    false    220    4661    218            �   }   x�-�K
�0 �ur
/�0S[lvtQ�t)�0D��@~�Q<�.�=x(P��M�_!'�7B�Dヺ�( u�t�(p��F�P��a�O�L����'Ru��?%�հω�B���ت2/򪤔_8<&�      �   �   x���;�0��)��@
](�DEK�NV�`'���>Oz���p���\��8�F��YNk ���F��n�9e�+⾖����M�����:���)�x������{�5T�����?wJ{�5����C
!~��L      �   �   x�Uλ�0�9�
� 3��n���6��H�*qA�=)��W>�NT<��-�����Z��8P���L,V8V���8�
�z!=Uk�n��&
��PD����X,1R���MxE����{��$I�ז))�������T~�̧�M�6��Yk�%�Z� SoF�      �   �   x�e�;�0  й=�ski��	"!�� D�§`֢��� �<�eE��,ŀ�Qì�5δ��.�IQUޛ�Ň�o�T|0�
c$�2Y/r�ˠ	����֢���*�g�uie��+�dڌ�h�1�=g�.�zX�����GE��Z	xG��5$     