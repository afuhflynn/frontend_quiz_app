import { Home, RefreshCcwIcon } from "lucide-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Update state if an error is thrown
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  // Log error details for debugging
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
    // Optionally, send error details to an error logging service
  }

  static handleRefreshPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI here
      return (
        <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
          <h2 className="mb-2 text-center text-bold md:text-left">
            Sorry for the inconvenience.
          </h2>
          <p className="text-center">
            Something went wrong. <br />
            Check your browser console for more info.
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-4 px-4 mt-4 md:flex-row md:gap-4">
            <button
              className="bg-secondary-foreground text-secondary py-3 px-5 rounded-xl shadow-lg hover:ring-slate-300 focus:bg-opacity-80 text-[18px] border-border flex items-center justify-center gap-2 md:w-auto w-full"
              onClick={this.handleRefreshPage}
            >
              <RefreshCcwIcon /> Try again
            </button>
            <Link
              to="/"
              className="bg-secondary-foreground text-secondary py-3 px-5 rounded-xl shadow-lg hover:ring-slate-300 focus:bg-opacity-80 text-[18px] border-border flex items-center justify-center gap-2 md:w-auto w-full"
            >
              <Home /> Back Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
