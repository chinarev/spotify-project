import React from "react";
import pic from '../../assets/img/test_user_icon.jpg'
import SpotifyWebApi from "spotify-web-api-js";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.token = new URL(window.location).hash.split('&').filter(function (el) {
            if (el.match('access_token') !== null) return true;
        })[0].split('=')[1];
        console.log("My token: " + this.token);

        this.spotifyApi = new SpotifyWebApi();
        this.spotifyApi.setAccessToken(this.token);
        this.userName = this.getUserName();

        console.log("API in constructor: " + this.spotifyApi);
        console.log("Token in constructor: " + this.token);
        console.log("name in constructor: " + this.userName);
    }


    componentDidMount() {
        console.log("name in mount: " + this.userName);
    }

    getUserName() {
        console.log("API in function: " + this.spotifyApi);
        console.log("Token in function: " + this.token);

        this.spotifyApi.getMe().then(
            function (data) {
                console.log('My name: ', data.display_name);
            },
            function (err) {
                console.error(err);
            }
        );

        return "kek";
    }

    render() {
        console.log("name in render: " + this.userName);
        return <header className="all-playlists-page">
            <div id="user_info">
                <img src={pic} id="user_icon" width={50} height={50} alt="User profile picture"/>
                <p id="user-name">{this.userName}</p>
            </div>
            <button id="log_out">
                Log out
            </button>
        </header>;
    }
}

export default Header;