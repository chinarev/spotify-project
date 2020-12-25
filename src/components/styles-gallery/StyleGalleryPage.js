import React from "react";
import Header from "../all-playlists-page/Header";
import '../../assets/allPlaylistsStyle.css'
import StylesContainer from "./StylesContainer";

class StyleGalleryPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor page")
        const search = props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        this.state = {
            playlistID: params.get('playlistID'),
        }
    }

    componentDidMount() {
        document.title = 'SPALCO - Cover style gallery';
        console.log("component did mount page")
    }

    render() {
        console.log("render page")

        return <div className="all-playlists-page">
            <Header/>
            <h1 className="playlists_title">Available styles</h1>
            <StylesContainer playlistID={this.state.playlistID}/>
        </div>
    }
}

export default StyleGalleryPage;