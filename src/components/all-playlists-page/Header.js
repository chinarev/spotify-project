import React from "react";
import pic from '../../assets/img/test_user_icon.jpg'
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_name: "<User name>"
        };

        this.token = new URL(window.location).hash.split('&').filter(function (el) {
            if (el.match('access_token') !== null) return true;
        })[0].split('=')[1];
        console.log("My token: " + this.token);
        spotifyApi.setAccessToken(this.token);

        console.log("API in constructor: " + spotifyApi);
        console.log("Token in constructor: " + this.token);
        console.log("name in constructor: " + this.state.user_name);
    }


    getUser = () => {
        spotifyApi.getMe()
            .then(data => this.setState({user_name: data.display_name}));
    }


    componentDidMount() {
        this.getUser();
        console.log("name in mount: " + this.state.user_name);
    }


    render() {
        return <header className="all-playlists-page">
            <div id="user_info">
                <img src={pic} id="user_icon" width={50} height={50} alt="User profile picture"/>
                <p id="user-name">{this.state.user_name}</p>
            </div>
            <button id="log_out">
                Log out
            </button>
        </header>;
    }
}

export default Header;