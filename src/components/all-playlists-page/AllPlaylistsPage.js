import React from "react";
import Header from "./Header";
import PlaylistContainer from "./PlaylistContainer";
import '../../assets/allPlaylistsStyle.css'

class AllPlaylistsPage extends React.Component {
    componentDidMount() {
        document.title = 'SPALCO - All playlists';
    }

    render() {
        return <div className="all-playlists-page">
            <Header/>
            <PlaylistContainer/>
        </div>
    }
}


export default AllPlaylistsPage;