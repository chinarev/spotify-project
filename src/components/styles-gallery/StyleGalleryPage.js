import React from "react";
import Header from "../all-playlists-page/Header";
import '../../assets/allPlaylistsStyle.css'
import BackgroundsContainer from "./StylesContainer";

class StyleGalleryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = 'SPALCO - Cover style gallery';
    }

    render() {
        return <div className="all-playlists-page">
            <Header/>
            <h1 id="playlists_title">Available styles</h1>
            <BackgroundsContainer/>
        </div>
    }
}

export default StyleGalleryPage;