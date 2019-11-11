import React from 'react';

import Header from './header';

import { Layout } from 'antd';

export default (Component) => {
    return (props) => (
        <Layout>
            <Header />
            <Layout.Content style={{ padding: '0 50px' }}>
                <Component {...props}/>
            </Layout.Content>
        </Layout>
    )
}