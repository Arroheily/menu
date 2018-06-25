import { Layout } from 'antd';
import { MenuModule, MenuNavigator, MenuTree } from './menu/Menu';


import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

const { Sider } = Layout;

const Body = () => {
    return <BrowserRouter>
        <Layout>
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <MenuTree />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <MenuNavigator />
                <MenuModule />
            </Layout>
        </Layout>
    </BrowserRouter>;
}

export default Body;