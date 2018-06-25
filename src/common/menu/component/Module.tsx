
import * as React from "react";
import menuConfig from "./../MenuConfig";

import { Route } from "react-router";

export default class Module extends React.Component {
    public render() {
        const nodes = menuConfig.getMenuNodes().filter(x => x.isLeaf);
        return nodes.map(x =>
            <Route path={x.router} component={x.component} key={x.router} />);
    }
}
