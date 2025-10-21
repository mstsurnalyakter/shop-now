# ShopNow - A simple eCommerce website

<!-- 17:23 -->

ShopNow is an open-source **Next.js eCommerce frontend** project.  
It provides a modern, fast and customizable shopping UI.  
This repo is **frontend only** – contributors can improve the design, add new pages, animations and more.

---

## Features

-   Built with **Next.js + Tailwind CSS**
-   Responsive design
-   Reusable components
-   Customizable layouts and colors
-   Open for contributions (UI/UX, animations, themes, layouts etc.)

---

## Getting Started

1. Clone the repo

    ```bash
    git clone https://github.com/mstsurnalyakter/shop-now.git
    cd ShopNow
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Run locally

    ```bash
    npm run dev
    ```

---

## Deploy to Vercel

This project is built with Next.js and is ready for Vercel.

1) Create environment variables in Vercel (Project → Settings → Environment Variables):

- `MONGODB_URI` – your MongoDB connection string
- `NEXT_PUBLIC_CURRENCY` – e.g., `USD`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` – from Clerk Dashboard
- `CLERK_SECRET_KEY` – from Clerk Dashboard
- Optional: `INNGEST_SIGNING_KEY` if you use Inngest Cloud

2) Deploy via GitHub (recommended)

- Push your changes to GitHub
- Import the repo at https://vercel.com/new
- Framework Preset: Next.js
- Keep defaults for build & output
- Deploy

3) Or deploy via Vercel CLI

```bash
npm i -g vercel
vercel
vercel env add MONGODB_URI
vercel env add NEXT_PUBLIC_CURRENCY
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
# Optional
# vercel env add INNGEST_SIGNING_KEY
vercel --prod
```

4) Clerk domain configuration

Add your Vercel domain(s) in Clerk Dashboard → Allowed origins/redirects.

5) Inngest (optional)

Expose `/api/inngest` and connect your app in Inngest dashboard. Create a Clerk event source (user.created/updated/deleted) pointing to Inngest.

---

## Contributing

We welcome all kinds of contributions! You can:

- Create new pages
- Improve layouts
- Add animations and transitions
- Enhance responsiveness
- Refactor components
- Suggest new UI/UX ideas
- Add themes or color variations
- Introduce accessibility improvements
- Add filtering/search features
- Improve documentation

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the **MIT License**.

---

## 🌟 Contributors

Thanks to everyone who contributes to **ShopNow**!# shop-now
