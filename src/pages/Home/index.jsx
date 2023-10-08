import React from "react";
import Header from "../../components/App/Header"; // Ruta relativa para llegar al componente Header
import Footer from "../../components/App/Footer"; // Ruta relativa para llegar al componente Footer

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
