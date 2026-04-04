# Wok

## Features

- Marketing landing page (`/`) with animated Terminal element
- Pricing page (`/pricing`) for static plan presentation
- Dashboard pages with CRUD operations on users/teams
- Basic RBAC with Owner and Member roles
- Email/password authentication with JWTs stored to cookies
- Global middleware to protect logged-in routes
- Local middleware to protect Server Actions or validate Zod schemas
- Activity logging system for any user events

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **UI Library**: shadcn/ui

## Getting Started

```bash
git clone <your-repo-url>
cd wok.inphormatik.com
pnpm install
```

## Bootstrap (Local Setup)

These steps get a full local environment running with the web app, database, and seeded data.

1. Create your `.env` file

You can copy the template or let the setup script generate it:

```bash
cp .env.example .env
# or
pnpm db:setup
```

2. Fill required environment variables

At minimum for local boot:

- `POSTGRES_URL`
- `AUTH_SECRET`

Common integrations used in this project:

- Clerk: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- PayPal: `NEXT_PUBLIC_PAYPAL_*`, `PAYPAL_*`
- Algolia: `NEXT_PUBLIC_ALGOLIA_*`, `ALGOLIA_ADMIN_API_KEY`
- Upstash Redis (if used): `WOK_STORAGE_*` (see `.env.example`)
- Turso (if used): `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`

3. Run migrations and seed demo data

```bash
pnpm db:migrate
pnpm db:seed
```

This creates the default user:

- User: `test@test.com`
- Password: `admin123`

4. Start the dev server

```bash
pnpm dev
```

Open http://localhost:3000

## Production

Deploy using your preferred provider, then set the same environment variables in the production environment.
