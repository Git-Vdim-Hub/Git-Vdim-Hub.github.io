import React from 'react';
import Navigation from './Navigation';
//import image from '../../public/images/'
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.

function Header(props) {
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by "Babel" into widely supported ES5 syntax.
  return (
    <Navigation {...props}/>

  )
}

export default Header;
