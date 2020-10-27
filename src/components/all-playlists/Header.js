import React from "react";
import pic from '../../assets/img/test_user_icon.jpg'
import '../../assets/allPlaylistsStyle.css'

class Header extends React.Component {
    render() {
        return <header>
            <div className="user_info">
                <img src={pic} className="user_icon" width={50} height={50} />
                <p>User name</p>
            </div>
            <button className="log_out">
                Log out
            </button>
        </header>;
    }

}

export default Header;