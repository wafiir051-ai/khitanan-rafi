-- =====================================================================
--  Satu Supabase untuk beberapa undangan (pernikahan + khitanan)
--  Jalankan SEKALI di: Supabase → SQL Editor → New query → Run
--  Aman dijalankan ulang. Data lama otomatis jadi event 'wedding'.
-- =====================================================================

alter table public.rsvps  add column if not exists event text not null default 'wedding';
alter table public.guests add column if not exists event text not null default 'wedding';
create index if not exists rsvps_event_idx  on public.rsvps  (event, updated_at desc);
create index if not exists guests_event_idx on public.guests (event);

-- Undangan pernikahan (kode lama, tanpa parameter event) kini hanya melihat event 'wedding'
create or replace function public.list_messages(p_limit int default 10, p_offset int default 0)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object(
    'total', (select count(*) from public.rsvps where visible and message <> '' and event = 'wedding'),
    'items', coalesce((
      select json_agg(t) from (
        select id, name, attendance, message, updated_at as created_at
        from public.rsvps
        where visible and message <> '' and event = 'wedding'
        order by updated_at desc
        limit least(greatest(p_limit,1),50) offset greatest(p_offset,0)
      ) t), '[]'::json)
  );
$$;

-- Buku tamu per event (dipakai undangan khitanan: p_event = 'khitanan-rafi')
create or replace function public.list_messages_ev(p_event text, p_limit int default 10, p_offset int default 0)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object(
    'total', (select count(*) from public.rsvps where visible and message <> '' and event = p_event),
    'items', coalesce((
      select json_agg(t) from (
        select id, name, attendance, message, updated_at as created_at
        from public.rsvps
        where visible and message <> '' and event = p_event
        order by updated_at desc
        limit least(greatest(p_limit,1),50) offset greatest(p_offset,0)
      ) t), '[]'::json)
  );
$$;

-- Kirim RSVP per event: memakai submit_rsvp yang sudah ada, lalu menandai barisnya dengan event
create or replace function public.submit_rsvp_ev(
  p_event text, p_code text, p_name text, p_attendance text, p_pax int, p_message text)
returns json language plpgsql security definer set search_path = public as $$
declare r json;
begin
  if coalesce(p_event,'') = '' or p_event = 'wedding' then raise exception 'Event tidak valid'; end if;
  r := public.submit_rsvp(p_code := p_code, p_name := p_name, p_attendance := p_attendance,
                          p_pax := p_pax, p_message := p_message, p_versi := 'umum', p_acara := null);
  update public.rsvps set event = p_event where id = (r->>'id')::uuid;
  return r;
end $$;

revoke all on function public.list_messages_ev(text,int,int), public.submit_rsvp_ev(text,text,text,text,int,text) from public;
grant execute on function public.list_messages_ev(text,int,int), public.submit_rsvp_ev(text,text,text,text,int,text) to anon, authenticated;
