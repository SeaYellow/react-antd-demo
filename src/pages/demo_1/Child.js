import React from "react";
import "./Child.less"

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            parentName: ""
        }
    }

    render() {
        return <div className="bgColor">
            <p>Child Get Value: {this.props.parentName}</p>
        </div>
    }
}
