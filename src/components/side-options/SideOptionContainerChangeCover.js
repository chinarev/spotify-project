import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";
import SpotifyWebApi from "spotify-web-api-js";
import Popup from "reactjs-popup";
import {getBase64Image} from "../styles-gallery/StylesContainer";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

export function onclickUploadCover() {
    let playlist_id = localStorage.getItem("selected_playlist_id")
    let myImage = document.getElementById("myImage").src;

    getBase64Image(myImage).then(url => {
        localStorage.setItem("selected_playlist_image", url);
        spotifyApi.uploadCustomPlaylistCoverImage(
            playlist_id,
            url.substring(url.indexOf(",") + 1)
        ).then(() => document.location.reload())
    });
}

export function onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    let imgTag = document.getElementById("myImage");
    imgTag.title = selectedFile.name;
    reader.onload = function (e) {
        imgTag.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
}

class SideOptionContainerChangeCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.CHANGE_COVER
        };
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.SELECTED_PLAYLIST);
        this.setState({
            curr_page_state: PAGE_STATE.SELECTED_PLAYLIST
        });
        console.log("state in onclickBack: " + localStorage.getItem("page_state"))
    }

    onClickCreateCustomStyle() {
        window.location.assign('http://localhost:3000/constructor');
    }

    onClickChooseStyle() {
        window.location.assign(`http://localhost:3000/style_gallery`);
    }

    render() {
        if (localStorage.getItem("page_state") === PAGE_STATE.SELECTED_PLAYLIST) {
            return <SideOptionsContainer/>
        } else {
            return <div className="side-options-container">
                <Popup
                    trigger={<button className="side-options"> Upload cover </button>}
                    modal
                    nested>
                    {close => (
                        <div id="page-mask">
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="playlists_title header"> Choose cover from your device</div>
                                <div className="content">
                                    <input type="file" onChange={onFileSelected} name="photo" multiple
                                           accept="image/*,image/jpeg" id="myInput"/>
                                    <img id="myImage"/>
                                </div>
                                <div className="actions">
                                    <button className="button" onClick={() => onclickUploadCover()}>
                                        Upload
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
                <button className="side-options" onClick={(e) => this.onClickChooseStyle(e)}>
                    Choose style template
                </button>
                <button className="side-options" onClick={(e) => this.onClickCreateCustomStyle(e)}>
                    Create custom style
                </button>
                <button className="side-options" onClick={(e) => this.onclickBack(e)}>
                    Back
                </button>
            </div>
        }
    }
}

export default SideOptionContainerChangeCover;
