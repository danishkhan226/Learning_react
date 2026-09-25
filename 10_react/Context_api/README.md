# React Context API Example

This small React and Vite project demonstrates how to share data between components with the Context API.

The `ThemeContext` component provides the value `Danish` through `PostDataContext`. Both `Navbar` and `Navbar2` read that value with React's `useContext` hook, without receiving it through props.


 # React Context API Example
 
 This small React and Vite project demonstrates how to share data between components with the Context API.
 
 The `ThemeContext` component provides the value `Danish` through `PostDataContext`. Both `Navbar` and `Navbar2` read that value with React's `useContext` hook, without receiving it through props.
 
 ## Getting Started
 
 ### Prerequisites
 
 - Node.js 18 or newer
 - npm
 
 ### Installation
 
 ```bash
 npm install
 ```
 
 ### Run the development server
 
 ```bash
 npm run dev
 ```
 
 Open the local URL shown in the terminal to view the app.
 

 ## Project Structure
 
 ```text
 src/
 ├── component/
 │   ├── Navbar.jsx       # Reads the shared context value
 │   └── Navbar2.jsx      # Reads the shared context value
 ├── context/
 │   └── ThemeContext.jsx # Creates and provides PostDataContext
 ├── App.jsx
 └── main.jsx             # Wraps the app with ThemeContext
 ```
 
 ## Key Concept
 
 The provider is mounted around `App` in `main.jsx`, so any descendant component can access the shared value:
 
 ```jsx
 const data = useContext(PostDataContext)
 ```
 
 This avoids passing the same data through multiple component levels with props.
