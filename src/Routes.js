import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Home from "./pages/Home";
import React from "react";
import './Routes.scss';

export default function Routes() {
    const location = useLocation();
    return (
        <div className="routes">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                >
                    <Switch>
                        <Route path="/project1">
                            <Project1 />
                        </Route>
                        <Route path="/project2">
                            <Project2 />
                        </Route>
                        <Route path="/project3">
                            <Project3 />
                        </Route>
                        <Route path="/project4">
                            <Project1 />
                        </Route>
                        <Route exact="/">
                            <Home />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}