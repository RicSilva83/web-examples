import React from "react";
import ReactDOM from "react-dom/client";
import Solana from "./Solana";
import "./styles/index.css";
import Ethereum from "./Ethereum";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Solana />
    <Ethereum />
  </React.StrictMode>
);
