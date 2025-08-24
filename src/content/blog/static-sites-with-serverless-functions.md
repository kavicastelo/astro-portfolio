---
title: "Progressively Enhancing Static Sites with Serverless Functions"
description: "Learn how to add dynamic features to your static Astro site using serverless functions — like form handling, email sending, or gated content — without a full backend."
date: 2025-08-24
tags: ["Astro", "Serverless Functions", "Static Sites", "Netlify", "Form Handling", "Progressive Enhancement", "API", "Cloud Functions", "JAMstack"]
author: "Kavi Castelo"
draft: false
---

### Introduction

Astro makes it easy to build fast, static-first websites. But what if you want to add dynamic behavior — like handling a contact form, submitting data, or authenticating users?

You don’t need a full backend. Instead, use **serverless functions** to progressively enhance your static site.

In this post, I’ll show how I’ve added serverless functionality to my Astro portfolio using **Netlify Functions** and **Vercel Edge Functions**.

---

### Example Use Case: Contact Form with Netlify

```html
<form name="contact" method="POST" data-netlify="true" class="space-y-4">
  <input type="text" name="name" placeholder="Your name" required />
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Bonus**: Add a honeypot to reduce spam:

```html
<input type="text" name="bot-field" hidden />
```

You don’t need JS — just Netlify’s form backend does the work.

---

### Dynamic Serverless Function (API)

Let’s say you want to send emails using a form (e.g., via SendGrid or Resend).

📁 `netlify/functions/contact.js`:

```js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const content = {
    to: "you@example.com",
    from: "no-reply@example.com",
    subject: `New message from ${name}`,
    text: `${message} — from ${email}`
  };

  try {
    await sgMail.send(content);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
```

✅ This lets you keep your site static but still accept contact submissions or run backend logic.

---

### Why Serverless + Astro Works So Well

- 🔒 Keep your frontend secure
- 🚀 Only run code *when needed*
- ⚡ Super low-latency (close to users)
- 🧱 Clean separation of concerns (UI & logic)
- 🧑‍💻 No need to maintain a full server

---

### Other Use Cases

- 💌 Email subscriptions
- 📦 JSON APIs
- 🔐 Auth with third-party OAuth
- 💾 Store/retrieve data from Firebase, Supabase, etc.
- 🧠 Use AI APIs (OpenAI, Replicate) in a static frontend

---

### Conclusion

Astro lets you build fast, minimal frontend experiences. With serverless functions, you unlock backend features without sacrificing performance or complexity.

It's the JAMstack at its best — static-first, dynamic when needed.
