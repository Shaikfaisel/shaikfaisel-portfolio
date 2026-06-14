# Portfolio Setup Instructions
## For: Shaik Faisel Ahmed

---

## YOUR FOLDER STRUCTURE

After unzipping, your folder should look exactly like this:

```
shaikfaisel_portfolio/
├── index.html              ← The webpage (HTML only)
├── styles.css              ← All colors and layout
├── main.js                 ← All interactive behaviour
├── photo.jpeg              ← Your profile photo
├── Shaik Faisel resume.pdf ← Your resume (for download button)
└── INSTRUCTIONS.md         ← This file
```

All 5 files must stay in the same folder. If you move one out, something will break.

---

## WHAT EACH FILE DOES

| File | What it controls |
|---|---|
| `index.html` | The page structure — sections, text, buttons |
| `styles.css` | Colors, fonts, spacing, dark/light mode |
| `main.js` | Animations, typing effect, contact form sending |
| `photo.jpeg` | Your profile photo (used in the hero card) |
| `Shaik Faisel resume.pdf` | Downloaded when someone clicks "Download Resume" |

---

## STEP 1 — SET UP THE CONTACT FORM (so you receive emails)

The contact form sends messages to your Gmail using a free service called **Formspree**.
This is a 3-minute setup. Do it once and it works forever.

### 1.1 Create a free Formspree account

1. Open your browser and go to: **https://formspree.io**
2. Click **"Get Started"**
3. Sign up using your email: **shaikfaisel129@gmail.com**
4. Verify your email (check your inbox for a verification link)

### 1.2 Create a form

1. After logging in, click **"+ New Form"**
2. Name it: **Portfolio Contact**
3. Click **"Create Form"**
4. You will see a page with your form endpoint — it looks like:
   ```
   https://formspree.io/f/xabc1234
   ```
5. **Copy that full URL**

### 1.3 Paste the endpoint into main.js

1. Open **main.js** in VS Code (or any text editor)
2. Find this line near the bottom (around line 130):
   ```javascript
   var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID_HERE';
   ```
3. Replace `YOUR_FORM_ID_HERE` with your actual endpoint, for example:
   ```javascript
   var FORMSPREE_ENDPOINT = 'https://formspree.io/f/xabc1234';
   ```
4. Save the file

### 1.4 Test it

1. Open your portfolio in a browser
2. Fill in the contact form and click "Send Message"
3. Check your Gmail — you should receive the message within seconds
4. The first time you submit, Formspree sends a confirmation email — click the link in it

**That's it. The contact form now works. Anyone who fills it will send you an email.**

---

## STEP 2 — VIEW YOUR PORTFOLIO LOCALLY

### Option A: Using VS Code (easiest)

1. Open VS Code
2. Go to **File → Open Folder** → select the `shaikfaisel_portfolio` folder
3. If you don't have Live Server installed:
   - Click the Extensions icon on the left sidebar
   - Search for **Live Server**
   - Install the one by **Ritwick Dey**
4. Right-click `index.html` in the file explorer → **"Open with Live Server"**
5. Your browser opens at: `http://127.0.0.1:5500`

### Option B: Just double-click (no install needed)

1. Open the `shaikfaisel_portfolio` folder
2. Double-click `index.html`
3. It opens in your default browser

Note: The contact form will NOT work when opened this way (needs a server).
Use Live Server or deploy online (Step 3) to test the form.

---

## STEP 3 — MAKE IT PUBLIC (shareable with anyone)

Your local link `http://127.0.0.1:5500` only works on your computer.
To share it with anyone — recruiters, friends, anyone — you need to deploy it online.

### BEST OPTION: Netlify (free, drag and drop, 2 minutes)

**This gives you a live public URL like: https://shaikfaisel.netlify.app**

1. Go to: **https://netlify.com**
2. Click **"Sign up"** → sign up with your Gmail
3. After logging in, you see a page with a big area that says "Drag and drop your site folder here"
4. Open File Explorer / Finder, find your `shaikfaisel_portfolio` folder
5. Drag the entire `shaikfaisel_portfolio` folder onto that Netlify page
6. Wait about 10 seconds
7. Netlify gives you a random URL like: `https://funny-name-123.netlify.app`
8. Your site is now LIVE. Share that link with anyone.

### Set a custom name (like shaikfaisel.netlify.app)

1. In Netlify, go to **Site Settings → General → Site Name**
2. Change it to: `shaikfaisel-portfolio`
3. Your site URL becomes: **https://shaikfaisel-portfolio.netlify.app**
4. Share this link with recruiters

---

## STEP 4 — CUSTOM DOMAIN (optional — for advanced users)

If you want `shaikfaisel.portfolio` as your domain:

1. Buy the domain from a registrar like **Namecheap** or **GoDaddy** (around ₹800–1500/year)
2. In Netlify → **Domain Settings → Add custom domain**
3. Type your domain name and follow the DNS setup instructions

This is optional. The free `.netlify.app` URL works perfectly for job applications.

---

## HOW TO EDIT YOUR CONTENT

### Change text content
Open `index.html` and use Ctrl+F to search for the text you want to change.

### Change colors
Open `styles.css` and look at the top section `:root { }`:
```css
--accent:  #2563EB;  /* change this for the main blue color */
--green:   #10B981;  /* change this for the green color */
```

### Change your photo
Replace the `photo.jpeg` file in the folder with your new photo.
Keep the filename exactly as `photo.jpeg`.

### Add a project
In `index.html`, find `<!-- Project 2: Voting System -->` and copy
the entire `<div class="project-card">` block below it. Edit the text inside.

### Update the resume
Replace the `Shaik Faisel resume.pdf` file with your updated resume.
Keep the filename exactly the same.

---

## TROUBLESHOOTING

**Photo not showing**
→ Check that the file is named exactly `photo.jpeg` (lowercase, .jpeg not .jpg)
→ The file must be inside the portfolio folder, not somewhere else

**Resume download not working**
→ Check that `Shaik Faisel resume.pdf` is in the same folder as index.html
→ If you renamed it, update the link in index.html: find `href="Shaik Faisel resume.pdf"`

**Contact form says "Something went wrong"**
→ You haven't replaced `YOUR_FORM_ID_HERE` in main.js yet (Step 1.3)
→ Double check that you pasted the full URL including `https://`

**Dark mode is stuck**
→ Click the moon/sun icon in the top right corner of the navbar

**Site looks broken on mobile**
→ This shouldn't happen — the site is responsive. Try clearing browser cache.

---

## SUMMARY (the 3 things you must do)

1. **Set up Formspree** (Step 1) — so emails reach your Gmail
2. **Deploy on Netlify** (Step 3) — so anyone can open your portfolio link
3. **Set a custom site name** on Netlify — like `shaikfaisel-portfolio.netlify.app`

Everything else is already done.
