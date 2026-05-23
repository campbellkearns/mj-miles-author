# Deployment Guide

## Deploy to Netlify (Recommended)

Netlify is the recommended hosting platform for this site because it has built-in support for DecapCMS's Git Gateway.

### Step 1: Deploy to Netlify

#### Option A: Via Netlify CLI (Fastest)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

Follow the prompts to create a new site or link to an existing one.

#### Option B: Via Netlify Web UI

1. Push this repository to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 2: Enable Git Gateway & Identity

After your site is deployed:

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select "Invite only" (recommended)
4. Go to **Services** → **Git Gateway**
5. Click **Enable Git Gateway**

### Step 3: Invite Yourself as a User

1. Go to the **Identity** tab
2. Click **Invite users**
3. Enter your email address
4. Check your email for the invitation link
5. Set your password

### Step 4: Access the CMS

1. Go to `https://your-site-name.netlify.app/admin`
2. Click "Login with Netlify Identity"
3. Enter your credentials
4. Start managing your content!

## Deploy to Vercel (Alternative)

1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

**Note:** For DecapCMS on Vercel, you'll need to set up GitHub OAuth manually:
- Create a GitHub OAuth App
- Add credentials to DecapCMS config
- See [DecapCMS docs](https://decapcms.org/docs/authentication-backends/) for details

## Deploy to Other Platforms

This Astro site can deploy to any static hosting platform:
- **Cloudflare Pages**
- **GitHub Pages**
- **AWS Amplify**
- **Azure Static Web Apps**

Build command: `npm run build`  
Output directory: `dist`

For DecapCMS to work, you'll need to configure authentication separately on these platforms.

## Local Development with CMS

To test the CMS locally:

1. Uncomment this line in `public/admin/config.yml`:
```yaml
local_backend: true
```

2. Run the local backend server:
```bash
npx decap-server
```

3. In another terminal, run your dev server:
```bash
npm run dev
```

4. Access the CMS at `http://localhost:4321/admin`

## Updating Site Settings

After deployment, log into the CMS at `/admin` and:

1. Go to **Site Settings** → **General Settings**
2. Update the author name, bio, and photo
3. Add your social media links
4. Save and publish

All changes will be committed to your repository automatically!

## Customizing the Design

The homepage design can be customized by editing:
- Colors: Update CSS variables in `src/pages/index.astro` (lines 38-42)
- Layout: Modify the grid and card components
- Content: All content is managed through the CMS

## Support

For issues with:
- **Deployment**: Check Netlify/Vercel documentation
- **DecapCMS**: See [DecapCMS documentation](https://decapcms.org/docs/)
- **Astro**: See [Astro documentation](https://docs.astro.build/)
