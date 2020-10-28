import React from "react";
import MainPage from "./components/MainPage/Head";
import AuthorizationForm from "./components/MainPage/Body";
import Head from "./components/all-playlists/Head";
import Header from "./components/all-playlists/Header";
import PlaylistContainer from "./components/all-playlists/PlaylistContainer";

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={MainPage}>
                        <div> <MainPage /> </div>
                        <div> <AuthorizationForm /> </div>
                    </Route>
                    <Route path="/second" exact component={Head}>
                        <div> <Head /> </div>
                        <div> <Header /> </div>
                        <div> <PlaylistContainer /> </div>
                    </Route>

                </div>
            </Router>
        )
    }
}

export default App;