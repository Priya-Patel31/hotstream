import "./header.css";
import { BsSearch } from "../../../assets/icons";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";

export const Header = () => {
  const navigate = useNavigate();
  const { isUserloggedIn,logout } = useAuth();
  return (
    <nav className="header-container">
      <div className="logo">
        <span className="logo-text1">HOT</span>
        <span className="logo-text2">STREAM</span>
      </div>
      <form className="searchBar-container">
        <BsSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search Videos"
          className="search-input"
        />
      </form>
      {isUserloggedIn ? (
        <Link to="/"
          className="login-button"
          onClick={() => {
          logout();
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to="/login"
          className="login-button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Link>
      )}
    </nav>
  );
};
