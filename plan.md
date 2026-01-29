Based on the current project structure, which uses Vue 3 with Vuetify, Vue Router, and Vite for the frontend, and Node.js/Express/Mongoose/MongoDB for the backend (though we're deferring backend implementation until routing is settled), here's my proposed plan for structuring the application, focusing on the frontend routing and conditional page loading as per the requirements. This plan ensures the Header and Footer components remain always visible via the App.vue layout, while controlling access to pages based on login state (using placeholder logic for auth since we're not implementing it yet).

### Overall Application Structure
- **Frontend (Vue 3 App)**:
  - **Entry Point**: `src/main.js` – Mounts the App.vue with Vuetify and Router plugins.
  - **Root Layout (`src/App.vue`)**: Retain the current setup where `<Header />` is fixed at the top, `<router-view />` renders the current page in the middle, and `<Footer />` at the bottom. This ensures Header and Footer are always shown regardless of the route. No changes needed here for now, as it already supports this.
  - **Components Folder (`src/components/`)**: Keep existing components like Header.vue, Footer.vue, and others (e.g., HeroBanner.vue for landing). These can be imported into pages as needed.
  - **Pages Folder (`src/pages/`)**: Organize route-specific views here. Each page will be a self-contained Vue component that can import Vuetify components for UI (e.g., v-card, v-btn).
    - Public pages: Home.vue (landing), Login.vue, Signup.vue.
    - Protected pages: Profile.vue, BountyList.vue (bounty), ActiveIssue.vue (issue), PostNewIssue.vue (postnew).
  - **Assets and Styles**: Use `src/assets/` for images and `src/style.css` for global styles. Apply Vuetify's theme via `main.js`.
  - **Routing (`src/router.js`)**: Centralize all navigation logic here with Vue Router. We'll add navigation guards to enforce the login-based visibility without implementing actual auth logic (use a simple boolean flag or Pinia store placeholder for `isLoggedIn`).
  - **State Management**: For future auth, suggest using Pinia (add if not present) to manage `isLoggedIn` state globally. For now, hardcode it as `false` in guards for testing.
  - **Build Tool**: Vite handles bundling and dev server. No changes needed.

- **Backend (Node.js/Express)**:
  - Defer full implementation until frontend routing is settled.
  - Plan: Simple Express server in a separate `server/` folder (e.g., `server/app.js` for routes like `/api/auth/login`, `/api/profile`). Use Mongoose for MongoDB models later (e.g., User, Bounty, Issue schemas).
  - Vite proxy: Configure `vite.config.js` to proxy API calls to backend (e.g., `/api` -> `http://localhost:3000`).
  - For now: No backend routes; focus on frontend only. Once routing is done, we can stub API endpoints.

### Routing Plan
Update `src/router.js` to define routes and add guards for conditional loading:
- **Public Routes** (show only when logged out):
  - `/` → Home.vue (landing page). If logged in, redirect to `/profile`.
  - `/login` → Login.vue. If logged in, redirect to `/profile`.
  - `/signup` → Signup.vue. If logged in, redirect to `/profile`.
- **Protected Routes** (show only when logged in):
  - `/profile` → Profile.vue.
  - `/bounty` → BountyList.vue.
  - `/issue` → ActiveIssue.vue.
  - `/postnew` → PostNewIssue.vue. If not logged in, redirect to `/login`.
- **Navigation Guards** (in `router.js`):
  - Use `beforeEach` to check `isLoggedIn` (placeholder: `let isLoggedIn = false; // TODO: From Pinia store`).
    - For public routes (/, /login, /signup): If `isLoggedIn`, `next('/profile')`.
    - For protected routes: If `!isLoggedIn`, `next('/login')`.
  - This ensures pages are only "loaded and shown" based on state, without rendering unauthorized content.
- **Navigation in Header**: Update Header.vue to include Vuetify navigation drawer or menu with links (e.g., v-navigation-link). Conditionally show/hide links based on `isLoggedIn` (e.g., "Login" if out, "Profile" if in).

### Implementation Steps (High-Level, for Later in ACT Mode)
1. Update `router.js`: Add imports, routes array (as current, but group public/protected), and `beforeEach` guard with placeholder auth check.
2. Add Pinia store (if needed): `stores/auth.js` with `isLoggedIn` state.
3. Update pages: Ensure Home.vue is landing-only (e.g., hero banner). Protected pages can have placeholders like "User profile content".
4. Test routing: Run `npm run dev`, navigate manually, verify redirects (with hardcoded auth).
5. Once settled: Integrate backend auth (JWT tokens), then Mongoose/MongoDB models.

This plan keeps things modular, leverages existing files, and aligns with requirements. It avoids backend work until routing is finalized. Does this match your vision? Any changes, like adding more routes or specific UI details for pages? Once we're good, toggle to Act mode to implement.