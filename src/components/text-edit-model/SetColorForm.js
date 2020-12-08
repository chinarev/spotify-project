import React from "react";
import SideOptionsCreateCustomStyle from "../side-options/SideOptionsCreateCustomStyle";

export function getSelect(options, selectValue, handleChange, label) {
    let childrens = [];
    for (let i = 0; i < options.length; i++) {
        childrens[i] = React.createElement(
            'option',
            {value: options[i], key: i},
            options[i]
        )
    }
    const select = React.createElement(
        'select',
        {value: selectValue, onChange: handleChange, key: label},
        childrens
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
        this.state = {value: 'Black'};

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        let options = ["Black", "Red", "Green", "Pink", "Purple"];
        return getSelect(options, this.state.value, this.handleChange, "Set text color: ")
    }
}

export default SetColorForm;