import React from 'react';


export default function Resume() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className = "col-md-6 offset-md-4">
                    <a href="https://github.com/Git-Vdim-Hub/Resume" className="text-decoration-none fs-2">Download My Resume</a>
                    </div>
                </div>
            </div>
            <div className = "container p-2 ">
            <ul class="list-unstyled">
                <li>Front-End Proficiencies
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    </ul>
                </li>
                </ul>
                <ul class="list-unstyled">
                <li>Back-End Proficiencies
                    <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
            

    )
}