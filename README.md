# 🤖 Tiny Little Robots

A demo e-shop built with React, TypeScript and Vite. Browse and "buy" unique robotic companions, each with an interactive 3D model. Orders trigger a real email confirmation via EmailJS.

> ⚠️ **This is a demo project.** No real payments are processed. Google Pay runs in TEST mode. Your email is used solely to send a demo order confirmation and is not stored anywhere.

---

![Tiny Little Robots mockup](./public/screen-hero.png)

About
![Tiny Little Robots mockup](./public/about-screen.png)

## ✨ Features

- **3D product models** — interactive, rotatable via React Three Fiber
- **Shopping cart** — add, remove, and adjust quantities
- **Checkout modal** — with form validation and Google Pay (TEST mode)
- **Order confirmation email** — sent automatically via EmailJS
- **Contact form** — with honeypot spam protection
- **Parallax background** — via react-parallax
- **Smooth scroll navigation** — burger menu with section anchors
- **Cookie banner** — with Accept / Reject / Show More, persisted in localStorage
- **Lazy loading** — heavy components load on demand
- **Fully responsive**

---

Shop
![Tiny Little Robots mockup](./public/shop-screen.png)
![Tiny Little Robots mockup](./public/shopping-cart.png)
![Tiny Little Robots mockup](./public/order-summary.png)

Contacts
![Tiny Little Robots mockup](./public/mobile-contact-screen.png)

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| React 19 + TypeScript | UI & logic |
| Vite | Build tool |
| React Three Fiber + Drei | 3D models |
| Three.js | 3D rendering |
| EmailJS | Contact form & order emails |
| react-parallax | Parallax background |
| react-icons | Icon set |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```src/
├── components/
│   ├── models/        # Individual 3D model components
│   ├── About.tsx
│   ├── About.css
│   ├── CheckoutModal.tsx
│   ├── CheckoutModal.css
│   ├── ContactForm.tsx
│   ├── ContactForm.css
│   ├── Cookies.tsx
│   ├── Cookies.css
│   ├── Footer.tsx
│   ├── Footer.css
│   ├── Hero.tsx
│   ├── Hero.css
│   ├── Menu.tsx
│   ├── Menu.css
│   ├── Model.tsx
│   ├── Model.css
│   ├── Shop.tsx
│   ├── Shop.css
│   ├── ShopItem.tsx
│   ├── ShopItem.css
│   ├── ShopSearch.tsx
│   ├── ShopSearch.css
│   ├── ShoppingCart.tsx
│   └── ShoppingCart.css
├── data/
│   └── shopItems.ts   # Product catalogue
├── img/               # Product images & background
├── models/            # .glb 3D model files
├── App.tsx
└── main.tsx
```

---

## 📧 Email Setup

This project uses [EmailJS](https://www.emailjs.com/) for both the contact form and order confirmations. To run it with your own account, replace the following values in `ContactForm.tsx` and `CheckoutModal.tsx`:

Order confirmation
![Tiny Little Robots mockup](./public/order-confirmation.png)

```ts
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ..., 'YOUR_PUBLIC_KEY')
```

---

## 🍪 Cookies

This site uses essential cookies only — required for the contact form and demo shop to function. Your email is only used to send a demo order confirmation and is not stored or shared.

---

## 🎨 3D Models

All 3D models are sourced from [Sketchfab](https://sketchfab.com). Credits are linked in `shopItems.ts`.

![Tiny Little Robots mockup](./public/model-zoomed2.png)

---

## 📄 License

This project is for portfolio/demo purposes only.
