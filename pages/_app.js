import "../styles/globals.css";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: "200px", backgroundColor: "greenyellow" }}>
      <p>Oops</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary
      fallback={ErrorFallback}
      onReset={() => {
        console.log("was reset");
      }}
    >
      <Component {...pageProps} />;
    </ErrorBoundary>
  );
}

export default MyApp;
