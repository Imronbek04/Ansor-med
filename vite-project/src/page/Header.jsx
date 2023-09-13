import React from 'react'
import Logo from "../img/logo.svg"

export default function Header() {
  return (
    <div>
            <header className="header">
        <div className="container header__container">
            <a href="./index.html" className="header__logo">
                <img src={Logo} width="50" height="50" alt=""/>
                <strong>Ansormed</strong>
            </a>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a  href="#xizmatlar" className="nav__link active">
                            XIZMATLAR
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#dorilar" className="nav__link">
                            DORILAR
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#asal" className="nav__link">
                            ASAL
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#royhatdanotish" className="nav__link">
                            KONTAKTLAR
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#royhatdanotish" className="nav__link">
                            BLOG
                        </a>
                    </li>
                </ul>
            </nav>

            <a className="btn" href="#royhatdanotish">
                Qabulga yozilish
            </a>

        </div>
    </header>
    </div>
  )
}
