import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project'
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning four components, <Header/>, <Navigation/>, <Project/>, <Footer/> from it.
function App() {
  return(
    <body>
        <Header/>
        <Navigation/>
        <Project/>
        <Footer/>
    </body>
  
  ) 
}

export default App;
