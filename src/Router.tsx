import { observer } from "mobx-react";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import { SideMenu } from "./containers/sideMenu/SideMenu";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

// note:  Router is  for future use.
export const Router = observer(function Router() {
  return (
    <div className="bg-slate-100 relative grid gap-4 grid-cols-[0.05fr_0.3fr_2fr_0.05fr] grid-rows-[0.05fr_0.1fr_2fr_0.1fr] h-screen">
      <div className="relative col-start-2 row-start-1 self-center">
        <SideMenu />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
});
