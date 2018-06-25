import * as React from 'react';
import menuConfig from "./../MenuConfig";

import { Breadcrumb } from 'antd';
import { Link , withRouter } from 'react-router-dom';

const Navigator = withRouter(() => {
    const nodes = menuConfig.getNodesByLocation();
    const breadcrumbItems = nodes.map(x =>
        <Breadcrumb.Item key={x.router}> {
            x.isLeaf ? x.name : <Link to={x.getFirstLeaf().router}> {x.name} </Link>
        } </Breadcrumb.Item>);

    return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
})

export default Navigator;