import React from "react";
import Header from "../../components/Header"; // Ruta relativa para llegar al componente Header
import Footer from "../../components/Footer"; // Ruta relativa para llegar al componente Footer

function App() {
  return (
    <div>
      <Header />
      {/* Contenido principal */}
      <Footer />
    </div>
  );
}

export default App;
