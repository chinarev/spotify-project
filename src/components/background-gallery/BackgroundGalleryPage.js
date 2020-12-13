import React from "react";
import Header from "../all-playlists-page/Header";
import '../../assets/allPlaylistsStyle.css'
import BackgroundsContainer from "./BackgroundsContainer";

class BackgroundGalleryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = 'SPALCO - Background gallery';
    }

    render() {
        return <div className="all-playlists-page">
            <Header/>
            <h1 className="playlists_title">Available background images</h1>
            <BackgroundsContainer onClick={this.props.onclickGallery}/>
        </div>
    }
}

export default BackgroundGalleryPage;