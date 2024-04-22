import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="navList">
          <li className="navListItem">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="navListItem">
            <a href="#animales">Animales en Adopción</a>
          </li>
          <li className="navListItem">
            <a href="#colabora">Colabora</a>
          </li>
          <li>
            <img
              className="navLogo"
              src="./src/assets/Huellas Amigables.png"
              alt="Logotipo Huellas Amigables"
            />
          </li>
          <li className="navListItem">
            <a href="#nosotros">Quiénes somos</a>
          </li>
          <li className="navListItem">
            <a href="#area-privada">Área privada</a>
          </li>
          <li className="navListItem">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
