import * as React from "react";
import ErrorBoundary from "../containers/ErrorBoundary";
import MainContent from "../containers/MainContent";

function Fallback() {
  return (
    <div className="relative flex flex-col items-center z-0">Loading...</div>
  );
}

function Home() {
  return (
    <React.Suspense fallback={<Fallback />}>
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default Home;
