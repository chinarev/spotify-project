import React from "react";
import Header from "./Header";
import PlaylistContainer from "./PlaylistContainer";
import '../../assets/allPlaylistsStyle.css'

class AllPlaylistsPage extends React.Component {
    constructor(props) {
        super(props);
        let curr_token = localStorage.getItem('textToken');
        if (curr_token === "none") {
            this.state = {
                token: new URL(window.location).hash.split('&').filter(function (el) {
                    if (el.match('access_token') !== null) return true;
                })[0].split('=')[1],
            };
            localStorage.setItem('textToken', this.state.token);
            document.location.reload();
        } else {
            this.state = {
                token: curr_token
            };
        }
    }

    componentDidMount() {
        document.title = 'SPALCO - All playlists';
    }

    render() {
        return <div className="all-playlists-page">
            <Header/>
            <h1 className="playlists_title">Your playlists</h1>
            <PlaylistContainer/>
        </div>
    }
}

export default AllPlaylistsPage;