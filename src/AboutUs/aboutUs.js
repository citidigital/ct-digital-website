import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import BookConsult from "../Components/BookConsult";

import Excellence from './images/Excellence.jpg';
import Innovation from './images/Innovation.jpg';
import Pushing from './images/Pushing.jpg';
import DesigningFutures from './images/DesigningFutures.jpg'

const AboutUs = () => {
    const mvg = [
        {
            topicHead:"Our Mission",
            text:"To close digital gaps by linking businesses with skilled individuals who have the dexterity to satisfy their unique needs."
        },
        {
            topicHead:"Our Vision",
            text:"To empower and build trust in human resources to stimulate creativity and inspire positivism in the digi-tech space.",
        },
        {
            topicHead:"Our Goals",
            text:"To be a leading digi-tech hub in Africa and increase community outreach with a steady growth in organizational value."
        },
    ];
    return (
        <div className="AboutUs">

            <Header/>

            <div>
                <h1>A commitment to Innovation and Excellence</h1>
                <p>With our services, comes the promise of continuous progress and provision of a foundation for growth and development. We will continue to be deliberate in our decision to develop and give better services to our clients because sustainability is our watchword.</p>
            </div>

            <div className="flex">
                {mvg.map((element) =>
                    <div>
                        <h1>{element.topicHead}</h1>
                        <p>{element.text}</p>
                    </div>)}
            </div>
            <div>
                <h2>Our core Values</h2>
                <div className="flex">
                    <div>
                        <img src={Innovation} alt="Excellence"/>
                        <div>
                            <h3>Innovation</h3>
                            <p>Assist our clients in achieving the potentials of their needs through our services by encouraging innovation, world-changing ideas, and critical thinking.</p>
                        </div>
                    </div>
                    <div>
                        <img src={Excellence} alt="Innovation"/>
                        <div>
                            <h3>Excellence</h3>
                            <p>By encouraging efficient communication and conducting appropriate chart rating and timely feedbacks, we consistently exceed our clients' expectations.</p>
                        </div>                    
                    </div>
                    <div>
                        <img src={Pushing} alt="Pushing"/>
                        <div>
                            <h3>Pushing Beyond Limits</h3>
                            <p>In order to improve and provide quality services to our clients, we endeavor to constantly widen our horizons by pushing beyond our bounds. This does not rule out the possibility of leaving a lasting legacy.</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <img src={DesigningFutures} alt="Designing Future"/>
                    <div>
                        <h2>Designing the future of Tech Globally</h2>
                        <p>Using Africa as a foot stool, we hope to spark a technological advancement using technical related tools. 
Change is constant. Transformation is our tagline and our promise.</p>
                    </div>
                </div>
                <div className="flex">
                    <h1>Ready to get Started</h1>
                    <h3>Let's  design solutions to meet your individual and  business needs</h3>
                    <div><BookConsult/></div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;