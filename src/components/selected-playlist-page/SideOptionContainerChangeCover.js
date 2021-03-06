import React from "react";
import {PAGE_STATE} from "./SideOptionsContainer";
import SideOptionsContainer from "./SideOptionsContainer";
import Header from "../all-playlists-page/Header";
import Popup from "reactjs-popup";
import {getBase64Image} from "../../service/drawText";

class SideOptionContainerChangeCover extends React.Component {
    static onFileSelected(event) {
        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        let imgTag = document.getElementById("myImage");
        imgTag.title = selectedFile.name;
        reader.onload = function (e) {
            imgTag.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.CHANGE_COVER
        };
    }

    onclickUploadCover(playlist_id) {
        let myImage = document.getElementById("myImage").src;

        getBase64Image(myImage).then(url => {
            Header.spotifyApi.uploadCustomPlaylistCoverImage(
                playlist_id,
                url.substring(url.indexOf(",") + 1)
            ).then(() => document.location.reload())
        });
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.SELECTED_PLAYLIST);
        this.setState({
            curr_page_state: PAGE_STATE.SELECTED_PLAYLIST
        });
    }

    onClickCreateCustomStyle() {
        window.location.assign(`http://localhost:3000/constructor?playlistID=${this.props.id}`);
    }

    onClickChooseStyle() {
        window.location.assign(`http://localhost:3000/style_gallery?playlistID=${this.props.id}`);
    }

    render() {
        if (localStorage.getItem("page_state") === PAGE_STATE.SELECTED_PLAYLIST) {
            return <SideOptionsContainer id={this.props.id}/>
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
                                    <input type="file" onChange={SideOptionContainerChangeCover.onFileSelected} name="photo" multiple
                                           accept="image/*,image/jpeg" id="myInput"/>
                                    <img id="myImage"/>
                                </div>
                                <div className="actions">
                                    <button className="button" onClick={() => this.onclickUploadCover(this.props.id)}>
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
