import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../static/components.module.scss";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('/'); // default to home

    const toggleActive = (path: string) => {
        setActiveLink(path);
    };

    return (
        <>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <NavLink to="/" className={activeLink === '/' ? style.linkActive : style.navLink} onClick={() => toggleActive('/')}>
                                <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;&nbsp;&nbsp;Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            <a className={activeLink === '/products' ? style.linkActive : style.navLink} onClick={() => toggleActive('/products')}>Products</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/utility/">
                            <a className={activeLink === '/utility' ? style.linkActive : style.navLink} onClick={() => toggleActive('/utility')}>Utility</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">
                            <a className={activeLink === '/links' ? style.linkActive : style.navLink} onClick={() => toggleActive('/links')}>Links</a>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
