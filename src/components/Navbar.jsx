import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      logout();
      navigate("/login");
    } else {
      login();
    }
  };

  return (
    <nav>
      <div className="brand">ExampleApp.</div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <button onClick={() => changeTheme("dark")}>
          {theme == "dark" ? "Light" : "Dark"}
        </button>
        {user && `Hello, ${user.name}`}
        <button onClick={handleAuth}>{user ? "Logout" : "Login"}</button>
      </div>
    </nav>
  );
}

export default Navbar;
