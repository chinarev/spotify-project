import React from "react";
import pic from '../../assets/img/spotify_logo.png'

class Body extends React.Component {
    onclick() {
        window.location.assign('http://localhost:3000/second/');
    }

    render() {
        return <div id="main-container">
            <h1 className="main-page">Welcome to SPALCO</h1>
            <h1 className="main-page">Spotify album cover editor</h1>
            <div id="auth-container">
                <img src={pic} id="logo" className="container-element" alt="Spotify logo"/>
                <div className="fields container-element">
                    <input type="email" placeholder="Email" className="main-page"/>
                    <input type="password" placeholder="Password" className="main-page"/>
                </div>
                <button className="main-page container-element" onClick={(e) => this.onclick(e)}>Log in</button>
            </div>
        </div>;
    }
}

export default Body;