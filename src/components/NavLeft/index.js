import React from "react";
import {Menu} from 'antd';
import "./index.less"
import MenuConfig from "../../config/menuConfig"

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount(data) {
        let menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        });
    }

    renderMenu = (menuData) => {
        return menuData.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg"/>
                    <h2>Antd Demo</h2>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
