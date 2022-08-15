import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
   errorinfo?: String | null;
}


class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorinfo: "Something unexpected went wrong !! It would be helpful if you raised this on Github, see the link above",
  };


  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({hasError:true, errorinfo: errorInfo.toString()});
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col border-double border-4 border-red-500 text-red-500 mt-8">
          <h1 className="text-lg font-semibold p-5">Sorry.. there was an error</h1> <p className="p-5">{this.state.errorinfo}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
