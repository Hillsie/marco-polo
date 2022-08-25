import { observer } from "mobx-react";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./containers/Layout";
import Navbar from "./containers/Navbar";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Resume from "./pages/Resume";

// note:  Router is  for future use.
export const Router = observer(function Router() {
  return (
    <div className="relative bg-slate-100  grid gap-4 grid-cols-[0.05fr_0.3fr_2fr_0.05fr] grid-rows-[0.01fr_40px_2fr_0.1fr]">
      <Navbar />
      <div className="relative col-start-1 col-end-5 row-start-3 row-end-5 print:absolute print:-top-20">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="726573756d65" element={<Resume />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
});
