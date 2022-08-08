import * as React from "react";
import MainContent from "../containers/MainContent"

function Home() {
  return (
    <React.Suspense fallback={<>...</>}>
      <MainContent />
    </React.Suspense>
  );
}

export default Home;
