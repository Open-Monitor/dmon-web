import React from 'react';

import Header from './header';

export default (Component) => {
    return (props) => (
      <div>
          <Header />
          <Component {...props}/>
      </div>
    )
}
