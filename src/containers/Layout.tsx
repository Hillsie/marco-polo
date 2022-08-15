import { observer } from "mobx-react";
import * as React from "react";
import { Outlet } from "react-router-dom";

export const Layout = observer(function Layout() {
  return (
    <div className="relative col-start-3 col-end-4 row-start-3 row-end-4">
      <Outlet />
    </div>
  );
});
