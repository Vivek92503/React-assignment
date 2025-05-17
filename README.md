# project

## Overview
This is a React-based web application that includes:
- A **Counter Component** with color level changes.
- A **User Data Form** that saves data locally and warns about unsaved changes.
- A **Rich Text Editor** to visualize user data.
- **React Router** for navigation.
- **Material UI / Chakra UI** for styling.
- **React Spring** for animations.
- Optional: **User Authentication** (Google Sign-In) and **Dashboard with Charts**.

## Project Structure
```
react-assignment/
│── src/
│   ├── components/
│   │   ├── Counter.tsx
│   │   ├── UserForm.tsx
│   │   ├── RichTextEditor.tsx
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   ├── App.tsx
│   ├── index.tsx
│── public/
│── package.json
│── README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/react-assignment.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-assignment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000/` in your browser.

## Features
**Counter Component** – Increment, decrement, reset, and background color changes.  
**User Form** – Saves data locally and warns before leaving unsaved changes.  
**Rich Text Editor** – Formats and persists user data.  
**React Router** – Navigation between components.  
**State Management** – Uses local storage / Redux Toolkit.  
**Animations** – Implemented via React Spring.  
**Optional** – Google Sign-In & Dashboard with Charts.  

## Deployment
To deploy on **GitHub Pages**, run:
```sh
npm run build
npm install -g gh-pages
gh-pages -d build
```
Or deploy on **Vercel**:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```
