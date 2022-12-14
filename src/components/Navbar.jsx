import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as SignIn } from "../assets/svg/lockIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            ></ExploreIcon>
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore Jobs
            </p>
          </li>

          <li className="navbarListItem" onClick={() => navigate("/sign-in")}>
            <SignIn
              fill={pathMatchRoute("/sign-in") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            ></SignIn>
            <p
              className={
                pathMatchRoute("/sign-in")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Sign In
            </p>
          </li>

          <li className="navbarListItem" onClick={() => navigate("/sign-up")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/sign-up") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            ></PersonOutlineIcon>
            <p
              className={
                pathMatchRoute("/sign-up")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Sign Up
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
