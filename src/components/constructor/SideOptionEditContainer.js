import React from "react";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import {ChromePicker} from 'react-color';
import Popup from "reactjs-popup";
import {spotifyApi} from "../all-playlists-page/Header";
import {onFileSelected} from "../side-options/SideOptionContainerChangeCover";
import {getBase64Image} from "../styles-gallery/StylesContainer";

class SideOptionEditContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onclickGallery() {
        window.location.assign(`http://localhost:3000/background_gallery?playlistID=${this.props.playlistID}`);
    }

    onclickBack() {
        window.location.assign(`http://localhost:3000/playlist?id=${this.props.playlistID}`);
    }

    onclickSave() {
        let playlist_id = this.props.playlistID;

        getBase64Image(this.props.currPreview).then(url => {
                    spotifyApi.uploadCustomPlaylistCoverImage(
                        playlist_id,
                        url.substring(url.indexOf(",") + 1)
                    ).then(() =>  window.location.assign(`http://localhost:3000/playlist?id=${this.props.playlistID}`))
        });
    }

    componentDidMount() {
        document.getElementById('textInput').addEventListener('input', this.props.changeInput);
    }

    render() {
        return <div className="side-options-container" id="edit-container">
            <h1 className="playlists_title" id="constructor_text">Set background image</h1>
            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery</button>
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
                                <img id="myImage"/>
                            </div>
                            <div className="actions">
                                <button className="button" onClick={this.props.onClickUpload} >
                                    Upload
                                </button>
                                <button className="button" id="closeID" onClick={() => {
                                    close();
                                }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>

            <h1 className="playlists_title" id="constructor_text">Set text properties</h1>

            <div id="text-edit-container">
                <ChromePicker color={this.props.currColor}
                              onChange={this.props.onChange}
                              disableAlpha={true}/>
                <div id="select-container">
                    <label id="select-label">
                        Enter text:
                        <input type="text" id="textInput" defaultValue={localStorage.getItem('selected_playlist_name')}/>
                    </label>
                    <SetTextFont font={this.props.currFont} onChange={this.props.onChangeFont}/>
                    <SetTextSize size={this.props.currSize} onChange={this.props.onChangeSize}/>
                </div>
            </div>

            <button className="side-options" onClick={(e) => this.onclickSave(e)}>Save</button>
            <button className="side-options" onClick={(e) => this.onclickBack(e)}>Back</button>
        </div>;
    }
}

export default SideOptionEditContainer;