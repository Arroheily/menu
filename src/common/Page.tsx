import { Layout, Row  } from 'antd';

import * as React from 'react';
import Body from './Body';
import Header from './Header';


const Page = () => {
    return <Layout>
        <Row>
            <Header />
        </Row>
        <Row>
            <Body />
        </Row>
    </Layout>;
}

export default Page;