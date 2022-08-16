import * as React from "react";
import { Octocat } from "../assets/GitHub";

/*
 * Uncomplicated Lightweight Error Boundary Component
 * Usage: <ErrorBoundary><MyComponentsParent /></ErrorBoundary>
 */
interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorinfo?: String | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    errorinfo:
      "Sorry ... Something unexpected went wrong !!",
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorinfo: error.toString() };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    //  console.error("Uncaught error:", error, info);
    // add a callback to log an error here.
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col border-double border-8 border-red-500 text-red-500 mt-8">
          <h1 className="text-lg font-semibold p-5 self-center">
            Whoops ... there was an unexpected error !!
          </h1>
          <p className="p-5 self-center">{this.state.errorinfo}</p>
          <a
            className="flex flex-row items-center justify-center space-x-10 p-5"
            href="https://github.com/Hillsie/marco-polo/issues/new"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div>🙏️ </div>
            <div className="underline decoration-solid underline-offset-8 decoration-blue-600 text-blue-600 font-semibold">
              Appreciate it if you could raise an issue
            </div>
            <span className="text-black">
              <Octocat option="dark" />
            </span>
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
