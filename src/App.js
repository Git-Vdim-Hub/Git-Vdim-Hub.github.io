/* 
1. Create snapshots of mock-up
2. create html layouts of all the pages
3. import/convert to react
*/

import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './style.css';
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning four components, <Header/>, <Navigation/>, <Project/>, <Footer/> from it.
function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);
  return(
    <body>
        <Header 
        currentPage ={currentPage} 
        handlePageChange={handlePageChange}/>
        <Project 
        currentPage ={currentPage}/>
        <Footer/>
    </body>
  
  ) 
}

export default App;
