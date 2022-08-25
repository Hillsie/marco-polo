import { observer } from "mobx-react";
import * as React from "react";
import ErrorBoundary from "../containers/ErrorBoundary";
import ResumeUnstyled from "../containers/resume/ResumeUnstyled";

const Resume = observer(function Resume(): JSX.Element {
  return (
    <ErrorBoundary>
      <ResumeUnstyled />
    </ErrorBoundary>
  );
});
export default Resume;
