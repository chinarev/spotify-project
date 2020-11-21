import React from "react";
import pic from '../../assets/img/test_user_icon.jpg'

class Header extends React.Component {
    render() {
        return <header className="all-playlists-page">
            <div id="user_info">
                <img src={pic} id="user_icon" width={50} height={50} alt="User profile picture"/>
                <p id="user-name">User name</p>
            </div>
            <button id="log_out">
                Log out
            </button>
        </header>;
    }
}

export default Header;