import React from "react";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import {ChromePicker} from 'react-color';

class SideOptionEditContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onclickGallery() {
        window.location.assign(`http://localhost:3000/background_gallery/`);
    }

    render() {
        return <div className="side-options-container" id="edit-container">
            <h1 className="playlists_title" id="constructor_text">Set background image</h1>
            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery</button>
            <button className="side-options">Upload background</button>

            <h1 className="playlists_title" id="constructor_text">Set text properties</h1>

            <div id="text-edit-container">
                <ChromePicker color={this.props.currColor}
                              onChange={this.props.onChange}
                              disableAlpha={true}/>
                <div id="select-container">
                    <SetTextFont font={this.props.currFont} onChange={this.props.onChangeFont}/>
                    <SetTextSize size={this.props.currSize} onChange={this.props.onChangeSize}/>
                </div>
            </div>

            <button className="side-options">Save</button>
            <button className="side-options">Back</button>
        </div>;
    }
}

export default SideOptionEditContainer;