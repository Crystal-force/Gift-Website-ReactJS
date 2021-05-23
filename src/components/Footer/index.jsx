import React, { Component } from 'react'
import { Facebook, Instagram, Logo, Twitter } from '../../assets/icons'
import './style.scss'
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="triangle" />
        <div className="main">
          <div className="social-login">
            <div className="logo"><Logo /></div>
            <div className="social-login-buttons">
              <div className="social-login-button">
                <Facebook />
              </div>
              <div className="social-login-button">
                <Twitter />
              </div>
              <div className="social-login-button">
                <Instagram />
              </div>
            </div>
          </div>

          <div className="app-information">
            <div className="title">Información importante</div>
            <ul>
              <li>Política de Privacidad</li>
              <li>Términos de Uso</li>
              <li>Uso de cookies</li>
            </ul>
          </div>
          <div className="play-store">
            <div className="title">Interactúa con nosotros</div>
            <div className="store-buttons">
              <div className="store-button gp"></div>
              <div className="store-button as"></div>
            </div>
            <div className="copyright">Gift2Gift ® Todos los derechos reservados</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer