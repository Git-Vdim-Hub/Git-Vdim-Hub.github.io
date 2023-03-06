import React from 'react';

export default function About () {
    return (
        <div className="container" style={{ display: "block", width: "100%", padding: 20 }}>
            <h4> About Me</h4>
            <img src='/images/Vadim1.png' className='img-fluid rounded' />
            <p className="mt-2">Hello and welcome to my React Portfolio!</p>
            <p className = " mt-2 overflow-auto">I am a Developmental Engineer for the United States Air Force (USAF). My specific engineering discipline is Electrical Engineering, but the majority of the time I use this knowledge to carry out decisions as a program manager/team leader. Besides electronics, hardware and program management I love to code when ever my job permits and also on my free time in the defi/crypto world.</p>
            <p className = " mt-2 overflow-auto"> The majority of my professional career has been in the USAF. I have attended many leadership schools including Basic Military Training, Airman Leadership School, Non-Comissioned Officer Academy and Officer Training School. During my career in the Air Force I have led many teams in technical and non-technical roles. Most recently I have completed a tour leading a team of eight signal analysts and engineers analyzing radar signals.</p>
        </div>

    )
}