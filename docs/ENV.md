## Environment & Setup

Create a `.env` file in `backend/` with:

```
PORT=5000

# Mongo
MONGO_URI=mongodb://localhost:27017/mm

# JWT
JWT_SECRET=replace-with-strong-secret

# Supabase (Storage)
SUPABASE_URL=https://<your-project>.supabase.co
SUPABASE_ANON_KEY=<public-anon-or-service-key>
SUPABASE_BUCKET=<bucket-name>

# Email (used by utils/sendEmail.js)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
SMTP_FROM="MM App <no-reply@example.com>"
```

### Install & Run

```
cd backend
npm install
npm run dev

cd ../frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:5000`.

### CORS

Backend CORS is configured for `http://localhost:5173`. Update in `backend/server.js` if needed.


