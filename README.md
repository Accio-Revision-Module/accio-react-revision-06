# ReactJS Advanced Topics

## Table of Contents

1. [Lazy Loading Routes](#lazy-loading-routes)
2. [useRef for Accessing DOM Elements](#useref-for-accessing-dom-elements)
3. [Theming and Global Styles in React Applications](#theming-and-global-styles)
4. [Protecting Routes and Handling User Roles/Permissions](#protecting-routes)

---

## Lazy Loading Routes

### Explanation

Lazy loading helps to improve application performance by only loading components when they are needed.

### Real-world Example

For larger applications with multiple routes, use lazy loading to load only the relevant sections of your application to make it faster.

#### Code Snippet

```javascript
import React, { Suspense, lazy } from "react";
const Home = lazy(() => import("./Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
```

---

## useRef for Accessing DOM Elements

### Explanation

`useRef` allows you to directly interact with DOM elements in functional components.

### Real-world Example

Creating a focusable input field in a form.

#### Code Snippet

```javascript
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

---

## Theming and Global Styles in React Applications

### Explanation

How to add themes and global styles using Context API or libraries like styled-components.

### Real-world Example

Switching between dark and light mode in an application.

#### Code Snippet

```javascript
// Using styled-components
import { ThemeProvider } from "styled-components";
const theme = {
  primaryColor: "#4CAF50",
};

function App() {
  return <ThemeProvider theme={theme}>{/* your components */}</ThemeProvider>;
}
```

---

## Protecting Routes and Handling User Roles/Permissions

### Explanation

Protecting certain parts of your application based on user roles or permissions.

### Real-world Example

An admin dashboard that is only accessible to users with an "Admin" role.

#### Code Snippet

```javascript
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user.role === "Admin" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
```

---
