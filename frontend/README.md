# Employee Task Tracker — Frontend 🔧

This is the React + Vite frontend for the Employee Task Tracker application.

It provides a small, focused UI for:
- Admin dashboard (manage users & tasks)
- Employee dashboard (view and update assigned tasks)
- Authentication (login)
- Task creation and listing components

---

## Quickstart ✅

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the development server:

```bash
npm run dev
# opens at http://localhost:5173 by default
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

---

## Backend dependency ⚠️

The frontend communicates with the backend API at `http://localhost:5000` by default (see `src/api/axios.js`). Make sure the backend + database are running before using the app.

Options to run the backend:
- Locally: open `./backend`, run `npm install` and `npm run dev`
- With Docker Compose (root of repo):

```bash
docker compose up --build
```

---

## Scripts & Useful Commands 🔍

- `npm run dev` — start dev server (Vite)
- `npm run build` — produce a production build
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint checks

---

## Notes & Conventions 💡

- API base URL is controlled in `src/api/axios.js` (defaults to `http://localhost:5000`). You can change it to `import.meta.env.VITE_API_URL` if you prefer environment-driven configuration.
- Auth token is stored in `localStorage` under the key `token` and is automatically attached to requests by an Axios interceptor.
- The main pages live under `src/pages` and reusable UI is in `src/components`.

---

## Contributing ✨

- Create feature branches from `main`
- Follow the existing code style and run `npm run lint` before opening a PR

---

## License

This project is provided under the project license in the repository root.

---

If you want, I can also:
- Add a section about environment variables and an example `.env` (with Vite examples)
- Update `src/api/axios.js` to use `VITE_API_URL` for configuration

Feel free to tell me which improvements you want next.