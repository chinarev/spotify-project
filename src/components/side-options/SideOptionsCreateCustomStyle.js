import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionContainerChangeCover from "./SideOptionContainerChangeCover";
import SideOptionsSetBackground from "./SideOptionsSetBackground";
import SideOptionEditText from "./SideOptionEditText";
import SetColorForm from "../text-edit-model/SetColorForm";
import Popup from "reactjs-popup";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

var myImg=localStorage.getItem("selected_playlist_image")
let text_settings = {
    font_size: localStorage.getItem("preview_playlist_size"),
    text_color: localStorage.getItem("preview_playlist_color"),
    font: localStorage.getItem("preview_playlist_font"),
}

class SideOptionsCreateCustomStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.CREATE_CUSTOM_STYLE
        };
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.CHANGE_COVER);
        this.setState({
            curr_page_state: PAGE_STATE.CHANGE_COVER
        });
        console.log("state in onclickBack: " + localStorage.getItem("page_state"))
    }

    onclickSetBackgroundImage() {
        localStorage.setItem("page_state", PAGE_STATE.SET_BACKGROUND_IMAGE);
        this.setState({
            curr_page_state: PAGE_STATE.SET_BACKGROUND_IMAGE
        });

    }

    onclickEditText() {
        localStorage.setItem("page_state", PAGE_STATE.EDIT_TEXT_PROPERTIES);
        this.setState({
            curr_page_state: PAGE_STATE.EDIT_TEXT_PROPERTIES
        });
    }

    onclickSave() {
        window.location.assign(`http://localhost:3000/playlist`);
    }

    render() {
        switch (localStorage.getItem("page_state")) {
            case (PAGE_STATE.CHANGE_COVER): {
                return <SideOptionContainerChangeCover/>
            }
            case (PAGE_STATE.SET_BACKGROUND_IMAGE) : {
                return <SideOptionsSetBackground/>
            }
            case (PAGE_STATE.EDIT_TEXT_PROPERTIES) : {
                return <SideOptionEditText/>
            }
            default: {
                return <div id="side-options-container">
                    <button className="side-options" onClick={(e) => this.onclickSetBackgroundImage(e)}>
                        Set background image
                    </button>
                    <Popup
                        trigger={<button className="side-options"> Edit text properties </button>}
                        modal
                        nested>
                        {close => (
                            <div className="modal_text">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header"> Edit text</div>
                                <div className="content">
                                    {' '}
                                    <img src = {myImg} id="myimage"/>
                                    <div id="side-options-editText-container">
                                        <div>
                                            <SetColorForm/>
                                        </div>
                                        <div>
                                            <SetTextFont/>
                                        </div>
                                        <div>
                                            <SetTextSize/>
                                        </div>
                                        <button className="buttonEditText" onClick={(e) => this.onclickEditText(e)}>
                                            Apply
                                        </button>
                                        <button className="buttonEditText" onClick={() => {
                                            close();
                                        }}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                    <button className="side-options" onClick={(e) => this.onclickSave(e)}>
                        Save
                    </button>
                    <button className="side-options" onClick={(e) => this.onclickBack(e)}>
                        Back
                    </button>
                </div>
            }
        }
    }
}

export default SideOptionsCreateCustomStyle;