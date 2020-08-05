import React, {useRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation, BrowserRouter,
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import NavMenu from './NavMenu';
import Routes from './Routes';
import Home from './pages/Home';
import Project1 from "./pages/Project1";
import './App.scss';
import './Content.scss';

function App() {
    const contentWrapperRef = useRef(null)
    // const executeScroll = (id) => {
    //     const div = document.getElementById(id);
    //     div.classList.remove("enter")
    //     contentWrapperRef.current.scrollTo(0, div.offsetTop);
    //     setTimeout(() =>  div.classList.add("enter"), 100)
    // };
    return (
        <div className="App">

            {/*<div className="content-wrapper" ref={contentWrapperRef}>*/}
            {/*    <Home />*/}
            {/*    <Project1 id="project1" className="enter" title="Project #1"/>*/}
            {/*    /!*<Content id="project2" title="Project #2"/>*!/*/}
            {/*</div>*/}
            <BrowserRouter>
                <NavMenu/>
                <Routes />
            </BrowserRouter>
        </div>
    );
}



export default App;
