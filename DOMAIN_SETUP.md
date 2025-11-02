# Deploy cdartswebdev.com to GitHub Pages

## 🎯 Quick Setup Guide

Your site will be deployed to: **https://cdartswebdev.com**

---

## Step 1: Configure DNS (Your Domain Registrar)

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add these DNS records:

### Option A: Using Apex Domain (cdartswebdev.com)

Add these **A records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

### AND add a CNAME for www:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cdarts48.github.io | 3600 |

---

## Step 2: Enable GitHub Pages

1. Go to: https://github.com/CDarts48/cdartswebdev/settings/pages

2. Under **"Build and deployment"**:
   - Source: **GitHub Actions**

3. Under **"Custom domain"**:
   - Enter: `cdartswebdev.com`
   - Click **Save**
   - Wait for DNS check (may take a few minutes)
   - ✅ Check **"Enforce HTTPS"** (after DNS propagates)

---

## Step 3: Deploy

```bash
# Commit and push
git add .
git commit -m "Setup custom domain"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

---

## 🔍 Verify DNS Configuration

Check if DNS is configured correctly:

```bash
# Check A records
dig cdartswebdev.com +short

# Should show:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME
dig www.cdartswebdev.com +short

# Should show:
# cdarts48.github.io
```

Or use online tools:
- https://www.whatsmydns.net/
- https://dnschecker.org/

---

## ⏱️ DNS Propagation Time

- **Typical**: 5-30 minutes
- **Maximum**: Up to 48 hours

---

## 🎉 After DNS Propagates

1. Visit: **https://cdartswebdev.com**
2. Should automatically redirect to HTTPS
3. Your site is live!

---

## 📝 Example DNS Configuration

### GoDaddy:
1. Go to DNS Management
2. Add 4 A records pointing to GitHub's IPs
3. Add CNAME record for www

### Namecheap:
1. Go to Advanced DNS
2. Add 4 A records with @ as host
3. Add CNAME record with www as host

### Cloudflare:
1. Go to DNS settings
2. Add 4 A records
3. Add CNAME for www
4. Set proxy status to "DNS only" (gray cloud)

---

## 🔒 HTTPS / SSL

GitHub Pages provides **free SSL certificates** automatically!

After DNS propagates:
1. Go to Settings → Pages
2. Check **"Enforce HTTPS"**
3. Certificate provisions in ~15 minutes

---

## 🚨 Troubleshooting

### DNS not resolving?
```bash
# Clear local DNS cache (Mac)
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Test DNS
nslookup cdartswebdev.com
```

### GitHub says "DNS check unsuccessful"?
- Wait 10-15 minutes after adding DNS records
- Verify A records are correct
- Remove any old/conflicting records

### Site shows 404?
- Make sure CNAME file contains `cdartswebdev.com`
- Check GitHub Actions completed successfully
- Verify Pages is enabled in repo settings

### HTTPS not available?
- Wait for DNS to fully propagate
- Certificate can take 15-60 minutes to provision
- Try again later

---

## 🔄 Redeploy

Any time you push to `main` branch:
```bash
git push origin main
```

GitHub Actions automatically rebuilds and deploys your site!

---

## 💡 Pro Tips

1. **Always use `www` redirect**: Most users expect both `cdartswebdev.com` and `www.cdartswebdev.com` to work
2. **Enable HTTPS**: Free and automatic with GitHub Pages
3. **Check Actions tab**: Monitor deployments at https://github.com/CDarts48/cdartswebdev/actions
4. **Build time**: Usually 1-2 minutes

---

## 📊 Current Configuration

- **Domain**: cdartswebdev.com
- **Hosting**: GitHub Pages
- **Deployment**: Automatic via GitHub Actions
- **SSL**: Free Let's Encrypt certificate
- **Cost**: $0 (FREE!)

---

**Your site will be live at https://cdartswebdev.com after DNS propagates!** 🚀
