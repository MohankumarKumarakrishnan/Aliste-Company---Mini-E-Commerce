# E-Shop: React E-commerce Application

## Overview

E-Shop is a simple and responsive React-based e-commerce web application that allows users to browse products, view detailed product information, add items to a shopping cart, and manage the cart quantity. It uses React Context API for state management and interacts with a public fake store API for product data.

## Features

- Browse a grid of products fetched from an API
- View detailed product information on a separate page
- Add products to a shopping cart
- Update item quantities or remove items from the cart
- Persistent cart state saved in `localStorage`
- Responsive design using Tailwind CSS
- Navigation with React Router

## Technologies Used

- React with hooks (`useState`, `useEffect`, `useContext`, `useReducer`)
- React Router DOM for client-side routing
- Context API for state management
- Tailwind CSS for styling
- Fake Store API (https://fakestoreapi.com) for product data

## Project Structure

- `src/components`: Reusable components such as `Navbar`, `ProductCard`, `CartItem`
- `src/context`: React Context and reducer for cart state management
- `src/pages`: Page components (`Home`, `ProductDetail`, `Cart`)
- `src/utils/api.js`: API helper functions to fetch products
- `src/App.js`: Main app component defining routes and layout

