import React from 'react';

import Header from './header';

import { Layout } from 'antd';

export default (Component) => {
    return (props) => (
        <Layout>
            <Header />
            <Layout.Content>
                <Component {...props}/>
            </Layout.Content>
        </Layout>
    )
}
