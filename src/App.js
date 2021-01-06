import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent.jsx";
import SidebarComponent from "./components/sidebar/SidebarComponent.jsx";
import Chat from "./components/chat/Chat.js";

class App extends Component {
    render() {
        return (
            //BEM naming convention
            <div className="app">
                <Router>
                    <HeaderComponent/>
                    <div className="app__body">
                        <SidebarComponent/>
                        <Switch>
                            <Route path="/channels/:id">
                                <Chat/>
                            </Route>
                            <Route path="/">
                                <h1>Welcome</h1>
                            </Route>
                        </Switch>
                        {/*Step 2. Build Side Bar*/}
                        {/*Step 3. React-Router -> Chat Screen*/}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
