# Next.js 14 App Directory Crash Course – Codevolution

This project is a hands-on implementation of advanced Next.js 14 features, following the [Next.js 14 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) by [Codevolution](https://www.youtube.com/@Codevolution).  
It showcases the App Router, layouts, dynamic and nested routing, API routes, error boundaries, parallel and intercepting routes, and more.

---

## 📚 Tutorial Series

- **YouTube Playlist:** [Next.js 15 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)
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

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
src/
  app/
    (auth)/                # Authentication pages (login, register, forgot-password)
    about/                 # About page
    blog/                  # Blog section with nested routes
    components/            # Shared UI components
    products/              # Dynamic product pages with layouts
    users/                 # API routes for users
    users-client/          # Client-side user rendering
    users-server/          # Server-side user rendering with loading/error states
    ...
  middleware.ts            # Middleware for authentication, logging, etc.
  globals.css              # Global styles
```

---

## ✨ Features Demonstrated

- **App Directory Routing**: File-based routing with nested layouts and route groups
- **Dynamic & Nested Routes**: Flexible route patterns for scalable apps
- **API Routes**: REST endpoints using the app directory
- **Error Boundaries & Loading UI**: Custom error and loading states per route
- **Route Interception & Parallel Routes**: Advanced navigation patterns
- **Layouts & Templates**: Shared UI and persistent layouts
- **Client & Server Components**: SSR and client-side interactivity
- **Middleware**: Authentication, logging, and more
- **Modular CSS & Tailwind CSS**: Scoped and utility-first styling

---

## 📦 Dependencies

- Next.js 14
- React
- TypeScript
- Tailwind CSS (if included)
- Other dependencies as per the tutorial

---

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Codevolution YouTube Channel](https://www.youtube.com/@Codevolution)
- [YouTube Playlist](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

---

## 📝 License

This project is for educational purposes, based on the Codevolution tutorial series.