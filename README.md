# Ultra Betting App

This is a monorepo for the Ultra Betting App, a feature-rich sports betting web application.

## Structure

- `apps/web`: The user-facing Next.js application.
- `apps/admin`: The admin dashboard Next.js application.
- `packages/ui`: Shared UI components.
- `packages/hooks`: Shared React hooks.
- `packages/lib`: Shared libraries, including the Supabase client.
- `infra`: Infrastructure-as-code and deployment documentation.
- `scripts`: Utility scripts for seeding data, etc.

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials.
   - Copy `.env.admin.local.example` to `.env.admin.local` and fill in your Supabase credentials.

3. **Run the development servers:**
   ```bash
   pnpm dev
   ```

   This will start the `web` and `admin` apps on different ports.

## CI/CD

A basic CI pipeline is set up using GitHub Actions. It runs on every push and pull request to the `main` branch. See `.github/workflows/ci.yml` for details.
