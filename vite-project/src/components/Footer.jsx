import React from 'react'
import Logo from "../img/logo.svg"


export default function Footer() {
  return (
    <div>
        
    <footer className="footer">
        <div className="container footer_container">
            <a href="#" className="footer_logo">
                <img src={Logo} alt="" width="50" height="50"/>
                <p>AnsorMed</p>
            </a>
            <nav className="nav__two">
                <ul className="nav__two__list">
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            XIZMATLAR
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            DORILAR
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#royhatdanotish" className="nav__two__link">
                            ASAL
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#royhatdanotish" className="nav__two__link">
                            KONTAKTLAR
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#royhatdanotish" className="nav__two__link">
                            BLOG
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    </footer>
    </div>
  )
}
