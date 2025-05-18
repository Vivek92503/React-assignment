# 🍽️ Recipe App

A modern Recipe App built using **ReactJS** and **Redux** that allows users to search, explore, and save their favorite recipes. It fetches data from the Edamam Recipe API and provides a clean user interface to interact with recipes.

---

## 🧾 Introduction

The Recipe App is designed to help users find recipes based on their taste and dietary preferences. With features like keyword search, filters, and favorites, users can personalize their cooking experience. The project serves as a practical implementation of React and Redux for beginners and intermediate developers.

---

## ✨ Features

- 🔍 Search recipes by keywords (e.g., "pizza", "vegetarian")
- 📋 View recipe details (ingredients, time, servings)
- ❤️ Mark recipes as favorites and manage a favorite list
- 📁 Filters for dietary needs (e.g., gluten-free, vegetarian)
- 💾 State managed via Redux and persists across navigation
- 💡 Clean and reusable component structure

---

## 🛠️ Technologies Used

- **Frontend:** ReactJS
- **State Management:** Redux, Redux Thunk
- **API:** [Edamam Recipe API](https://developer.edamam.com/)
- **Styling:** CSS
- **Development Tools:** Visual Studio Code, npm, Git

---

## 📦 Setup Instructions

### Prerequisites

- Node.js and npm installed (download: https://nodejs.org/)
- Internet connection to fetch data from Edamam API

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/RecipeApp.git
   cd RecipeApp
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your Edamam API credentials**
   Open `src/redux/actions.js` and update this line:

   ```javascript
   const response = await fetch(
     `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&from=0&to=50`
   );
   ```

   > You can get free API credentials by registering at [https://developer.edamam.com/](https://developer.edamam.com/)

4. **Start the development server**

   ```bash
   npm start
   ```

   The app should open automatically at [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

In the project directory, you can run:

* `npm start` – Runs the app in development mode
* `npm run build` – Builds the app for production
* `npm test` – Launches the test runner (if tests are added)
* `npm run eject` – Ejects the app configuration (not recommended unless necessary)

---

## 🚀 Deployment

This app can be deployed on platforms like:

* **GitHub Pages**
* **Vercel**
* **Netlify**
* **Render**

You can build the production version using:

```bash
npm run build
```

Then follow the hosting provider's instructions for deployment.

---

## Future Enhancements

* 🍽️ Add category filters (breakfast, lunch, dinner)
* 🧑‍🍳 Add user authentication to save favorites per user
* 🌐 Add pagination or infinite scroll
* 📱 Improve responsiveness on smaller screens
* 📊 Add nutritional info and calorie breakdown

---

## ⚠️ Notes

* This project is for educational and demonstration purposes.
* Be mindful of the free tier limitations of the Edamam API.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


## 🙌 Acknowledgements

* [Edamam API](https://developer.edamam.com/)
* ReactJS & Redux documentation
* Open-source community for learning resources


