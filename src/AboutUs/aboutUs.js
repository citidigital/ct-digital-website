import React from "react";

import BackgroundIllustration from "./images/BackgroundIllustration.svg";

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
            <div className="bg-gray-200 h-12">
                <div className="flex p-4 pl-48">
                    <p className="mr-10">Overview</p>
                    <p className="mr-10">Our Team</p>
                </div>
            </div>
            <section className="mt-16 mb-16">
                <div className="pl-40 pr-36">
                    <img src={BackgroundIllustration} alt="background illustration" className="polygon-one hidden md:block absolute"/>
                    <div className="w-6/10 mx-auto text-center w-[828px]">
                        <h1 className="text-primary-blue text-4xl  font-bold mx-auto mb-4">A commitment to Innovation and Excellence</h1>
                        <p className="text-default-gray mb-20 w-828px mx-auto">With our services, comes the promise of continuous progress and provision of a foundation for growth and development. We will continue to be deliberate in our decision to develop and give better services to our clients because sustainability is our watchword.</p>              
                    </div>
                    <div className="flex w-828px">
                        {mvg.map((element) => 
                            <div>
                                <h2 className="text-primary-blue pl-2 text-base font-bold border-solid border-l-2 border-cyan-400">{element.topicHead}</h2>
                                <p className="p-2 pr-3">{element.text}</p>
                            </div>)
                        };
                    </div>
                </div> 
            </section>
            <section className="mb-28">
                <div className="pl-40 pr-36">
                    <h6 className="text-primary-blue text-base font-bold">Our Core Values</h6>
                    <div className="flex justify-between w-[1132px] mx-auto mt-10">
                        <div>
                            <img src={Innovation} alt="Innovation" className=""/>
                            <h6 className="text-primary-blue text-base font-bold mt-8 mb-4">Innovation</h6>
                            <p className="w-[364px]">Assist our clients in achieving the potentials of their needs through our services by encouraging innovation, world-changing ideas, and critical thinking.</p>
                        </div>
                        <div>
                            <img src={Excellence} alt="Excellence" className=""/>                            
                            <h6 className="text-primary-blue text-base font-bold mt-8 mb-4">Excellence</h6>
                            <p className="w-[364px]">By encouraging efficient communication and conducting appropriate chart rating and timely feedbacks, we consistently exceed our clients' expectations.</p>                            
                        </div>
                        <div>
                            <img src={Pushing} alt="Pushing" className=""/>
                            <h6 className="text-primary-blue text-base font-bold mt-8 mb-4">Pushing Beyond Limits</h6>
                            <p className="w-[364px]">In order to improve and provide quality services to our clients, we endeavor to constantly widen our horizons by pushing beyond our bounds. This does not rule out the possibility of leaving a lasting legacy.</p>                            
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex pl-40 pr-36 justify-between">
                    <img src={DesigningFutures} alt="Designing Futures" className=""/>
                    <div className="w-[500px] mt-24">
                        <h1 className="text-primary-blue text-4xl font-bold pb-6">Designing the future of Tech Globally</h1>
                        <p>Using Africa as a foot stool, we hope to spark a technological advancement using technical related tools. 
                            Change is constant. Transformation is our tagline and our promise.</p>
                    </div>
                </div>
            </section>        
            <section className="mb-28 bg-gray-200">
                <div className="pl-52 pr-[192px]">
                    <div className="flex justify-between w-[1132px] mx-auto mt-10">
                        <div>
                            <p>Ready to get Started?</p>
                        </div>
                        <div>
                            <p>Let's  design solutions to meet your individual and  business needs</p>
                        </div>
                        <BookConsult/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default AboutUs;