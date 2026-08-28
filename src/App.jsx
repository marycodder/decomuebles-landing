import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-container">

      {/* Barra de Navegación */}
      <header className="navbar">
        <div className="logo-title">Decomuebles LG</div>

        <button
          className="menu-toggle-btn"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </header>


      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu}
        ></div>
      )}


      {/* Menú lateral */}
      <aside className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>

        <div className="sidebar-header">
          <span>Decomuebles LG</span>

          <button
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>


        {/* Buscador */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar en Deco Muebles LG..."
          />
        </div>


        {/* Categorías */}
        <p className="sidebar-section-title">
          Categorías de productos
        </p>

        <ul className="sidebar-categories">

          <li>
            <a href="#cocinas" onClick={toggleMenu}>
              Cocinas a medida
            </a>
          </li>

          <li>
            <a href="#closets" onClick={toggleMenu}>
              Walk-in closets y clósets
            </a>
          </li>

          <li>
            <a href="#banos" onClick={toggleMenu}>
              Vanitorios y baños
            </a>
          </li>

          <li>
            <a href="#especial" onClick={toggleMenu}>
              Mobiliario especial / Muebles TV
            </a>
          </li>

          <li>
            <a href="#galeria" onClick={toggleMenu}>
              Galería de trabajos realizados
            </a>
          </li>

        </ul>


        <div className="sidebar-divider"></div>


        {/* Contacto */}
        <p className="sidebar-section-title">
          Contacto e información
        </p>

        <ul className="sidebar-categories">

          <li>
            <a
              href="https://wa.me/56973754807"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-menu-link"
            >
              💬 Cotizar por WhatsApp
            </a>
          </li>

        </ul>

      </aside>


      {/* HERO / PRESENTACIÓN */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <h1>
              Muebles a medida que transforman tus espacios
            </h1>

            <p className="subtitle">
              Diseño, fabricación e instalación de todo tipo de muebles en Viña del Mar
              y toda la V Región.
            </p>

            <p className="hero-description">
              En Decomuebles LG transformamos tus ideas en muebles
              diseñados especialmente para tu hogar. Creamos cocinas,
              baños, dormitorios, clósets y soluciones de almacenamiento
              100% a medida, aprovechando cada espacio de forma funcional
              y estética.
            </p>

            <p className="hero-description">
              Te acompañamos durante todo el proceso: diseñamos junto a ti,
              fabricamos con materiales de calidad y realizamos la
              instalación final en tu domicilio.
            </p>


            <a
              href="https://wa.me/56973254807?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20técnica"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              📲 Agendar visita por WhatsApp
            </a>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="footer">

        <h3>¿Tienes un proyecto en mente?</h3>

        <p>
          Escríbenos directamente para asesorarte y agendar tu evaluación.
        </p>

        <a
          href="https://wa.me/56973254807"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Contactar al +56 9 7325 4807
        </a>

        <p className="copyright">
          © Deco Muebles LG - Viña del Mar
        </p>

      </footer>

    </div>
  );
}

export default App;