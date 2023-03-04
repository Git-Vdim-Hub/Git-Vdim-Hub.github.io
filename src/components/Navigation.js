import React from 'react';

export default function Navigation({currentPage, handlePageChange}){
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#wazaa">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a href="#about"
           onClick={() => handlePageChange('About')}
           
           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
           >
            About
          </a>
        <a href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
        >
          Portfolio
          </a>
          <a href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
        >
          Portfolio
          </a>
          <a href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
        >
          Portfolio
          </a>
      </div>
    </div>
  </div>
</nav>
    )
    
    
}