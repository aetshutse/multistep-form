# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Multi-Step Form

  A small account-creation form built with React, TypeScript, and Vite. The form is split into three steps: user details, address, and account credentials. Users can move forward and back while their entries remain in the form state.

  ## Getting Started

  Install dependencies and start the Vite development server:

  ```sh
  npm install
  npm run dev
  ```

  Open the local URL printed by Vite in your terminal.

  ## Available Scripts

  - `npm run dev` starts the development server with hot reloading.
  - `npm run build` type-checks the project and creates a production build in `dist/`.
  - `npm run preview` serves the production build locally. Run `npm run build` first.
  - `npm run lint` runs ESLint across the project.

  ## Form Flow

  1. Enter first name, last name, and age.
  2. Enter street, city, state, and ZIP code.
  3. Enter an email address and password, then finish.

  The inputs use the browser's built-in required-field and email validation. This is a front-end example only: submitting the final step displays a success alert. It does not create an account, send data to a server, or save entries after the page is closed or refreshed.

  ## Project Structure

  - `src/App.tsx` holds the form data and assembles the steps.
  - `src/useMultiStepForm.ts` manages the current step and navigation.
  - `src/UserForm.tsx`, `src/AddressForm.tsx`, and `src/AccountForm.tsx` implement the individual steps.
  - `src/FormWrapper.tsx` provides shared form-step layout.

  React Compiler is enabled in the Vite configuration.
    extends: [
