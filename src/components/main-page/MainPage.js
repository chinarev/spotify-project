import React from "react";
import '../../assets/mainPageStyle.css'
import pic from "../../assets/img/spotify_logo.png";
import {authEndpoint, clientId, redirectUri, scopes} from "../../service/config.js";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem('textToken', "none");
    }

    onclick() {
        window.location.assign(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`);
    }

    componentDidMount() {
        document.title = 'SPALCO - Main page';
    }

    render() {
        return <div className="main-page">
            <div id="main-container">
                <h1 className="main-page">Welcome to SPALCO</h1>
                <h1 className="main-page">Spotify album cover editor</h1>
                <div id="auth-container">
                    <img src={pic} id="logo" className="container-element" alt="Spotify logo"/>
                    <button className="main-page container-element" onClick={(e) => this.onclick(e)}>Log in</button>
                </div>
            </div>
        </div>;
    }
}

export default MainPage;