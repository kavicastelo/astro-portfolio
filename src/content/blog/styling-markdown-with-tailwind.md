---
title: "Styling Markdown Content with Tailwind & Astro’s Prose Utilities"
description: "Learn how to turn raw Markdown content into beautifully styled blog posts using Tailwind’s typography plugin and Astro’s prose classes."
date: 2025-08-24
tags: ["Astro", "TailwindCSS", "Markdown", "Blog Styling", "Typography", "Prose", "Web Design", "Dark Mode", "Astro Markdown"]
author: "Kavi Castelo"
draft: false
---

### Introduction

Astro makes writing content with Markdown easy. But raw HTML generated from Markdown can look… plain.

To improve readability and aesthetics, I use Tailwind CSS’s `@tailwindcss/typography` plugin — which powers the `prose` class.

Let me show you how to use it to instantly upgrade your blog’s look.

---

### 1. Install the Plugin

First, install the plugin:

```bash
npm install @tailwindcss/typography
```

Then enable it in `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{astro,js,ts,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
```

---

### 2. Wrap Your Markdown in a `prose` Container

In your blog post layout:

```astro
<article class="prose prose-invert max-w-3xl mx-auto">
  <slot />
</article>
```

If you're using `.md` or `.mdx` files with a layout, Astro will inject the Markdown content into the slot.

✅ Boom. Clean spacing, font sizes, and structure — automatically.

---

### 3. Supporting Dark Mode

If you’re using `dark` mode, use `prose-invert`:

```html
<article class="prose prose-invert dark:prose-invert">
```

This ensures text colors adapt correctly.

---

### 4. Customizing Typography

Tailwind allows deep customization of prose styles:

```
theme: {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          color: '#ccc',
          h1: { fontWeight: '700' },
          a: { color: '#0ea5e9', textDecoration: 'none' },
        },
      },
    },
  },
}
```

You can even define a `dark` typography theme separately.

---

### 5. Styling Code Blocks

Markdown code blocks can look rough.

Add this to `tailwind.config.js` or via a custom class:

```css
/* global.css */
.prose pre {
  background-color: #1e1e1e;
  padding: 1em;
  border-radius: 0.5rem;
  overflow-x: auto;
}
```

Want syntax highlighting? Use `shiki`, `prism`, or `rehype-highlight` in your Astro Markdown config.

---

### Conclusion

Combining Markdown + Tailwind’s typography plugin gives you fast, content-driven sites that **look beautiful out of the box**.

I use this stack in all my blog posts — it's minimal, customizable, and fully responsive.

> ✨ Pro tip: You can even style dynamic content like FAQs with `prose-invert`.
