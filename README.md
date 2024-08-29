# 🎲 Dice Rolling App using ReactJS 🎲

🎉 Welcome to the **Dice Rolling** project! 🎉 This exciting 🥳 and interactive 🎮 application rolls two dice 🎲🎲 to display random numbers between **1️⃣** and **6️⃣**. Every time you click the button 🖱️, the dice shake 🔄 and show a new random number 🎰 on their upper faces, just like standard dice 🎲. 

## 📋 Description 📋

The **Dice Rolling App** 🕹️ is a fun and engaging 🎉 web application that brings the classic dice rolling experience 🎲 to your screen. The app utilizes **ReactJS** ⚛️ for seamless functionality and **CSS** 🎨 for smooth animations. Each time you roll, the dice display a random number 🆒 with standard dot patterns using the **Font Awesome** library 🎨. Whether you’re playing a game 🎲🎯 or just having fun 🕹️, this app will keep you entertained! 🎊

## 🛠️ Built With 🛠️

- **ReactJS** ⚛️: The core library for building interactive UIs 💻.
- **CSS** 🎨: For stunning visual effects 🌈 and animations ✨.
- **Font Awesome** 🎨: To display dice dots accurately ⚪⚪⚪.

## 🚀 How to Use 🚀

1. **Clone** the repository: `git clone https://github.com/nidhiupman568/DiceRoll-Using-React.JS.git` 🖥️.
2. **Navigate** to the project directory: `cd dice-rolling-app` 📁.
3. **Install** the necessary dependencies: `npm install` 📦.
4. **Start** the application: `npm start` 🚀.
5. **Open** your browser 🌐 and go to: `http://localhost:3000` to see the app in action! 🎲🎉

## 📂 Project Structure 📂

The project structure 🏗️ is organized into **components** 🧩:

- **Die** 🎲: A stateless component that shows a single die with the correct dotted number. 
- **RollDice** 🎲🎲: Contains the logic 💡 to generate random numbers and handle button clicks 🖱️. This component renders two **Die** components side by side 👫.

### 🧱 Folder Structure 🧱

```
/dice-roll-app
│
├── /public
│
├── /src
│   ├── /components
│   │   ├── Die.js 🖥️
│   │   ├── Die.css 🎨
│   │   ├── RollDice.js 🖥️
│   │   └── RollDice.css 🎨
│   │
│   ├── App.js 🖥️
│   └── index.js 🖥️
│
├── package.json 📦
└── README.md 📄
```

## 📦 Dependencies 📦

Here are the key dependencies used 📚:

- **React**: `^18.2.0` ⚛️
- **React-DOM**: `^18.2.0` 🖥️
- **FontAwesome**: `^6.4.0` 🎨 for icons 🖼️.

```json
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
}
```

## 📸 Screenshots 📸

Here's how the **Dice Rolling App** 🎲 looks in action! 📷:

![diceroll](https://github.com/user-attachments/assets/6395a98f-2f3e-4e21-84bb-827b001395e4)
 🖼️

## 📚 Steps to Run the Application 📚

1. **Create** the application using the following command: `npx create-react-app dice-roll` 🛠️.
2. **Navigate** to the project folder: `cd dice-roll` 📁.
3. **Install** the required modules 📦:
    ```bash
    npm i @fortawesome/fontawesome-svg-core
    npm i @fortawesome/free-solid-svg-icons
    npm i @fortawesome/react-fontawesome
    ```
4. **Create** a new directory called components 📂 and add the necessary files: `RollDice.js`, `Die.js`, `RollDice.css`, and `Die.css` 📝.
5. **Run** the application using the following command: `npm start` 🚀.
6. **Open** your web browser and go to `http://localhost:3000` 🌐 to view the Dice Rolling App in action! 🎉

## 🎯 Conclusion 🎯

Thank you for checking out the **Dice Rolling App** 🎲! Feel free to share your feedback 💬 or contribute to the project by making a pull request 🔄. Happy coding! 💻🚀

## 💬 Feedback and Contributions 💬

Feel free to fork 🍴 this repository and make pull requests 🔄. For any issues 🛠️ or suggestions 💡, please open an issue 🚀.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
