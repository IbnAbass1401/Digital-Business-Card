# Digital Business Card

A clean, mobile-friendly digital business card built with **React**. It puts a profile photo, a short intro, contact buttons, an About section, interests, and social links into one shareable page.

This is my solo project from the **Scrimba React course**. I built it locally with VS Code, Vite, and GitHub to practise a real development workflow.

## Features

- Profile photo with name, job title, and location
- Contact buttons for **Email** and **LinkedIn** with icons
- **About** section
- **Interests** list rendered from an array
- Footer with social media icon links
- Layout sized for phone screens

## Built With

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS
- ESLint

## Project Structure

```
src/
├── assets/
│   └── profile-pics.jpeg
├── App.jsx
├── intro.jsx
├── contact.jsx
├── about.jsx
├── interests.jsx
├── footer.jsx
├── main.jsx
└── index.css
```

Each part of the card is its own React component, and `App.jsx` puts them together.

## Getting Started

You need [Node.js](https://nodejs.org/) installed.

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/digital-business-card.git
   ```
2. Go into the project folder
   ```bash
   cd digital-business-card
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open the local link shown in the terminal (usually `http://localhost:5173`)

## Make It Your Own

- Replace `src/assets/profile-pics.jpeg` with your own photo
- Edit your name, title, and location in `intro.jsx`
- Update your email and LinkedIn URL in `contact.jsx`
- Change the text in `about.jsx`
- Add or remove items in the `interests` array in `interests.jsx`
- Update the social links in the `socials` array in `footer.jsx`

## What I Learned

- Breaking a UI into reusable React components
- Rendering lists with `.map()` and using the `key` prop
- Importing images and CSS in a Vite project
- Using an icon library in React
- Writing semantic HTML (`header`, `main`, `section`, `footer`)
- Setting up a project with Vite and managing it with Git and GitHub Desktop

## Future Improvements

- Add a dark/light mode toggle
- Add a "Download CV" button
- Add a projects section
- Improve accessibility and add subtle animations

## Author

**Abass A.**, Frontend Developer, Nigeria
