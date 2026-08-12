import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
    <div className="landing-container">
      {/* Barra de Navegación Header */}
      <header className="navbar">
        <button className="menu-toggle-btn" onClick={toggleMenu} aria-label="Abrir Menú">
          ☰
        </button>
        <div className="logo-title">Deco Muebles LG</div>
      </header>

      {/* Fondo oscuro al abrir el menú (Overlay) */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* Menú Lateral Desplegable */}
      <aside className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span>Deco Muebles LG</span>
          <button className="close-btn" onClick={toggleMenu}>✕</button>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Buscar en Deco Muebles LG..." />
        </div>

        <p className="sidebar-section-title">Categorías de productos</p>
        <ul className="sidebar-categories">
          <li><a href="#cocinas" onClick={toggleMenu}>Cocinas a Medida</a></li>
          <li><a href="#closets" onClick={toggleMenu}>Walk-in Closets y Clósets</a></li>
          <li><a href="#banos" onClick={toggleMenu}>Vanitorios y Baños</a></li>
          <li><a href="#especial" onClick={toggleMenu}>Mobiliario Especial / Muebles TV</a></li>
          <li><a href="#galeria" onClick={toggleMenu}>Trabajos Entregados</a></li>
        </ul>

        <div className="sidebar-divider"></div>

        <p className="sidebar-section-title">Contacto e Info</p>
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

      {/* AQUÍ DEJA TODO EL RESTO DE TU CÓDIGO (Hero, Servicios, Galería, Footer) */}

      {/* Encabezado Principal */}
      <header className="hero">
        <div className="hero-content">
          <h1>Deco Muebles LG</h1>
          <p className="subtitle">Asesoría 📍 • Diseño 📝 • Fabricación e Instalación 🔨</p>
          <p className="location">Muebles a medida en Viña del Mar y V Región 🇨🇱</p>
          
          <a 
            href="https://wa.me/56973254807?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20técnica" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            📲 Agendar Visita por WhatsApp
          </a>
        </div>
      </header>

      {/* Servicios */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Cocinas a Medida</h3>
            <p>Fabricación en melamina de alta calidad, cubiertas en cuarzo blanco galaxy, granito y terminaciones premium.</p>
          </div>
          <div className="service-card">
            <h3>Walk-in Closets</h3>
            <p>Aprovechamiento máximo del espacio con soluciones organizativas adaptadas a tus requerimientos.</p>
          </div>
          <div className="service-card">
            <h3>Baños y Mobiliario Especial</h3>
            <p>Vanitorios, renovaciones integrales y muebles de diseño para todo tipo de ambientes.</p>
          </div>
        </div>
      </section>

      {/* Galería / Proyectos */}
      <section className="portfolio">
        <h2>Trabajos Entregados</h2>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <div className="portfolio-info">
            <h4>Cocina Verde Glaciar</h4>
            <p>Mueble en melamina verde glaciar con cubierta de cuarzo blanco galaxy. Cliente satisfecho.</p>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-info">
            <h4>Walk-in Closet</h4>
            <p>Distribución funcional y acabados personalizados a medida.</p>
          </div>
        </div>

        <div className="portfolio-card">
          <img 
            src="/cocina-roble-cava.jpg" 
            alt="Cocina Roble Cava y Blanco Alto Brillo" 
            className="portfolio-img" 
          />
          <div className="portfolio-info">
            <h4>Cocina Roble Cava y Blanco Alto Brillo</h4>
            <p className="portfolio-location">📍 Curauma, Valparaíso</p>
            <p>
              Elegante diseño en dos tonos, que le aportan a tu cocina armonía, con la combinación de puertas superiores en melamina blanca alto brillo de 18mm, puertas inferiores en roble cava de 18mm y cubierta de cuarzo blanco galaxy.
            </p>
          </div>
        </div>
      </div>
    </section>
      
      {/* Pie de página y Contacto */}
      <footer className="footer">
        <h3>¿Tienes un proyecto en mente?</h3>
        <p>Escríbenos directamente para asesorarte y agendar tu evaluación.</p>
        <a 
          href="https://wa.me/56973254807" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp"
        >
          Contactar al +56 9 7325 4807
        </a>
        <p className="copyright">© Decomuebles LG - Viña del Mar</p>
      </footer>
    </div>
  );
}

export default App;