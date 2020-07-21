import React from "react";
import './NavMenu.scss';

export default function NavMenu({ onClickItem }) {
    const handleClick = (e, id) => {
        window.history.pushState({}, id, id);

        const actives = document.getElementsByClassName('active');
        for (let el of actives) {
            el.classList.remove('active')
        }
        e.currentTarget.classList.add('active');
        onClickItem(id);
    };
    return (
        <div className="nav-menu">
            <h1>Dora Do 2020</h1>
            <span onClick={(e) => handleClick(e, "home")} className="active">Home</span>
            <span onClick={(e) => handleClick(e, "project1")}>Project #1</span>
            <span onClick={(e) => handleClick(e, "project2")}>Project #2</span>
        </div>
    );
}