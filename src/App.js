import React from "react";
import Routes from "./routes";
import "./App.css";
import Header from "./views/components/header";
import Footer from "./views/components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
