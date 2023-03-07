import React from 'react';
import Navigation from './Navigation';
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.

function Header(props) {

  // passing props from App.js to Navigation through a spread operator
  return (
    <Navigation {...props}/>

  )
}

export default Header;
