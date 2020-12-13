import React from "react";

export function getSelect(options, selectValue, handleChange, label, font) {
    let children = [];
    let select;
    if (font !== null) {
        for (let i = 0; i < options.length; i++) {
            children[i] = React.createElement(
                'option',
                {value: options[i], key: i, style: {fontFamily: options[i]}},
                options[i]
            )
        }
        select = React.createElement(
            'select',
            {value: selectValue, onChange: handleChange, key: label, style: {fontFamily: selectValue}},
            children
        )

    } else {
        for (let i = 0; i < options.length; i++) {
            children[i] = React.createElement(
                'option',
                {value: options[i], key: i},
                options[i]
            )
        }
        select = React.createElement(
            'select',
            {value: selectValue, onChange: handleChange, key: label},
            children
        )
    }

    return React.createElement(
        'label',
        {id: "select-label"},
        [label, select]
    )
}

class SetTextFont extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let options = ["Brush Script MT", "Lucida Handwriting", "Copperplate", "WhiteSmoke", "Comic Sans MS"];
        return getSelect(options, this.props.font, this.props.onChange, "Set text font: ", true)
    }
}

export default SetTextFont;