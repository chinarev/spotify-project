import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";
import SpotifyWebApi from "spotify-web-api-js";
import Popup from "reactjs-popup";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

function getBase64Image(src, callback) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let dataURL;

        //to crop image into square:
        let size = img.naturalHeight;
        let sy = 0;
        let sx = (img.naturalWidth - size) / 2;
        if (size > img.naturalWidth) {
            sy = (size - img.naturalWidth) / 2;
            size = img.naturalWidth;
            sx = 0;
        }
        canvas.height = 500;
        canvas.width = 500;

       ctx.drawImage(img, sx, sy, size, size, 0, 0, canvas.width, canvas.height);

        dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };

    if (img.complete || img.complete === undefined) {
        img.src = "data:image/jpeg;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
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
        localStorage.setItem("page_state", PAGE_STATE.CREATE_CUSTOM_STYLE);
        this.setState({
            curr_page_state: PAGE_STATE.CREATE_CUSTOM_STYLE
        });
    }

    onclickUploadCover() {
        var playlist_id = localStorage.getItem("selected_playlist_id")
        let myImage = document.getElementById("myimage").src;
        console.log("upload clicked")
        getBase64Image(
            myImage,
            function (dataUrl) {
                localStorage.setItem("selected_playlist_image", dataUrl);
                spotifyApi.uploadCustomPlaylistCoverImage(
                    playlist_id,
                    dataUrl.substring(dataUrl.indexOf(",") + 1)
                ).then(() => document.location.reload())
            }
        );

    }

    onFileSelected(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();

        var imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;

        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    }

    onClickChooseStyle() {
        window.location.assign(`http://localhost:3000/style_gallery`);
    }

    render() {
        switch (localStorage.getItem("page_state")) {
            case (PAGE_STATE.SELECTED_PLAYLIST): {
                return <SideOptionsContainer/>
            }
            case (PAGE_STATE.CREATE_CUSTOM_STYLE): {
                return <SideOptionsCreateCustomStyle/>
            }
            default: {

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
                                        <input type="file" onChange={this.onFileSelected} name="photo" multiple
                                               accept="image/*,image/jpeg" id="myInput"/>
                                        <img id="myimage"/>
                                    </div>
                                    <div className="actions">
                                        <button className="button" onClick={(e) => this.onclickUploadCover(e)}>
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
}

export default SideOptionContainerChangeCover;
