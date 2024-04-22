import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="navList">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#animales">Animales en Adopción</a>
          </li>
          <li>
            <a href="#colabora">Colabora</a>
          </li>
          <li className="logo">
            <img src="/ruta-al-logotipo.png" alt="Logotipo" />
          </li>
          <li>
            <a href="#nosotros">Quiénes somos</a>
          </li>
          <li>
            <a href="#area-privada">Área privada</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
