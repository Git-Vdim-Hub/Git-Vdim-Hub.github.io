import React from 'react';

export default function About () {
    return (
        // basic syntax with paragraphs and a small image for the About Me page thats rendered when first visiting the website.
        <div className="container" style={{ display: "block", width: "100%", padding: 20 }}>
            <h4> About Me</h4>
            <img src='/images/Vadim1.png' className='img-fluid rounded' />
            <p className="mt-2">Hello and welcome to my React Portfolio!</p>
            <p className = " mt-2 overflow-auto">I am a developmental engineer. My specific engineering discipline is Electrical Engineering, but the majority of the time I use this knowledge to carry out decisions as a program manager/team leader. Besides electronics, hardware and program management I love to code when ever my job presents opportunities and also on my free time in the defi/crypto world.</p>
            <p className = " mt-2 overflow-auto"> I have led many teams in technical and non-technical roles. Most recently I have completed a project in Florida leading a team of eight signal analysts and engineers analyzing radar signals.</p>
            <p className = " mt-2 overflow-auto"> Besides leading/management I have spent the past year and a half in the decentralized finance space working with JavaScript/React and Solidity coding while also performing the role of a project lead. So far I have deployed four blockchain projects on Binance Smartchain and built two decentralized applications using React. Besides the languages mentioned above I have written code in Java, C++ and Objective C, NI LabView and MatLab during my undergrad and as fun personal projects.</p>
        </div>

    )
}