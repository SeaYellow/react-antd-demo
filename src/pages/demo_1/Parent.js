import React from "react";
import Child from "./Child";
import "./Parent.css"

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            count: 0
        }
    }

    addOne = () => {
        this.setState(
            {
                cnt: this.state.cnt + 1
            }
        );
    };

    addTwo() {
        this.setState({
            count: this.state.count + 2
        })
    }

    render() {
        return <div className={"paddingContent"}>
            <p>生命周期效果演示</p>
            <button onClick={this.addOne}>点击加一</button>
            <button onClick={this.addTwo.bind(this)}>点击加一</button>
            <p>加一： {this.state.cnt}</p>
            <p>加二： {this.state.count}</p>
            <Child parentName={"Jack_" + this.state.cnt}></Child>
        </div>
    }
}
