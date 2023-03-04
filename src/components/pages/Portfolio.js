import React from 'react';
import '../../styles/Portfolio.css'

export default function Portfolio () {
    return (
        <section className="work">
        <div className="gallery">
              <a href="https://thebeartoken.com/" className="largeImage">
                   <div>
                      <h3>Surf Report</h3>
                      <small>MERN Stack</small>
                    </div>
                </a>  
                <div className="galleryContainer">
                    <a href="https://app.thebeartoken.com/" className="smallImage1">
                        <div>
                            <h3>Led Wall</h3>
                            <p>Node/IoT</p>
                        </div>   
                    </a>
                    <a href="https://google.com" className="smallImage2">
                        <div>
                            <h3>Calculator</h3>
                            <p>React/JavaScript/CSS</p>
                        </div>   
                    </a>
                    <a href="https://cryptonairz.com/" className="smallImage3">
                        <div>
                            <h3>Pastel Puzzels</h3>
                            <p>MERN Stack</p>
                        </div>   
                    </a>
                    <a href="https://remix.ethereum.org/" className="smallImage4"> 
                        <div>
                            <h3>Run Buddy</h3>
                            <p>HTML/CSS</p>
                        </div>  
                    </a>
                </div>
        </div>
    </section>
    )
}