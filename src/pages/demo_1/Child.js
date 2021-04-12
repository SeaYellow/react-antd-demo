import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            parentName: ""
        }
    }

    render() {
        return <div>
            <p>Child Get Value: {this.props.parentName}</p>
        </div>
    }
}
