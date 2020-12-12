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
        let selectedValue =  localStorage.getItem("preview_text_color");
        // if (selectedValue === "none"){
        //     selectedValue = "black"
        //     localStorage.setItem("preview_text_color", selectedValue);
        // }
        this.state = {value: selectedValue};
        //localStorage.setItem("preview_text_color", this.state.value);
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        localStorage.setItem("preview_text_color", event.target.value);
        console.log("color updated.");
        document.location.reload();
    }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }

    componentDidMount() {
        console.log("color did mount.");
    }


    render() {
        // let options = {
        //     text : ["Black", "Red", "Green", "Pink", "Purple"],
        //     color : ["black", "red", "green", "pink", "purple"]
        // }

        let options = ["black", "red", "green", "pink", "purple"];
        return getSelect(options, this.state.value, this.handleChange, "Set text color: ")
    }
}

export default SetColorForm;