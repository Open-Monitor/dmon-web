import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {Live} from './containers';

export default () => (
  <BrowserRouter>
    <Route to="/" component={Live}/>
  </BrowserRouter>
)
