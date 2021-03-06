import React from "react";
import Header from "../all-playlists-page/Header";
import '../../assets/allPlaylistsStyle.css'
import BackgroundsContainer from "./BackgroundsContainer";

class BackgroundGalleryPage extends React.Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        this.state = {
            playlistID: params.get('playlistID')
        }
    }

    componentDidMount() {
        document.title = 'SPALCO - Background gallery';
    }

    render() {
        return <div className="all-playlists-page">
            <Header/>
            <h1 className="playlists_title">Available background images</h1>
            <BackgroundsContainer onClick={this.props.onclickGallery} playlistID={this.state.playlistID}/>
        </div>
    }
}

export default BackgroundGalleryPage;