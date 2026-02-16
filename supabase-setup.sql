-- ============================================
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================

-- 1. News Table
create table if not exists public.news (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text not null unique,
    excerpt text,
    content text,
    image_url text,
    published boolean default false,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Enable RLS
alter table public.news enable row level security;

-- Public can read published news
create policy "Public can read published news"
    on public.news for select
    using (published = true);

-- Authenticated users can do everything
create policy "Authenticated users full access"
    on public.news for all
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

-- Auto-update updated_at
create or replace function public.update_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger news_updated_at
    before update on public.news
    for each row execute function public.update_updated_at();

-- 2. Settings Table
create table if not exists public.settings (
    key text primary key,
    value text not null,
    updated_at timestamptz default now()
);

alter table public.settings enable row level security;

create policy "Public can read settings"
    on public.settings for select
    using (true);

create policy "Authenticated users can manage settings"
    on public.settings for all
    using (auth.role() = 'authenticated')
    with check (auth.role() = 'authenticated');

create trigger settings_updated_at
    before update on public.settings
    for each row execute function public.update_updated_at();

-- 3. Insert default settings
insert into public.settings (key, value) values
    ('school_name', 'СУ "Св. Климент Охридски" - гр. Пещера'),
    ('school_phone', '0350 6-23-46'),
    ('school_email', 'su_kliment_ohridski@abv.bg'),
    ('school_address', 'ул. „Михаил Такев" 2, 4550 Пещера')
on conflict (key) do nothing;

-- ============================================
-- Storage: Create bucket 'news-images' manually
-- in Supabase Dashboard → Storage → New bucket
-- Name: news-images
-- Public: Yes
-- ============================================
