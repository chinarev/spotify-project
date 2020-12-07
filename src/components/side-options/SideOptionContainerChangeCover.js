import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";
import pic from '../../assets/img/test_album_cover.jpg'
import SpotifyWebApi from "spotify-web-api-js";

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
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        ctx.drawImage(img, 0, 0, img.width, img.height);
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

    onclickUploadCover(){
        var playlist_id = localStorage.getItem("selected_playlist_id")
        let myImage = document.getElementById("myimage").src;
        getBase64Image(
            myImage,
            function(dataUrl) {
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

        reader.onload = function(event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
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
                return <div id="side-options-container">
                    <input type="file" onChange={this.onFileSelected} name="photo" multiple accept="image/*,image/jpeg" id = "myInput"/>
                    <img id="myimage" alt="Test image"/>
                    <button className="side-options" onClick={(e) => this.onclickUploadCover(e)}>
                        Upload cover
                    </button>
                    <button className="side-options">
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