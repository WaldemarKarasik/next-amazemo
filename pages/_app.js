import "../styles/globals.css";
import React from "react";
import App from "next/app";
import { useStore } from "react-redux";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import HeaderAndAside from "../components/HeaderAndAside";
import Footer from "../components/Footer";

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  return (
    // <PersistGate persistor={store.__persistor} loading={null}>
    <div className="grid-container">
      <HeaderAndAside />

      <Component {...pageProps} />
      <Footer />
    </div>
    // </PersistGate>
  );
});
