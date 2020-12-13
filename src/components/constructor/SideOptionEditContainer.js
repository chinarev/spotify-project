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
        return <div id="side-options-container">
            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery</button>
            <button className="side-options">Upload background</button>
            <div>
                <ChromePicker color={this.props.currColor}
                              onChange={this.props.onChange}
                              disableAlpha={true}/>
            </div>
            <div>
                <SetTextFont font={this.props.currFont} onChange={this.props.onChangeFont}/>
            </div>
            <div>
                <SetTextSize size={this.props.currSize} onChange={this.props.onChangeSize}/>
            </div>

            <button className="side-options">Save</button>
            <button className="side-options">Back</button>
        </div>;
    }
}

export default SideOptionEditContainer;