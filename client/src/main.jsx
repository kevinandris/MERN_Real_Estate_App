// ! ROOT CLASS
//  ! npm create vite@latest to create the frontend
// ! npm install and npm run dev
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-myr3o8ngi6dpmzm0.us.auth0.com"
      clientId="K9Pyp2SvWSRQbPMjQkOW9edUh3cSJu95"
      authorizationParams={{
        redirect_uri: "http://127.0.0.1:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
