// main imports
import * as React from "react";

// plugin imports
import { Link } from "gatsby-plugin-react-i18next";

// style imports
import "../../../styles/main.scss";
import "./LandingHeader.scss";

import Logo from "../../../svg/logo/logoTag.svg";
import BlackArrow from "../../../svg/blackArrow.svg";

const HeaderLanding = () => (
  <header >
    <div className="topHeader">
      <BlackArrow />
      <div></div>
    </div>
    <Link to="/">
      <Logo className="landingNavLogo" />
    </Link>
  </header>
);

export default HeaderLanding;
