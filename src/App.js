import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from "./components/main-page/MainPage";
import AllPlaylistsPage from "./components/all-playlists-page/AllPlaylistsPage";
import SelectedPlaylistPage from "./components/selected-playlist-page/SelectedPlaylistPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={MainPage}/>
                <Route path="/second" exact component={AllPlaylistsPage}/>
                <Route path="/playlist" exact component={SelectedPlaylistPage}/>
            </Router>
        )
    }
}

export default App;