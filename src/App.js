import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project'
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning four components, <Header/>, <Navigation/>, <Project/>, <Footer/> from it.
function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);
  return(
    <div>
        <Header 
        currentPage ={currentPage} 
        handlePageChange={handlePageChange}/>
        <Project 
        currentPage ={currentPage}/>
        <Footer/>
    </div>
  
  ) 
}

export default App;
