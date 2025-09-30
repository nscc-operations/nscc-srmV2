# NSCC SRM Official Website – Hacktoberfest Contributions 🎉

Welcome to the **NSCC SRM Official Website Repository** built with **React** ⚛️.  
We’re thrilled you’re here to contribute for **Hacktoberfest 2025** 🍂. Please go through the guidelines below to make your contribution smooth and impactful.

---

## 📌 Getting Started

1. **Fork the Repository**

   - Click on the **Fork** button to create your own copy.

2. **Clone Your Fork Locally**

   ```
   git clone https://github.com/NSCC-SRM/nscc-srmV2.git
   cd nscc-srmV2
   ```

3. **Install Dependencies**

   - Ensure you have **Node.js (>=18)** and **npm/yarn/pnpm/bun** installed.

   ```
   npm install
   # or
   bun install
   ```

4. **Run the Development Server**
   ```
   npm run dev
   # or
   bun run dev
   ```
   - The site should be live at `http://localhost:5173`.
   - Make sure your changes render properly before committing.

---

## 🌱 Contribution Workflow

1. **Create a New Branch**

   ```
   git checkout -b initials/type-of-change/your-feature-name
   ```

2. **Make Code Changes**

   - Work mainly in the `src/` directory (components, styles, assets).
   - If you change **UI elements**, take **before & after screenshots/GIFs**.
   - Follow project coding conventions and file structure.

3. **Lint and Format Code**

   ```
   npm run lint
   npm run format
   ```

4. **Commit Your Changes**

   ```
   git add .
   git commit -m "feat: added navbar dropdown for events"
   ```

5. **Push to Your Branch**

   ```
   git push origin initials/type-of-change/your-feature-name
   ```

6. **Open a Pull Request (PR)**
   - From your fork, click **Compare & Pull Request**.
   - In the PR description:
     - Explain what you changed.
     - Attach **before & after images/GIFs** for UI changes.
     - Add the label in the PR depending on the type of change.
     - Tag `@Aakarsh-Kumar` and `@Punit173` for review.

---

## ✅ PR Review Process

- Each PR will be reviewed for **code quality, responsiveness, and design consistency**.
- Requested changes (if any) should be addressed quickly.
- Once approved, your changes will be **merged** 🎉.

---

## ⚡ Hacktoberfest Rules

- Only meaningful contributions count. Avoid PRs with:
  - Minor text changes with no value
  - Unrelated files or spammy commits
- PRs not following guidelines may be marked as **invalid**.

---

## 🏆 Contribution Tips for React

- Keep components **small, reusable, and modular**.
- Use **functional components** with hooks (no class components unless necessary).
- Maintain consistent **CSS/SCSS/Tailwind** styling (as per project setup).
- Make sure changes are **responsive** (test on mobile + desktop).

---
