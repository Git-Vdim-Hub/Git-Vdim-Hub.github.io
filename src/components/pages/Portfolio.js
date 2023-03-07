import React from 'react';
import '../../styles/Portfolio.css';
import {Github} from "react-bootstrap-icons";

export default function Portfolio () {
    return (
        <section className="work pb-5">
        <div className="gallery container">
              <a href="https://blog-mee.herokuapp.com/" className="largeImage text-decoration-none text-warning justify-content-end pe-2">
                   <div className="project-info">
                      <h3>Blog-Me</h3>
                      <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/Git-Vdim-Hub/blog-me" role="button"
          ><Github size={25}/></a>
                      <small>Full-Stack/SQL/Handlebars</small>
                    </div>
                    
                </a>
                  
                <div className="galleryContainer">
                    <a href="https://notes-with-pwa.herokuapp.com/" className="smallImage1 text-decoration-none justify-content-end pe-2 text-warning">
                        <div className="project-info">
                            <h5>PWA Note Taker</h5>
                            <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/Git-Vdim-Hub/pwa-note-taker" role="button"
                            ><Github size={25}/></a>
                            <p>Webpack/Service Worker</p>
                        </div>   
                    </a>
                    <a href="https://fiesta-collector.herokuapp.com/login" className="smallImage2 text-decoration-none justify-content-end text-warning">
                        <div className="project-info">
                            <h3>Fiesta Collector</h3>
                            <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/jason-lieb/fiesta-collector" role="button"
                            ><Github size={25}/></a>
                            <p>Full-Stack Team Project</p>
                        </div>   
                    </a>
                    <a href="https://app.thebeartoken.com/" className="smallImage3 text-decoration-none justify-content-end text-warning">
                        <div className="project-info">
                            <h3>Bear Cave Treasury</h3>
                            <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/Git-Vdim-Hub/Web3.0" role="button"
                            ><Github size={25}/></a>
                            <p>React/Web3js/First Build</p>
                        </div>   
                    </a>
                    <a href="https://drive.google.com/file/d/1qPaBY7DtE7tYfHUMESCH-QEjW-2nMOGE/view" className="smallImage4 text-decoration-none justify-content-end text-warning"> 
                        <div className="project-info">
                            <h3>ReadMe Generator</h3>
                            <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/Git-Vdim-Hub/genMe-readMe" role="button"
                            ><Github size={25}/></a>
                            <p>Nodejs/Back-End/Inquirer</p>
                        </div>  
                    </a>
                    <a href="https://git-vdim-hub.github.io/show-me-weather/" className="smallImage5 text-decoration-none justify-content-end text-warning"> 
                        <div className="project-info">
                            <h3>Weather Dashboard</h3>
                            <a className="btn btn-outline-light btn-floating m-1 text-warning" href="https://github.com/Git-Vdim-Hub/show-me-weather" role="button"
                            ><Github size={25}/></a>
                            <p>VanillaJS/API fetch</p>
                        </div>  
                    </a>
                </div>
        </div>
        </section>
    )
}