import { Breadcrumb } from 'antd';
import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import menuConfig from '../common/menu/MenuConfig';

function GetDeepestRouter(item: any): any {
    while (item.children !== undefined && item.children.length > 0) {
        item = item.children[0];
    }
    return item.router;
}

function GenerateBreadcrumb(): any {
    const openKeyArry = location.pathname.split('/').filter(i => i);
    openKeyArry.splice(0, 0, '');

    const menuItems: any[] = [];
    let children = [menuConfig];

    let url = '';
    openKeyArry.forEach((item: any) => {
        if (url !== '/') {
            url += '/'
        }

        url += item;

        children.forEach((x: any): any => {
            if (x.router.indexOf(url) === 0) {
                children = x.children;
                menuItems.push(x);
                return true;
            }
        })
    })

    return <Breadcrumb>
        {menuItems.map((item: any, index: any) => {
            return <Breadcrumb.Item key={item.router}> {
                (index === menuItems.length - 1)
                    ? item.name
                    : <Link to={GetDeepestRouter(item)}>
                        {item.name}
                    </Link>
            }
            </Breadcrumb.Item>

        })}
    </Breadcrumb>
}

const Navigator = withRouter(() => {
    return GenerateBreadcrumb();
})

export default Navigator;