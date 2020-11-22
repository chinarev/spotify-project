import React from "react";

class SideOptionsContainer extends React.Component {
    render() {
        return <div id="side-options-container">
            <button className="side-options">
                Change name
            </button>
            <button className="side-options">
                Change cover
            </button>
        </div>
    }
}

export default SideOptionsContainer;