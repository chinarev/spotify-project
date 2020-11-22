import React from "react";
import pic from '../../assets/img/spotify_logo.png'
import {authEndpoint, clientId, redirectUri, scopes} from "../../service/config.js";
import hash from "../../service/hash.js";

class Body extends React.Component {
    onclick() {
        window.location.assign(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`);
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;

        if (_token) {
            // Set token
            this.setState({
                token: _token
            });

        }
    }
//href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
    render() {
        return <div id="main-container">
            <h1 className="main-page">Welcome to SPALCO</h1>
            <h1 className="main-page">Spotify album cover editor</h1>
            <div id="auth-container">
                <img src={pic} id="logo" className="container-element" alt="Spotify logo"/>
                <div className="fields container-element">
                    <input type="email" placeholder="Email" className="main-page"/>
                    <input type="password" placeholder="Password" className="main-page"/>
                </div>                <button className="main-page container-element" onClick={(e) => this.onclick(e)}>Log in</button>
            </div>
        </div>;
    }
}

export default Body;