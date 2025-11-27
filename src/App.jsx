import { Home } from "./pages/Home.jsx";
import { Ponies } from "./pages/Ponies.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "ponies": return <Ponies />;
      case "gallery": return <Gallery />;
      default: return <Home />;
    }
  };

    return (
    <>
      <Header />
      <main className="page">
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}