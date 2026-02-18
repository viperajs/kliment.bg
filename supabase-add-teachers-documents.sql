-- ============================================
-- Run this in Supabase Dashboard → SQL Editor
-- Safe to re-run (idempotent)
-- ============================================

-- 1. Teachers Table
create table if not exists public.teachers (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    role text not null,
    email text,
    category text not null, -- 'management', 'teachers', 'support'
    image_url text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

alter table public.teachers enable row level security;

drop policy if exists "Public can read teachers" on public.teachers;
create policy "Public can read teachers"
    on public.teachers for select
    using (true);

drop policy if exists "Authenticated users manage teachers" on public.teachers;
create policy "Authenticated users manage teachers"
    on public.teachers for all
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

drop trigger if exists teachers_updated_at on public.teachers;
create trigger teachers_updated_at
    before update on public.teachers
    for each row execute function public.update_updated_at();


-- 2. Documents Table
create table if not exists public.documents (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    category text not null,
    file_url text not null,
    created_at timestamptz default now()
);

alter table public.documents enable row level security;

drop policy if exists "Public can read documents" on public.documents;
create policy "Public can read documents"
    on public.documents for select
    using (true);

drop policy if exists "Authenticated users manage documents" on public.documents;
create policy "Authenticated users manage documents"
    on public.documents for all
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');


-- 3. Messages Table (for contact form)
create table if not exists public.messages (
    id uuid default gen_random_uuid() primary key,
    first_name text not null,
    last_name text not null,
    email text not null,
    phone text,
    message text not null,
    status text default 'new' check (status in ('new', 'read', 'archived')),
    created_at timestamptz default now()
);

alter table public.messages enable row level security;

drop policy if exists "Authenticated users manage messages" on public.messages;
create policy "Authenticated users manage messages"
    on public.messages for all
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

drop policy if exists "Anyone can insert messages" on public.messages;
create policy "Anyone can insert messages"
    on public.messages for insert
    with check (true);


-- 4. Insert Team Members (skip if already inserted)
insert into public.teachers (name, role, email, category)
select * from (values
    ('Павлинка Антониева Шопова - Начкова', 'Директор', 'pavlinka.shopova-nachkova@edu.mon.bg', 'management'),
    ('Иван Филчев Филчев', 'Заместник-директор', 'ivan.fi.filchev@edu.mon.bg', 'management'),
    ('Айрие Нуреттин Пехливан', 'Начален учител', 'ayrie.pehlivan@edu.mon.bg', 'teachers'),
    ('Айлин Емин Павлова', 'Учител по Английски език', 'ailin.pavlova@edu.mon.bg', 'teachers'),
    ('Анастасия Викторова Мераклиева', 'Учител по Физика и Математика', 'anastasia.meraklieva@edu.mon.bg', 'teachers'),
    ('Аксиния Петкова Попова', 'Начален учител', 'aksinia.popova@edu.mon.bg', 'teachers'),
    ('Ваня Руменова Иванова', 'Учител по Български език', 'vanya.r.ivanova@edu.mon.bg', 'teachers'),
    ('Георги Иванов Шопов', 'Учител по Физическо възпитание и спорт', 'georgi.iv.shopov1@edu.mon.bg', 'teachers'),
    ('Гергана Веселинова Ангелчова', 'Учител по История и география', 'gergana.angelchova@edu.mon.bg', 'teachers'),
    ('Гинка Атанасова Григорова', 'Начален учител', 'ginka.grigorova@edu.mon.bg', 'teachers'),
    ('Дамяна Иванова Райкова-Янева', 'Учител ГЦОУД', 'damiana.raikova@edu.mon.bg', 'teachers'),
    ('Димка Николова Герджикова', 'Учител по Математика', 'dimka.gerdzhikova@edu.mon.bg', 'teachers'),
    ('Евгения Ангелова Дамянова', 'Учител ГЦОУД', 'evgenia.a.damianova@edu.mon.bg', 'teachers'),
    ('Елена Тодорова Гивечева-Михова', 'Педагогически съветник', 'elena.t.givecheva@edu.mon.bg', 'teachers'),
    ('Елена Николова Доркова', 'Учител ГЦОУД', 'elena.dorkova@edu.mon.bg', 'teachers'),
    ('Илиана Росенова Пейковска', 'Учител по Химия', 'iliana.peykovska@edu.mon.bg', 'teachers'),
    ('Йорданка Георгиева Филипова', 'Учител ГЦОУД', 'iordanka.filipova@edu.mon.bg', 'teachers'),
    ('Кристина Руменова Хаджиева', 'Учител ГЦОУД', 'kristina.hadzhieva@edu.mon.bg', 'teachers'),
    ('Маргарита Васкова Проданова', 'Учител ГЦОУД', 'margarita.prodanova@edu.mon.bg', 'teachers'),
    ('Мария Иванова Стоименова', 'Учител по Музика', 'maria.iv.stoimenova@edu.mon.bg', 'teachers'),
    ('Мария Михайлова Атанасова', 'Учител по Информационни технологии', 'maria.mi.atanasova@edu.mon.bg', 'teachers'),
    ('Милена Георгиева Балтаджиева', 'Учител по Изобразително изкуство', 'milena.baltadzhieva@edu.mon.bg', 'teachers'),
    ('Милен Николаев Бараков', 'Учител ГЦОУД', 'milen.ni.barakov@edu.mon.bg', 'teachers'),
    ('Нина Стоева Гемджиян', 'Начален учител', 'nina.gemdzhiian@edu.mon.bg', 'teachers'),
    ('Нели Илиева Славова', 'Учител по Български език', 'neli.il.slavova@edu.mon.bg', 'teachers'),
    ('Нина Пейчинова Михайлова', 'Начален учител', 'nina.pe.mihaylova@edu.mon.bg', 'teachers'),
    ('Петя Иванова Георгиева', 'Учител по Биология', 'petya.iv.georgieva1@edu.mon.bg', 'teachers'),
    ('Радка Лазарова Попова', 'Учител по Английски език', 'radka.ibisheva@edu.mon.bg', 'teachers'),
    ('Ружка Георгиева Вранчева', 'Учител по Физическо възпитание и спорт', 'ruzhka.vrancheva@edu.mon.bg', 'teachers'),
    ('Славка Стефанова Чанакчалиева', 'Учител по Информационни технологии', 'slavka.chanakchalieva@edu.mon.bg', 'teachers'),
    ('София Георгиева Якимова', 'Учител по Математика', 'sofia.yakimova@edu.mon.bg', 'teachers'),
    ('Стела Апостолова Христова', 'Учител по Английски език', 'stela.a.hristova@edu.mon.bg', 'teachers'),
    ('Христина Костадинова Хаджиева', 'Учител по История и география', 'hristina.hadzhieva@edu.mon.bg', 'teachers'),
    ('Цветка Павлова Петкова', 'Учител по Български език', 'tsvetka.petkova@edu.mon.bg', 'teachers'),
    ('Юсуф Ахмедов Мехмедов', 'Учител по Информационни технологии', 'yusuf.mehmedov@edu.mon.bg', 'teachers'),
    ('Цветана Стоянова Кънчева', 'Счетоводител', 'tsvetana.kancheva@edu.mon.bg', 'support'),
    ('Мария Петрова Цветанова', 'Завеждащ административна служба', 'mariia.pe.tsvetanova@edu.mon.bg', 'support'),
    ('Сузана Илианова Денисова', 'Домакин', 'suzana.denisova@edu.mon.bg', 'support'),
    ('Анка Атанасова Комбова', 'Хигиенист', 'anka.kombova@edu.mon.bg', 'support'),
    ('Даниела Димитрова Босева', 'Хигиенист', 'daniela.boseva@edu.mon.bg', 'support'),
    ('Нина Атанасова Атанасова', 'Хигиенист', 'nina.at.atanasova@edu.mon.bg', 'support'),
    ('Райна Петрова Гюзелева', 'Хигиенист', 'rayna.gyuzeleva@edu.mon.bg', 'support'),
    ('Сезгин Юсеинова Веиз', 'Хигиенист', 'sezgin.veiz@edu.mon.bg', 'support'),
    ('Димитър Йорданов Мантаров', 'Огняр', 'dimitar.io.mantarov@edu.mon.bg', 'support'),
    ('Ясен Левентов Билянов', 'Работник поддръжка', 'iasen.bilianov@edu.mon.bg', 'support')
) as v(name, role, email, category)
where not exists (select 1 from public.teachers limit 1);


-- ============================================
-- REMINDER: Storage Buckets
-- You must manually create these buckets in Supabase Storage:
-- 1. 'team-images' (Public: Yes)
-- 2. 'documents' (Public: Yes)
-- ============================================
