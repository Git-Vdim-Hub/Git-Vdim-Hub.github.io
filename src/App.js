import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './style.css';
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning four components, <Header/>, <Navigation/>, <Project/>, <Footer/> from it.
function App() {
  // useState hook to change the currentPage passed down into header and Project components
  const [currentPage, setCurrentPage] = useState('About');
  // function to use the setCurrentPage (not necessary, but can be used later if other operations need to be completed)
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
