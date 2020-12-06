import React from "react";
import Header from "./Header";
import PlaylistContainer from "./PlaylistContainer";
import '../../assets/allPlaylistsStyle.css'

class AllPlaylistsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: new URL(window.location).hash.split('&').filter(function (el) {
                if (el.match('access_token') !== null) return true;
            })[0].split('=')[1],
        };
        localStorage.setItem('textToken', this.state.token);
    }

    componentDidMount() {
        document.title = 'SPALCO - All playlists';
    }

    render() {
        console.log("Token in all playlists render: " + this.state.token);

        return <div className="all-playlists-page">
            <Header/>
            <h1 id="playlists_title">Your playlists</h1>
            <PlaylistContainer/>
        </div>
    }
}

export default AllPlaylistsPage;