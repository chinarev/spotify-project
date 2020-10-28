import React from "react";
import pic from '../../assets/img/spotify_logo.png'

class Body extends React.Component {
    onclick () {
        window.location.assign('http://localhost:3000/second/');
    }


    render() {
        return <div className="main-container">
            <h1>Welcome to SPALCO</h1>
            <h1>Spotify album cover editor</h1>
            <div className="auth-container">
                <img src={pic} className="logo container-element" />
                <div className="fields container-element">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="container-element" onClick={(e) => this.onclick(e)}>Log in</button>
            </div>
        </div>;
    }

}

export default Body;