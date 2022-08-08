import { observer } from "mobx-react";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { Octocat } from "../assets/GitHub";
import { Avatar } from "./Avatar";

export const Layout = observer( function Layout() {
  return (
    <>
      <div className="col-start-3 row-start-2 self-center row-end-3 flex flex-row justify-end space-x-4  w-full relative items-center h-16">
        <div className="absolute w-10 h-10 sm:w-14 sm:h-14 border-2 inline-flex  rounded-full left-0">
          <Avatar />
        </div>
        <a
          href="https://github.com/Hillsie/marco-polo"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Octocat option="dark" />
        </a>
      </div>
      <div className="relative col-start-3 col-end-4 row-start-3 row-end-4">
        <Outlet />
      </div>
    </>
  );
});
