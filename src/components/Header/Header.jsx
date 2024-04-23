import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav id="nav" className="navbar open">
        <div className="menuBasic open">
          <h1 className="menuTitle open">Menú</h1>
          <img
            id="open"
            className="burguerMenu"
            src="./src/assets/Burguer icon.png"
            alt="Abrir el Menú"
          />
          <img
            id="close"
            className="closedMenu"
            src="./src/assets/Close icon.png"
            alt="Cerrar el Menú"
          />
        </div>
        <ul className="navList">
          <hr className="menuLineStyle open zero"></hr>
          <li className="navListItem open one">
            <a href="#inicio">Inicio</a>
          </li>
          <hr className="menuLineStyle open two"></hr>
          <li className="navListItem open three">
            <a href="#animales">Animales en Adopción</a>
          </li>
          <hr className="menuLineStyle open four"></hr>
          <li className="navListItem open five">
            <a href="#colabora">Colabora</a>
          </li>
          <hr className="menuLineStyle open six"></hr>
          <li className="seven">
            <img
              className="navLogo open"
              src="./src/assets/Huellas Amigables.png"
              alt="Logotipo Huellas Amigables"
            />
          </li>
          <hr className="menuLineStyle open height"></hr>
          <li className="navListItem open nine">
            <a href="#nosotros">Quiénes somos</a>
          </li>
          <hr className="menuLineStyle open ten"></hr>
          <li className="navListItem open eleven">
            <a href="#area-privada">Área privada</a>
          </li>
          <hr className="menuLineStyle open twelve"></hr>
          <li className="navListItem open thirteen">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="footprintsLine open">
        <div className="imageFootprintsLine"></div>
        <h1 className="logoName open">Huellas Amigables</h1>
        <div className="imageFootprintsLine open"></div>
      </div>
    </header>
  );
}

export default Header;
