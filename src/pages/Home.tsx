import * as React from "react";
import MainContent from "../containers/MainContent"

function Fallback() {
  return (
    <div className="relative flex flex-col items-center z-0">Loading...</div>
  );
}

function Home() {
  return (
    <React.Suspense fallback={<Fallback/>}>
      <MainContent />
    </React.Suspense>
  );
}

export default Home;
