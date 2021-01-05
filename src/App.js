import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Chat from "./components/chat/Chat.js";

class App extends Component {
    render() {
        return (
            //BEM naming convention
            <div className="app">
                <Router>
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
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
