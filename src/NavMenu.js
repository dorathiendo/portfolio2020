import React, { useState } from "react";
import {
    Link, useLocation,
} from "react-router-dom";
import MenuIcon from './images/menu.svg';
import './NavMenu.scss';

export default function NavMenu({ }) {
    const activeLink = useLocation().pathname.replace('/', '');
    const [isOpen, openMenu] = useState(false);
    return (
        <div className="nav-menu">
            <div className={`header`}>
                <button className="mobile" onClick={() => openMenu(!isOpen)}>
                    <img src={MenuIcon} alt=""/>
                </button>
                <h1>Dora Do</h1>
                <h1>2020</h1>
            </div>
            <div className={`nav-items ${isOpen ? 'open': ''}`} onClick={() => openMenu(false)}>
                <Link to="/" className={activeLink === '' ? 'active': ''}>Home</Link>
                <Link to="/project1" className={activeLink === 'project1' ? 'active': ''}>
                    <span className="index">1</span>
                    <span className="title">
                        <span>"Art-chtecture"</span>
                        <span>Photography</span>
                    </span>

                </Link>
                <Link to="/project2" className={activeLink === 'project2' ? 'active': ''}>
                    <span className="index">2</span>
                    <span className="title">
                        <span>Family Room</span>
                        <span>Product Photography</span>
                    </span>
                </Link>
                <Link to="/project3" className={activeLink === 'project3' ? 'active': ''}>
                    <span className="index">3</span>
                    <span className="title">
                        <span>Pottery By Audrey</span>
                        <span>Product Photography</span>
                    </span>
                </Link>
                <Link to="/project4" className={activeLink === 'project4' ? 'active': ''}>
                    <span className="index">4</span>
                    <span className="title">
                        <span>Billie Marie Fall Collection</span>
                        <span>Product Photography</span>
                    </span>
                </Link>
            </div>
        </div>
    );
}