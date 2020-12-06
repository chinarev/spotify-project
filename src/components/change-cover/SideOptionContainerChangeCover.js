import React from "react";

class SideOptionContainerChangeCover extends React.Component {
    render() {
        return <div id="side-options-container">
            <button className="side-options">
                Choose style template
            </button>
            <button className="side-options">
                Create custom style
            </button>
            <button className="side-options">
                Remove cover
            </button>
        </div>
    }
}

export default SideOptionContainerChangeCover;