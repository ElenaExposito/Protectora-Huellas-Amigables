import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <nav id="nav" className="navbar open">
        <div className="menuBasic open">
          <h1 className="menuTitle open">Menú</h1>
          {isMenuOpen ? null : (
            <img
              className="navLogo open"
              src="./src/assets/Huellas Amigables.png"
              alt="Logotipo Huellas Amigables"
            />
          )}
          <button onClick={handleOpenMenu} className="mobile">
            {isMenuOpen ? (
              <img
                className="burguerMenu"
                src="./src/assets/burger-icon.png"
                alt="Abrir el Menú"
              />
            ) : (
              <img
                className="closedMenu"
                src="./src/assets/close-icon.png"
                alt="Cerrar el Menú"
              />
            )}
          </button>
        </div>
        {isMenuOpen ? (
          <ul className="navList mobile">
            <hr className="menuLineStyle open"></hr>
            <li className="navListItem open">
              <a href="#inicio">Inicio</a>
            </li>
            <hr className="menuLineStyle open"></hr>
            <li className="navListItem open">
              <a href="#animales">Animales en Adopción</a>
            </li>
            <hr className="menuLineStyle open"></hr>
            <li className="navListItem open">
              <a href="#colabora">Colabora</a>
            </li>
            <hr className="menuLineStyle open"></hr>

            <li className="navListItem open">
              <a href="#nosotros">Quiénes somos</a>
            </li>
            <hr className="menuLineStyle open"></hr>
            <li className="navListItem open">
              <a href="#area-privada">Área privada</a>
            </li>
            <hr className="menuLineStyle open"></hr>
            <li className="navListItem open">
              <a href="#contacto">Contacto</a>
            </li>
            <hr className="menuLineStyle open"></hr>
            <li>
              <img
                className="navLogo open"
                src="./src/assets/Huellas Amigables.png"
                alt="Logotipo Huellas Amigables"
              />
            </li>
          </ul>
        ) : null}
        <ul className="navList desktop">
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
      <div className="footprintsLine open">
        <div className="imageFootprintsLine"></div>
        <h1 className="logoName open">Huellas Amigables</h1>
        <div className="imageFootprintsLine open"></div>
      </div>
    </header>
  );
}

export default Header;
