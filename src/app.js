import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LayoutHoc from './components/layout';

import {Live} from './containers';

import 'antd/dist/antd.css'; 

export default () => (
  <BrowserRouter>
    <Route to="/" component={LayoutHoc(Live)}/>
  </BrowserRouter>
)
