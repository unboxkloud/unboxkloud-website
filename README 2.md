# React Project

This is a React project built with Vite.

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### Install Dependencies
Run the following command to install the necessary dependencies in frontend & backend folder:

```sh
npm install
```

## Running the Project Locally
To start the development server, run:

```sh
npm run dev
```

This will start the app on `http://localhost:3000/` (or another available port).

## Building the Project
To create a production build, run:

```sh
npm run build
```

This will generate the build files inside the `dist` folder.

### Replacing the Old Build with the New One
After building the project, replace the old `dist` folder with the newly generated one to deploy the latest version.

## Running the Server
To serve the built project using Express, run:

```sh
node server.js
```

This will start the server on `http://localhost:3000/`, serving the built React app.

## Folder Structure
```
project-root/
├── frontend/       # React project
│   ├── src/       # Source files
│   ├── dist/      # Build files (after running npm run build)
│   ├── public/    # Static assets
│   ├── package.json
│   └── ...
├── backend/       # Express server
│   ├── server.js  # Server file
│   ├── package.json
│   └── ...
└── README.md      # This file
```

## Additional Notes
- Ensure that the `dist` folder exists before running `node server.js`.
- If you encounter issues, make sure dependencies are installed (`npm install`).

Happy coding! 🚀


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
