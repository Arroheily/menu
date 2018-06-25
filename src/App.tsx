import * as React from 'react';

import './App.less';

import Page from './common/Page';

// import ExMenu from './common/menu/ExMenu';

// import { Row, Layout } from 'antd'

// import Demo from './common/demo/Demo';

// import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  public render() {
    return (
      <Page />
      // <Layout>
      //   <Router>
      //     <Layout>
      //       <Route path="/demo" component={Demo} />

      //       <Row>
      //         <Layout>
      //           <ExMenu />
      //         </Layout>
      //       </Row>
      //     </Layout>
      //   </Router>
      // </Layout>
    );
  }
}

export default App;
