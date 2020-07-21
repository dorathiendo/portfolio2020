import React, {useRef} from 'react';
import logo from './logo.svg';
import NavMenu from './NavMenu';
import Content from "./Content";
import Home from './pages/Home';
import './App.scss';

function App() {
    const contentWrapperRef = useRef(null)
    const executeScroll = (id) => {
        const div = document.getElementById(id);
        div.classList.remove("enter")
        contentWrapperRef.current.scrollTo(0, div.offsetTop);
        setTimeout(() =>  div.classList.add("enter"), 100)
    };
    return (
        <div className="App">
            <NavMenu
                onClickItem={(id) => executeScroll(id)}
            />
            <div className="content-wrapper" ref={contentWrapperRef}>
                <Home />
                <Content id="project1" className="enter" title="Project #1"/>
                <Content id="project2" title="Project #2"/>
            </div>
        </div>
    );
}

export default App;
