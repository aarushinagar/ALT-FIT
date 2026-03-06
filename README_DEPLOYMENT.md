# My Wardrobe AI - Complete Deployment Instructions

## 📋 What You Have

Your app includes:
- ✅ Beautiful, responsive UI with Tailwind CSS
- ✅ User authentication ready (via Clerk)
- ✅ Subscription pricing page
- ✅ Dashboard for logged-in users
- ✅ Wardrobe management interface
- ✅ Production-ready Next.js setup

## 🎯 Your Goal: Make It Live

We'll deploy your app to **Vercel** (the company behind Next.js) so it's live on the internet with a permanent URL.

---

## 📝 Step-by-Step Deployment

### STEP 1: Create GitHub Account & Repository

**Why?** Vercel needs your code on GitHub to deploy it.

1. Go to https://github.com/signup
2. Create a free account (takes 2 minutes)
3. Go to https://github.com/new
4. Fill in:
   - Repository name: `my-wardrobe-app`
   - Description: "AI-powered wardrobe and outfit recommendation app"
   - Choose "Public" (so Vercel can access it)
5. Click "Create repository"

### STEP 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd my-wardrobe-app

# Configure git (one time only)
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/my-wardrobe-app.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### STEP 3: Create Vercel Account

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. You're done!

### STEP 4: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your repository URL: `https://github.com/YOUR_USERNAME/my-wardrobe-app`
4. Click "Import"
5. On the next page, click "Deploy"
6. Wait 2-3 minutes for deployment to complete

**Your app is now live!** 🎉

Your URL will be: `https://my-wardrobe-app.vercel.app`

---

## 🔐 Optional: Add User Authentication (Recommended)

This allows users to sign up and log in.

### Create Clerk Account

1. Go to https://clerk.com/signup
2. Sign up with your email
3. Create a new application
4. Choose "Next.js" as your framework
5. Follow the setup wizard

### Get Your Clerk Keys

1. In Clerk dashboard, go to "API Keys"
2. Copy:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`)

### Add Keys to Vercel

1. Go to your Vercel project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add these variables:

| Variable Name | Value |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your publishable key |
| `CLERK_SECRET_KEY` | Your secret key |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | `/dashboard` |

5. Click "Save"
6. Go to "Deployments" tab
7. Click the latest deployment
8. Click "Redeploy"

**Now your app has user authentication!**

---

## 💳 Optional: Add Payments with Stripe

This enables the subscription pricing page.

### Create Stripe Account

1. Go to https://stripe.com/signup
2. Complete the signup process
3. Go to https://dashboard.stripe.com/apikeys
4. Copy your **Test** keys (for development):
   - **Publishable Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)

### Add Keys to Vercel

1. In Vercel, go to "Environment Variables"
2. Add:

| Variable Name | Value |
|---|---|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your test publishable key |
| `STRIPE_SECRET_KEY` | Your test secret key |

3. Save and redeploy

**Your pricing page is now connected to Stripe!**

---

## 🌐 Optional: Use a Custom Domain

Instead of `my-wardrobe-app.vercel.app`, use your own domain like `mywardrobe.app`.

### Buy a Domain

1. Go to any domain registrar:
   - https://namecheap.com
   - https://godaddy.com
   - https://domains.google.com
2. Search for your desired domain
3. Buy it (usually $10-15/year)

### Connect Domain to Vercel

1. In Vercel, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait 24-48 hours for DNS to propagate

**Your app is now on your custom domain!**

---

## ✅ Testing Your Deployment

### Test the App

1. Visit your Vercel URL
2. Click "Sign Up" (if you set up Clerk)
3. Create an account
4. Explore the dashboard
5. Check the pricing page

### Test Stripe (if set up)

Use Stripe's test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

---

## 🔄 Making Updates

After you make changes to your code:

```bash
# Make your changes in the code

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Vercel automatically redeploys!
```

Vercel will automatically redeploy your app when you push to GitHub.

---

## 📊 Monitoring Your App

### Vercel Analytics

1. In Vercel dashboard, click "Analytics"
2. View:
   - Page views
   - Response times
   - Error rates

### Clerk Analytics

1. In Clerk dashboard, click "Analytics"
2. View:
   - User signups
   - Active users
   - Login methods

### Stripe Dashboard

1. In Stripe dashboard, view:
   - Transactions
   - Customers
   - Revenue

---

## 🐛 Troubleshooting

### "Build failed" Error

**Solution:**
1. Check Vercel logs for the exact error
2. Make sure all environment variables are set
3. Try redeploying

### Sign-in/Sign-up Not Working

**Solution:**
1. Verify Clerk keys are correct
2. Check that URLs are set in environment variables
3. Redeploy the app

### Stripe Not Working

**Solution:**
1. Make sure you're using TEST keys (not live keys)
2. Verify keys are in environment variables
3. Use Stripe test card: `4242 4242 4242 4242`

### Domain Not Working

**Solution:**
1. Wait 24-48 hours for DNS to propagate
2. Check DNS settings in your domain registrar
3. Verify domain is added in Vercel

---

## 📚 Useful Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Clerk Docs**: https://clerk.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎉 Congratulations!

Your app is now live on the internet! 

**What's next?**

1. Share your URL with friends
2. Customize the branding and colors
3. Add more features (wardrobe upload, AI recommendations, etc.)
4. Connect a custom domain
5. Switch to Stripe live keys when ready to accept real payments

---

## 💡 Pro Tips

1. **Keep your secrets safe**: Never commit `.env.local` to GitHub
2. **Use environment variables**: Store all sensitive data in Vercel
3. **Monitor your app**: Check Vercel analytics regularly
4. **Test before deploying**: Test locally with `pnpm dev`
5. **Use version control**: Always commit meaningful messages

---

**Your app is ready to scale! 🚀**

For support, visit the documentation links above or contact the respective platforms' support teams.
