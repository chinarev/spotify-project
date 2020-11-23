import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import {authEndpoint, clientId, redirectUri, scopes} from "../../service/config";


var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "<User name>",
            image: null
        };

    }


    getUser = () => {
        spotifyApi.getMe()
            .then(data => this.setState({
                user_name: data.display_name,
                image: data.images[0].url
            }));
    }


    componentDidMount() {
        this.getUser();
        console.log("name in mount: " + this.state.user_name);
    }

    onclick() {
        window.location.assign(`http://localhost:3000/`);
    }

    render() {
        return <header className="all-playlists-page">
            <div id="user_info">
                <img src={this.state.image} id="user_icon" width={50} height={50} alt="User profile picture"/>
                <p id="user-name">{this.state.user_name}</p>
            </div>
            <button id="log_out" onClick={(e) => this.onclick(e)}>
                Log out
            </button>
        </header>;
    }
}

export default Header;