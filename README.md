# Next.js 14 App Directory Crash Course – Codevolution

This project is built by following the [Next.js 14 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) by [Codevolution](https://www.youtube.com/@Codevolution).  
It demonstrates advanced features of Next.js 14, including the App Router, layouts, routing patterns, API routes, error boundaries, intercepting routes, and more.

---

## 📚 Tutorial Series

- **YouTube Playlist:** [Next.js 14 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)
- **Channel:** [Codevolution](https://www.youtube.com/@Codevolution)

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
src/
  app/
    (auth)/                # Auth layouts, login, register, forgot-password
    about/                 # About page
    blog/                  # Blog with nested routes and loading UI
    comments/              # API routes for comments
    complex-dashboard/     # Parallel routes, intercepting routes, layouts
    dashboard/             # API route for dashboard
    docs/                  # Catch-all routes
    f1/, f2/, f3/, f4/     # Route groups, intercepting, parallel routes
    hello/                 # API route
    order-product/         # Dynamic route
    photo-feed/            # Modal routes, static assets
    products/              # Error boundaries, dynamic nested routes
    profile/               # API route for profile
    time/                  # API route
  components/              # Reusable UI components
  middleware.ts            # Middleware for authentication, logging, etc.
```

---

## ✨ Features Demonstrated

- **App Directory Routing**: File-based routing with nested layouts and templates
- **Dynamic & Catch-all Routes**: Flexible route patterns for complex apps
- **API Routes**: REST endpoints using the app directory
- **Error Boundaries & Loading UI**: Custom error and loading states per route
- **Route Interception & Parallel Routes**: Advanced navigation patterns
- **Layouts & Templates**: Shared UI and persistent layouts
- **Client & Server Components**: Mixing SSR and client-side interactivity
- **Middleware**: Authentication, logging, and more
- **Modular CSS & Tailwind CSS**: Scoped and utility-first styling

---

## 📦 Dependencies

- [Next.js 14](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (if included in the tutorial)
- Other dependencies as per tutorial steps

---

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Codevolution YouTube Channel](https://www.youtube.com/@Codevolution)
- [YouTube Playlist](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

---

## 📝 License

This project is for educational purposes, based on the Codevolution tutorial series.