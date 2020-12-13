import React from "react";

export function getSelect(options, selectValue, handleChange, label) {
    let children = [];
    for (let i = 0; i < options.length; i++) {
        children[i] = React.createElement(
            'option',
            {value: options[i], key: i},
            options[i]
        )
    }
    const select = React.createElement(
        'select',
        {value: selectValue, onChange: handleChange, key: label},
        children
    )
    return React.createElement(
        'label',
        {},
        [label, select]
    )
}

class SetColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'black'};
        localStorage.setItem("preview_text_color", this.state.value);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        localStorage.setItem("preview_text_color", event.target.value);
    }

    render() {
        let options = ["black", "red", "green", "pink", "purple"];
        return getSelect(options, this.state.value, this.handleChange, "Set text color: ")
    }
}

export default SetColorForm;