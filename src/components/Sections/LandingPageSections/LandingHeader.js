// main imports
import * as React from "react";

// plugin imports
import { Link } from "gatsby-plugin-react-i18next";

// style imports
import "../../../styles/main.scss";
import "./LandingHeader.scss";

import Logo from "../../../svg/logo/logoTag.svg";

const HeaderLanding = () => (
  <header >
    <div className="topHeader">
      <Link to="/">
        <Logo className="landingNavLogo" />
      </Link>
    </div>
  </header>
);

export default HeaderLanding;
