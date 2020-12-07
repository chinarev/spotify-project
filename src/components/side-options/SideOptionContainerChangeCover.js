import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";
import pic from '../../assets/img/morga.jpg'
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

function getBase64Image(src, callback, outputFormat) {
    const img = new Image();
    img.height = 260;
    img.width = 260;
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let dataURL;
        canvas.height = 260; //Можно сделать 560, тогда фон будет большим, но картинка все еще 260 на 260
        canvas.width = 260;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);

    };

    img.src = src;
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
        var curr_img = localStorage.getItem("selected_playlist_image")
        var playlist_id = localStorage.getItem("selected_playlist_id")
        var new_img;

        getBase64Image(
            pic,
            function(dataUrl) {
                //console.log('RESULT:', dataUrl)
                localStorage.setItem("new_playlist_cover", dataUrl);
            }
        );

        new_img = localStorage.getItem("new_playlist_cover");
        localStorage.setItem("selected_playlist_cover", new_img);
        //console.log(new_img);
        spotifyApi.uploadCustomPlaylistCoverImage(
            playlist_id,
            new_img.substring(new_img.indexOf(",") + 1)
        ).then(r => console.log("r: " + r))
        console.log(localStorage.getItem("selected_playlist_cover"));
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