import { Link } from "react-router-dom";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
          </a>
        </li>
        {/* End home page menu */}

        {/* End categories menu items */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link to="/destinations">Destinations</Link>
        </li>
        {/* End Destinatinos single menu */}
        {/* End blogIems */}
        {/* End pages items */}

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
