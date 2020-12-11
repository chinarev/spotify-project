import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from "./components/main-page/MainPage";
import AllPlaylistsPage from "./components/all-playlists-page/AllPlaylistsPage";
import SelectedPlaylistPage from "./components/selected-playlist-page/SelectedPlaylistPage";
import BackgroundGalleryPage from "./components/background-gallery/BackgroundGalleryPage";
import StyleGalleryPage from "./components/styles-gallery/StyleGalleryPage";
import Constructor from "./components/constructor/Constructor";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={MainPage}/>
                <Route path="/second" exact component={AllPlaylistsPage}/>
                <Route path="/playlist" exact component={SelectedPlaylistPage}/>
                <Route path="/background_gallery" exact component={BackgroundGalleryPage}/>
                <Route path="/style_gallery" exact component={StyleGalleryPage}/>
                <Route path="/constructor" exact component={Constructor}/>
            </Router>
        )
    }


}

export default App;