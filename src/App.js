import React, {useRef} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import NavMenu from './NavMenu';
import Content from "./Content";
import Home from './pages/Home';
import './App.scss';
import Project1 from "./pages/Project1";
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
            <Router>
                <NavMenu
                    // onClickItem={(id) => executeScroll(id)}
                />
                <Switch>
                    <Route path="/project1">
                        <Project1 />
                    </Route>
                    <Route exact="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
