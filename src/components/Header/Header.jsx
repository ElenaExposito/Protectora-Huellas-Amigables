import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="menuBasic">
          <h1 className="menuTitle">Menú</h1>
          <img
            className="burguerMenu"
            src="./src/assets/Burguer icon.png"
            alt="Icono Menú"
          />
        </div>
        <ul className="navList">
          <hr className="menuLineStyle zero"></hr>
          <li className="navListItem one">
            <a href="#inicio">Inicio</a>
          </li>
          <hr className="menuLineStyle two"></hr>
          <li className="navListItem three">
            <a href="#animales">Animales en Adopción</a>
          </li>
          <hr className="menuLineStyle four"></hr>
          <li className="navListItem five">
            <a href="#colabora">Colabora</a>
          </li>
          <hr className="menuLineStyle six"></hr>
          <li className="seven">
            <img
              className="navLogo"
              src="./src/assets/Huellas Amigables.png"
              alt="Logotipo Huellas Amigables"
            />
          </li>
          <hr className="menuLineStyle height"></hr>
          <li className="navListItem nine">
            <a href="#nosotros">Quiénes somos</a>
          </li>
          <hr className="menuLineStyle ten"></hr>
          <li className="navListItem eleven">
            <a href="#area-privada">Área privada</a>
          </li>
          <hr className="menuLineStyle twelve"></hr>
          <li className="navListItem thirteen">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="footprintsLine">
        <div className="imageFootprintsLine"></div>
        <h1 className="logoName">Huellas Amigables</h1>
        <div className="imageFootprintsLine"></div>
      </div>
    </header>
  );
}

export default Header;
