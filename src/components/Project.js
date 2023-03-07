import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// Project is a component that is used multiple times in the Portfolio section
export default function Project({currentPage}){
      // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
      const renderPage = () => {
        if(currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
        if(currentPage === 'Contact') {
            return <Contact />;
        }
        
      };
    return(
        <div>
            {renderPage()}
        </div>
    )
}