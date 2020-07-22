import React, { useState } from "react";
import {
    Link, useLocation,
} from "react-router-dom";
import MenuIcon from './images/menu.svg';
import './NavMenu.scss';

export default function NavMenu({ onClickItem }) {
    const activeLink = useLocation().pathname.replace('/', '');
    const [isOpen, openMenu] = useState(false);
    // const handleClick = (e, id) => {
    //     window.location.hash = '#' + id;
    //
    //     const actives = document.getElementsByClassName('active');
    //     for (let el of actives) {
    //         el.classList.remove('active')
    //     }
    //     e.currentTarget.classList.add('active');
    //     onClickItem(id);
    // };
    return (
        <div className="nav-menu">
            <div className={`header`}>
                <button className="mobile" onClick={() => openMenu(!isOpen)}>
                    <img src={MenuIcon} alt=""/>
                </button>
                <h1>Dora Do</h1>
                <h1>2020</h1>
            </div>
            <div className={`nav-items ${isOpen ? 'open': ''}`}>
                <Link to="/" className={activeLink === '' ? 'active': ''}>Home</Link>
                <Link to="/project1" className={activeLink === 'project1' ? 'active': ''}>
                    <span className="index">1</span>
                    <span className="title">
                        <span>"Art-chtecture"</span>
                        <span>Photography</span>
                    </span>

                </Link>
                <Link to="/project1" className={activeLink === 'project2' ? 'active': ''}>
                    <span className="index">2</span>
                    <span className="title">
                        <span>Bay Area Tennis Club</span>
                        <span>Web Design</span>
                    </span>
                </Link>
                <Link to="/project1" className={activeLink === 'project3' ? 'active': ''}>
                    <span className="index">3</span>
                    <span className="title">
                        <span>Film Dev App</span>
                        <span>App Design</span>
                    </span>
                </Link>
                <Link to="/project1" className={activeLink === 'project4' ? 'active': ''}>
                    <span className="index">4</span>
                    <span className="title">
                        <span>Billie Marie Fall Collection</span>
                        <span>Product Photography</span>
                    </span>
                </Link>

                {/*<span onClick={(e) => handleClick(e, "project2")}>Project #2</span>*/}

            </div>
        </div>
    );
}