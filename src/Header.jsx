import React, { Component } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
     <div className="header">
        <div className="cabecalho">
          <nav className="menuNavegacao">
            <div className="logoSite"><img src="" alt="" /> LogoLogoLgog</div>
            <input type="text" className="busca" placeholder='Buscar'/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/comprar">Comprar</Link>
                <ul className="dropdown">
                  <li>Hatch</li>
                  <li>Sedan</li>
                  <li>SUV</li>
                </ul>
              </li>
              <li><Link to="/vender">Vender</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
            
          </nav>
        </div>
     </div>

    )
  }
}
