import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

class Header extends React.Component {
    static spotifyApi = new SpotifyWebApi();

    constructor(props) {
        super(props);
        this.state = {
            user_name: "<User name>",
            image: null,
            user_id: null
        };
        Header.spotifyApi.setAccessToken(localStorage.getItem("textToken"));
    }

    getUser = () => {
        Header.spotifyApi.getMe()
            .then(data => this.setState({
                user_name: data.display_name,
                image: data.images[0].url,
                user_id: data.id
            }));
    }

    componentDidMount() {
        this.getUser();
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