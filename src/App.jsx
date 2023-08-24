import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./pages/home";
// import Store from "./pages/store";
// import About from "./pages/about";
import { Suspense } from "react";
import LoadingComponent from "./components/LoadingComponent";
import lazyLoad from "./lazyLoad";
import ThemeProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import UserProvider from "./contexts/UserContext";
import PrivateRoutes from "./components/PrivateRoutes";
// import LazyLoadModules from "./components/LazyLoadModules";
// import sumTwo from "./utils/sum";

const LazyStore = lazyLoad("./pages/store");
const LazyAbout = lazyLoad("./pages/about");
const LazyHome = lazyLoad("./pages/home", "Home");
const LazyLogin = lazyLoad("./pages/login");

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div>
          {/* <LazyLoadModules /> */}
          <Router>
            <Navbar />
            <Suspense fallback={<LoadingComponent />}>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route element={<LazyHome />} path="/" />
                  <Route element={<LazyStore />} path="/store" />
                  <Route element={<LazyAbout />} path="/about" />
                </Route>
                <Route element={<LazyLogin />} path="/login" />
              </Routes>
            </Suspense>
          </Router>
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
