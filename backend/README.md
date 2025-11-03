## Backend (Node.js/Express)

### Scripts

```
npm run dev       # start with nodemon (if configured)
npm start         # start production
```

### Routes

Mounted under `/api`:
- `/donors` – donor auth, profile, requests, support
- `/ngo` – NGO auth, pickup browsing, donation lifecycle, support
- `/admin` – admin auth, approvals, support moderation, NGO mgmt
- `/pickup` – donor pickup request creation

Health: `/api/health`

### Key Middleware

- `middlewares/authDonorMiddleware.js`
- `middlewares/authNgoMiddleware.js`
- `middlewares/authAdminMiddleware.js`

### Storage & Uploads

- Multer config: `utils/multerConfig.js`
- Supabase Storage uploads for `documentProof` and `foodImage`

### Email

- `utils/sendEmail.js` for OTP and reset emails (configure SMTP in `.env`)

### Models

See `docs/MODELS.md` for detailed schemas.


