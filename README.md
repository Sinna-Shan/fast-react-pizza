# 🍕 Fast React Pizza

A modern, fast pizza ordering application built with React, Redux Toolkit, React Router, and styled with Tailwind CSS. This application allows users to browse a pizza menu, add items to their cart, and place orders with real-time order tracking.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)

## ✨ Features

- **Browse Menu**: View available pizzas with prices and ingredients
- **Shopping Cart**: Add, remove, and update pizza quantities
- **Order Placement**: Create orders with delivery information
- **Order Tracking**: Search and track your orders in real-time
- **User Management**: Set and display your username
- **Geolocation**: Auto-fill your address using your device's location
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Priority Orders**: Mark orders as priority for faster delivery

## 🔧 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript outside the browser. npm (Node Package Manager) comes bundled with Node.js.

**How to check if you have Node.js installed:**

Open your terminal (Command Prompt, PowerShell, or Terminal) and type:

```bash
node --version
```

If you see a version number (e.g., `v18.x.x` or higher), you're good to go!

**If you don't have Node.js installed:**

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the installation wizard
4. Restart your terminal/command prompt
5. Verify installation by running `node --version` and `npm --version`

### 2. A Code Editor

We recommend **Visual Studio Code** (VS Code):
- Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
- It's free, lightweight, and has excellent support for JavaScript and React

### 3. Git (Optional but Recommended)

Git helps you manage version control:
- Download from [https://git-scm.com/](https://git-scm.com/)
- Follow the installation instructions for your operating system

## 📦 Installation Guide

Follow these steps carefully to set up the project on your local machine:

### Step 1: Download or Clone the Project

**Option A: Download ZIP**
1. Click the green "Code" button on the GitHub repository
2. Click "Download ZIP"
3. Extract the ZIP file to your desired location
4. Open the extracted folder

**Option B: Clone with Git**
```bash
git clone <repository-url>
cd fast-react-pizza
```

### Step 2: Open the Project in Your Code Editor

1. Open VS Code (or your preferred editor)
2. Click `File` → `Open Folder`
3. Select the `fast-react-pizza` folder
4. Click "Select Folder" or "Open"

### Step 3: Open the Terminal

In VS Code:
- Click `Terminal` → `New Terminal` (or press `` Ctrl + ` ``)
- A terminal will open at the bottom of your screen

### Step 4: Install Dependencies

In the terminal, type the following command and press Enter:

```bash
npm install
```

**What does this do?**
- This command reads the `package.json` file
- Downloads and installs all required packages (React, Redux, React Router, Tailwind CSS, etc.)
- Creates a `node_modules` folder with all dependencies
- This may take 2-5 minutes depending on your internet speed

**You should see:**
- A progress bar as packages are downloaded
- A `node_modules` folder appearing in your project
- A `package-lock.json` file being created

## 🚀 Running the Application

Once installation is complete, you can start the development server:

### Step 1: Start the Development Server

In the terminal, type:

```bash
npm run dev
```

**What happens now?**
- Vite (the build tool) starts a development server
- Your application is compiled and optimized
- Hot Module Replacement (HMR) is enabled (instant updates when you save files)

### Step 2: Open in Browser

You should see output like this in the terminal:

```
  VITE v4.4.5  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**To view the application:**
1. Hold `Ctrl` (or `Cmd` on Mac) and click the link `http://localhost:5173/`
2. Or manually open your browser and go to `http://localhost:5173/`

**🎉 Congratulations! The application should now be running!**

### Step 3: Explore the Application

- **Home Page**: Enter your name to get started
- **Menu**: Browse available pizzas
- **Cart**: View and manage your cart items
- **Create Order**: Fill in delivery details and place your order
- **Order Tracking**: Search for your order using the order ID

## 📁 Project Structure

```
fast-react-pizza/
├── public/              # Static assets
├── src/
│   ├── features/        # Feature-based modules
│   │   ├── cart/        # Shopping cart functionality
│   │   ├── menu/        # Pizza menu display
│   │   ├── order/       # Order creation and tracking
│   │   └── user/        # User management
│   ├── services/        # API services
│   │   ├── apiGeocoding.js    # Geolocation API
│   │   └── apiRestaurant.js   # Restaurant/Menu API
│   ├── ui/              # Reusable UI components
│   │   ├── AppLayout.jsx      # Main layout wrapper
│   │   ├── Button.jsx         # Custom button component
│   │   ├── Header.jsx         # Application header
│   │   ├── Home.jsx           # Home page
│   │   ├── Loader.jsx         # Loading spinner
│   │   └── ...
│   ├── utils/           # Utility functions
│   │   └── helpers.js   # Helper functions (formatting, etc.)
│   ├── App.jsx          # Main application component with routing
│   ├── index.css        # Global styles and Tailwind imports
│   ├── main.jsx         # Application entry point
│   └── store.js         # Redux store configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

### Key Directories Explained:

- **`features/`**: Contains feature-specific code organized by domain (cart, menu, order, user)
- **`services/`**: API integration and external service calls
- **`ui/`**: Reusable UI components used across the application
- **`utils/`**: Helper functions and utilities

## 🛠 Technologies Used

This project is built with modern web technologies:

- **[React](https://react.dev/)** (v18.2.0) - A JavaScript library for building user interfaces
- **[Redux Toolkit](https://redux-toolkit.js.org/)** (v2.2.7) - State management made easy
- **[React Router](https://reactrouter.com/)** (v6.26.1) - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4.10) - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** (v4.4.5) - Next-generation frontend build tool
- **[ESLint](https://eslint.org/)** - Code linting and quality checks
- **[Prettier](https://prettier.io/)** - Code formatting

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode at [http://localhost:5173](http://localhost:5173)

- The page will automatically reload when you make changes
- You will see lint errors and warnings in the console

### `npm run build`

Builds the app for production to the `dist` folder

- Optimizes the build for best performance
- The build is minified and filenames include hashes
- Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build

- Serves the production build from the `dist` folder
- Useful for testing before deployment

### `npm run lint`

Runs ESLint to check for code quality issues

- Reports unused disable directives
- Exits with error if warnings exceed the configured max

## 🔍 Troubleshooting

### Problem: `npm install` fails

**Solution:**
1. Delete `node_modules` folder and `package-lock.json` file
2. Clear npm cache: `npm cache clean --force`
3. Run `npm install` again

### Problem: Port 5173 is already in use

**Solution:**
1. Kill the process using port 5173
2. Or change the port in `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    port: 3000  // Use a different port
  },
  plugins: [react(), eslint()],
});
```

### Problem: Changes not reflecting in the browser

**Solution:**
1. Hard refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart the development server

### Problem: Module not found errors

**Solution:**
1. Ensure all dependencies are installed: `npm install`
2. Check if the file path is correct
3. Restart the development server

### Problem: "Cannot find module 'vite'" or similar

**Solution:**
- You likely didn't run `npm install`. Go back to Step 4 of Installation Guide

## 📚 Learn More

### React Resources:
- [React Official Documentation](https://react.dev/)
- [React Tutorial for Beginners](https://react.dev/learn)

### Redux Resources:
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

### Tailwind CSS Resources:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

### Vite Resources:
- [Vite Guide](https://vitejs.dev/guide/)
- [Why Vite?](https://vitejs.dev/guide/why.html)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips for Beginners

1. **Don't be afraid to experiment** - Make changes and see what happens!
2. **Use the browser console** - Press `F12` to open Developer Tools
3. **Read error messages carefully** - They usually tell you what's wrong
4. **Check the documentation** - The links in "Learn More" are very helpful
5. **Take it step by step** - Learning React takes time, be patient!

---

**Happy Coding! 🚀**

If you encounter any issues not covered in this README, feel free to open an issue on the repository.
