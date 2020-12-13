import React from "react";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import {ChromePicker} from 'react-color';
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import Popup from "reactjs-popup";
import SpotifyWebApi from "spotify-web-api-js";
import {getBase64Image} from "../styles-gallery/StylesContainer";
import {onFileSelected} from "../side-options/SideOptionContainerChangeCover";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class SideOptionEditContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onclickGallery() {
        window.location.assign(`http://localhost:3000/background_gallery/`);
    }

    onclickBack() {
        window.location.assign(`http://localhost:3000/playlist/`);
    }

    onclickUploadCover() {
        var playlist_id = localStorage.getItem("selected_playlist_id")
        spotifyApi.uploadCustomPlaylistCoverImage(
            playlist_id,
            document.getElementById("myimage").src
        ).then(() => document.location.reload())
    }

    render() {
        return <div className="side-options-container" id="edit-container">
            <h1 className="playlists_title" id="constructor_text">Set background image</h1>
            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery</button>
            <button className="side-options">Upload background</button>

            <h1 className="playlists_title" id="constructor_text">Set text properties</h1>

            <div id="text-edit-container">
            <Popup
                trigger={<button className="side-options"> Upload background </button>}
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

            <div>
                <ChromePicker color={this.props.currColor}
                              onChange={this.props.onChange}
                              disableAlpha={true}/>
                <div id="select-container">
                    <SetTextFont font={this.props.currFont} onChange={this.props.onChangeFont}/>
                    <SetTextSize size={this.props.currSize} onChange={this.props.onChangeSize}/>
                </div>
            </div>

            <button className="side-options">Save</button>
            <button className="side-options" onClick={(e) => this.onclickBack(e)}>Back</button>
        </div>;
    }
}

export default SideOptionEditContainer;