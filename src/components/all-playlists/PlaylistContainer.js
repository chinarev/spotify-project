import React from "react";
import pic from '../../assets/img/test_album_cover.jpg'
import '../../assets/AllPlaylistsStyle.css'

class PlaylistContainer extends React.Component {
    render() {
        return <div className="grid-container">
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 1</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 2</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 3</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 4</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 5</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 6</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 7</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 8</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 9</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 10</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 11</p>
            </div>
            <div className="grid-item">
                <img src={pic} className="album-cover" />
                <p className="playlist-name">playlist 12</p>
            </div>
        </div>;
    }

}

export default PlaylistContainer;