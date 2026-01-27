# Jaykou - Cookbook Recipe Website

Jaykou is a modern, responsive cookbook and recipe management website built with React, Vite, and Tailwind CSS. It provides a seamless experience for users to discover, manage, and explore various culinary recipes.

## 🚀 Key Features

- **Authentication & Authorization**: Secure user registration and login system with role-based access control.
- **Modern User Profile**: Comprehensive profile management including profile image updates and detailed personal information.
- **Country-Aware Registration**: Integrated country selection and phone number validation for global user support.
- **Dynamic Content**: Interactive UI components for recipe discovery and exploration.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Form Validation**: Robust client-side validation using Zod and React Hook Form.

## 🛠 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) (RTK Query)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Navigation**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Other Tools**: `date-fns`, `react-phone-number-input`, `embla-carousel-react`

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jaykou-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd jaykou-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build

Build the application for production:
```bash
npm run build
```

## 📂 Project Structure

- `src/app`: Application routes and main pages.
- `src/components`: Reusable UI components (Shadcn UI and custom).
- `src/redux`: Redux store configuration and API slices.
- `src/lib`: Utility functions and global helpers.
- `src/assets`: Static assets like images and fonts.

## 📄 License

This project is private and for internal use only.
