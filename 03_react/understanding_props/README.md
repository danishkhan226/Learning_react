# Understanding React Props

A simple React application that demonstrates how to pass data from a parent component to a reusable child component using props.

## Overview

The app renders three profile cards. Each card receives the following props from `App.jsx`:

- `user` - The person's name
- `age` - The person's age
- `image` - The profile image URL

The reusable `Card` component uses these props to display profile information dynamically.

## Features

- Reusable React `Card` component
- Passing data from parent to child components
- Rendering dynamic values with props
- Profile images with accessible `alt` text
- Responsive card styling
- Vite hot module replacement during development

## Technologies Used

- React
- React DOM
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```text
src/
├── assets/
├── components/
│   └── card.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx