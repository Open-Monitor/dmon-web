import React from 'react';

import Header from './header';
import SideNav from './leftbar';

import './header.css'

export default (Component) => {
  return (props) => (
      <div>
          <div className="" id="page-wrap">
            <Header />
            <SideNav />
            <Component {...props}/>
          </div>
      </div>
    )
}
