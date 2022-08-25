import { observer } from "mobx-react";
import * as React from "react";
import { Link } from "react-router-dom";
import { Octocat } from "../assets/GitHub";
import { Avatar } from "../components/Avatar";
import { SideMenu } from "./sideMenu/SideMenu";

// All thing related to page header.
const Navbar = observer(function Navbar() {
  return (
    <nav className="relative col-start-2 col-end-4 row-start-2 row-end-3 grid grid-cols-[0.2fr_0.2fr_1fr] grid-rows-1 items-center justify-between print:hidden print:h-0">
      <SideMenu />
      <Link to="/">
        <Avatar />
      </Link>
      <a
        className="place-self-end self-center"
        href="https://github.com/Hillsie/marco-polo"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Octocat option="dark" />
      </a>
    </nav>
  );
});

export default Navbar;
