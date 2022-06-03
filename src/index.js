import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Github/context/context.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-sgi8-brs.us.auth0.com
//GlJpaJmHVY2DkIyx9spwjQ0QCiAIihxz
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-sgi8-brs.us.auth0.com"
    clientId="GlJpaJmHVY2DkIyx9spwjQ0QCiAIihxz"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
