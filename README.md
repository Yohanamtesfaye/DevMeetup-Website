# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Cloudflare Setup Instructions

### Prerequisites
1. Cloudflare account with Workers and D1 enabled
2. Wrangler CLI installed: `npm install -g wrangler`

### Setup Steps

1. **Create D1 Database**
```bash
# Login to Cloudflare
wrangler login

# Create D1 database
wrangler d1 create devmeetup_registrations

# Apply schema
wrangler d1 execute devmeetup_registrations --file=./workers/schema.sql
```

2. **Configure Wrangler**
- Copy the database ID from the creation command output
- Update `wrangler.toml` with your database ID
- Update the email configuration in `wrangler.toml`

3. **Deploy Worker**
```bash
wrangler deploy
```

4. **Update Frontend Configuration**
- Update the Worker endpoint URL in `src/pages/Register.jsx`
- Replace `https://api.yourdomain.workers.dev` with your actual Workers domain

### Environment Variables
Create a `.env` file with the following variables:
```
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
EMAIL_SENDER=devmeetup@yourdomain.com
```

### Testing
1. Deploy the worker: `wrangler deploy`
2. Test registration flow
3. Check D1 database for entries: `wrangler d1 execute devmeetup_registrations --command="SELECT * FROM registrations;"`

### Maintenance
- Monitor Worker usage in Cloudflare dashboard
- Regularly backup D1 database
- Check email delivery logs

## Custom Domain Setup

1. **Configure DNS Settings**
   - Add a new DNS record in your domain provider's dashboard:
     ```
     Type: CNAME
     Name: api
     Target: your-worker.your-subdomain.workers.dev
     Proxied: Yes
     ```

2. **Update Wrangler Configuration**
   - In `wrangler.toml`, update the custom domain configuration:
     ```toml
     [env.production.routes]
     pattern = "api.yourdomain.com"  # Replace with your domain
     custom_domain = true
     ```

3. **Deploy Worker**
   ```bash
   npm run wrangler:deploy
   ```

4. **Verify Setup**
   - Wait for DNS propagation (may take up to 24 hours)
   - Test the API endpoint: `https://api.yourdomain.com/registration`

### Environment Variables
Make sure to set these in your Cloudflare dashboard:
- `SENDER_EMAIL`: Your email sender address
