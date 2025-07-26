import { Instagram, Linkedin, X, Mail } from "lucide-react"
import { LogoEmpresa } from "public/icons/LogoEmpresa"
import "./Footer.scss"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Logo Section */}
          <div>
            <div className="footer__logo">
              <LogoEmpresa color="#FFFFFF" />
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="footer__menu-title">Menú</h3>
            <nav className="footer__menu-nav">
              <a href="#" className="footer__menu-link">
                Item 1
              </a>
              <a href="#" className="footer__menu-link">
                Item 2
              </a>
              <a href="#" className="footer__menu-link">
                Item 3
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="footer__contact-title">Contacto</h3>
            <div className="footer__contact-content">
              <a href="mailto:correo@empresa.com" className="footer__contact-email">
                <Mail className="icon" />
                <span>correo@empresa.com</span>
              </a>

              {/* Social Media Icons */}
              <div className="footer__contact-social">
                <a href="#" className="link" aria-label="Instagram">
                  <Instagram className="icon" />
                </a>
                <a href="#" className="link" aria-label="LinkedIn">
                  <Linkedin className="icon" />
                </a>
                <a href="#" className="link" aria-label="X (Twitter)">
                  <X className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  )
}
