## Frontend (React + Vite)

### Scripts

```
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview build
```

### Routing (src/App.jsx)

Donor routes (protected by `DonorProtectedWrapper`):
- `/donor-dashboard` (index: dashboard content)
- `/donor-dashboard/request-pickup`
- `/donor-dashboard/status`
- `/donor-dashboard/status/:requestId`
- `/donor-dashboard/donation-history`
- `/donor-profile`
- `/donor-support`
- `/donor-previous-supports`

NGO routes (protected by `NgoProtectedWrapper`):
- `/ngo-dashboard` (index: dashboard content)
- `/ngo-dashboard/browse-pickup`
- `/ngo-dashboard/active-requests`
- `/ngo-dashboard/donation/:requestId`
- `/ngo-dashboard/donation-history`
- `/ngo-profile`
- `/ngo-support`
- `/ngo-previous-supports`

Admin routes (protected by `AdminProtectedWrapper`):
- `/admin-dashboard` (index: dashboard content)
- `/pending-ngos` (index: list)
- `/pending-ngos/:ngoId` (detail)
- `/admin-support`

Public routes:
- `/` (home)
- `/donor-register`, `/donor-login`, `/donor-forgot-password`, `/donor-logout`
- `/ngo-register`, `/ngo-login`, `/ngo-forgot-password`, `/ngo-logout`
- `/admin-login`, `/admin-logout`

### Auth

- Auth tokens are stored in `localStorage` under `token`.
- Protected wrappers redirect to the role’s login route if token is missing.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
