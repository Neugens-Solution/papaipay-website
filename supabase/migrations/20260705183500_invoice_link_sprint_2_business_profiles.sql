create table if not exists public.files (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  business_profile_id uuid null,
  uploaded_by_user_id uuid not null references public.users(id),
  file_type text not null check (file_type in ('business_logo','payment_qr','payment_proof','pdf_backup_reference','other')),
  storage_provider text not null default 'supabase',
  storage_bucket text not null,
  storage_path text not null,
  original_filename text null,
  mime_type text not null,
  size_bytes integer not null,
  checksum text null,
  status text not null default 'active',
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone null
);

create table if not exists public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  profile_type text not null check (profile_type in ('individual','business')),
  display_name text not null,
  legal_name text null,
  business_registration_no text null,
  description text null,
  logo_file_id uuid null references public.files(id) on delete set null,
  phone text null,
  email text null,
  website text null,
  address_line_1 text null,
  address_line_2 text null,
  city text null,
  state text null,
  postcode text null,
  country text not null default 'Malaysia',
  normalized_display_name text not null,
  duplicate_business_name boolean not null default false,
  status text not null default 'active',
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone null
);

alter table public.files add constraint files_business_profile_id_fkey foreign key (business_profile_id) references public.business_profiles(id) on delete set null;

create table if not exists public.business_payment_profiles (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  business_profile_id uuid not null unique references public.business_profiles(id) on delete cascade,
  bank_name text null,
  account_holder_name text not null,
  account_number text null,
  payment_qr_file_id uuid null references public.files(id) on delete set null,
  payment_note text null,
  identity_status text not null default 'pending' check (identity_status in ('pending','valid','invalid')),
  identity_checked_at timestamp with time zone null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

create table if not exists public.business_document_settings (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  business_profile_id uuid not null unique references public.business_profiles(id) on delete cascade,
  quotation_prefix text not null default 'QT',
  invoice_prefix text not null default 'INV',
  receipt_prefix text not null default 'RCP',
  number_padding integer not null default 4,
  show_logo boolean not null default true,
  show_address boolean not null default true,
  show_phone boolean not null default true,
  show_email boolean not null default true,
  show_website boolean not null default true,
  show_due_date boolean not null default true,
  show_po_number boolean not null default true,
  show_quantity boolean not null default true,
  show_unit_price boolean not null default true,
  show_discount boolean not null default true,
  show_tax boolean not null default false,
  show_payment_qr boolean not null default true,
  show_bank_details boolean not null default true,
  default_notes text null,
  default_terms text null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

create index if not exists business_profiles_workspace_id_idx on public.business_profiles(workspace_id);
create index if not exists business_profiles_profile_type_idx on public.business_profiles(profile_type);
create index if not exists business_profiles_normalized_display_name_idx on public.business_profiles(normalized_display_name);
create index if not exists business_profiles_duplicate_business_name_idx on public.business_profiles(duplicate_business_name);
create index if not exists files_workspace_id_idx on public.files(workspace_id);
create index if not exists files_business_profile_id_idx on public.files(business_profile_id);
