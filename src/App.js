import React from "react";
import MainPage from "./components/MainPage/MainPage";
import AutorizationForm from "./components/MainPage/AutorizationForm";
import AllPlaylists from "./components/all-playlists/AllPlaylists";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={MainPage}>
                        <div> <MainPage /> </div>
                        <div> <AutorizationForm /> </div>
                    </Route>
                    <Route path="/second" exact component={AllPlaylists}/>

                </div>
            </Router>
        )
    }
}

export default App;