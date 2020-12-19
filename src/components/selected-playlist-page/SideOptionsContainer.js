import React from "react";
import SideOptionContainerChangeCover from "../side-options/SideOptionContainerChangeCover";
import SpotifyWebApi from "spotify-web-api-js";
import '../../assets/editTextModal.css'
import Popup from "reactjs-popup";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));
export const PAGE_STATE = {
    SELECTED_PLAYLIST: "selected_playlist",
    CHANGE_COVER: "change_cover"
};

class SideOptionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.SELECTED_PLAYLIST
        };
        localStorage.setItem("page_state", PAGE_STATE.SELECTED_PLAYLIST);
    }

    onclickChangeCover() {
        this.setState({
            curr_page_state: PAGE_STATE.CHANGE_COVER
        });
        localStorage.setItem("page_state", PAGE_STATE.CHANGE_COVER);
        console.log("onclickChangeCover state:" + localStorage.getItem("page_state"));

    }

    onclickName() {
        let playlist_id = localStorage.getItem("selected_playlist_id")
        spotifyApi.changePlaylistDetails(
            playlist_id,
            {name: document.getElementById("nameInput").value});
        localStorage.setItem("selected_playlist_name", document.getElementById("nameInput").value);
        document.location.reload()
    }

    onclickChangeBackToAll() {
        window.location.assign(`http://localhost:3000/second/`);
    }

    render() {
        console.log("state in render: " + localStorage.getItem("page_state"))
        if (localStorage.getItem("page_state") === PAGE_STATE.CHANGE_COVER) {
            return <SideOptionContainerChangeCover/>
        } else {
            return <div className="side-options-container">
                <Popup
                    trigger={<button className="side-options"> Change name </button>}
                    modal nested>
                    {close => (
                        <div id="page-mask">
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="playlists_title header">New name:</div>
                                <input type="text" id="nameInput"/>
                                <div className="actions">
                                    <button className="button" onClick={(e) => this.onclickName(e)}>
                                        Save
                                    </button>
                                    <button className="button" onClick={() => {
                                        close();
                                    }}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
                <button onClick={(e) => this.onclickChangeCover(e)} className="side-options">
                    Change cover
                </button>
                <button onClick={(e) => this.onclickChangeBackToAll(e)} className="side-options">
                    Back to all playlists
                </button>
            </div>
        }
    }
}

export default SideOptionsContainer;