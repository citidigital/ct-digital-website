import React from "react";

import BackgroundIllustration from "../assets/background-illustration2.svg";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import BookConsult from "../Components/BookConsult";

import Excellence from './images/Excellence.jpg';
import Innovation from './images/Innovation.jpg';
import Pushing from './images/Pushing.jpg';
import DesigningFutures from './images/DesigningFutures.png'
import { applyWhiteSpace } from "../utils/helper";

const AboutUs = () => {
    return (
        <div>
            <section className="products-for-business md:pt-8 md:flex items-center pt-6">
                <img src={BackgroundIllustration} alt="background illustration" className="polygon-one hidden md:block absolute top-16 lg"/>
                <div className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className="md:w-9/10 lg:w-8/10 mx-auto">
                        <div className="text-center">
                            <p className="text-4.5xl font-extrabold text-primary-blue mb-5">
                                A commitment to Innovation and Excellence
                            </p>
                            <p className="text-default-gray text-base 
                            lg:w-7/10 mx-auto">With our services, comes the promise of continuous progress and provision of a foundation for growth and development. We will continue to be deliberate in our decision to develop and give better services to our clients because sustainability is our watchword.</p>              
                        </div>
                        <div className="md:flex items-center justify-between w-full mb-6 mx-auto mt-20">
                            <div className="flex lg:w-7.5/10 w-full">
                                <div>
                                    <p className="text-primary-blue pl-2 text-base font-extrabold border-solid border-l-2 border-cyan-400">Our Mission</p>
                                    <p className="p-2 pr-3">To close digital gaps by linking businesses with skilled individuals who have the dexterity to satisfy their unique needs. </p>
                                </div>
                                <div>
                                    <p className="text-primary-blue pl-2 text-base font-extrabold border-solid border-l-2 border-cyan-400">Our Vision</p>
                                    <p className="text-default-gray text-base md:text-lg md:text-left text-center pl-2">To empower and build trust in human resources to stimulate creativity and inspire positivism in the digi-tech space.</p>
                                </div>
                                <div>
                                    <p className="text-primary-blue pl-2 text-base font-extrabold border-solid border-l-2 border-cyan-400">Our Goals</p>
                                    <p className="text-default-gray text-base md:text-lg md:text-left text-center pl-2">To be a leading digi-tech hub in Africa and increase community outreach with a steady growth in organizational value. </p>
                                </div>
                                {/* {mvg.map((element) => )
                                }; */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-4 md:py-10 relative'>
                <div className="max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto'>
                        <p className="text-3.5xl font-bold text-black mb-10 text-center md:text-left">
                            Our Core Values
                        </p>
                        <div className={"md:flex w-full justify-between mb-10 md:space-x-2.5"}>
                            <div className="md:w-1/3">
                                <img src={Innovation} alt="Innovation" className=""/>
                                <p className="text-2xl font-extrabold text-primary-blue mb-4 text-center md:text-left mt-8">
                                    Innovation
                                </p>
                                <p className="text-default-gray text-base md:text-lg md:text-left text-center md:mb-0 mb-8">Assist our clients in achieving the potentials of their needs through our services by encouraging innovation, world-changing ideas, and critical thinking.</p>
                            </div>
                            <div className="md:w-1/3">
                                <img src={Excellence} alt="Exelence" className=""/>
                                <p className="text-2xl font-extrabold text-primary-blue mb-4 text-center md:text-left mt-8">
                                Excellence 
                                </p>
                                <p className="text-default-gray text-base md:text-lg md:text-left text-center md:mb-0 mb-8">By encouraging efficient communication and conducting appropriate chart rating and timely feedbacks, we consistently exceed our clients' expectations.</p>
                            </div>
                            <div className="md:w-1/3">
                                <img src={Pushing} alt="Pushing Beyond Limits" className=""/>
                                <p className="text-2xl font-extrabold text-primary-blue mb-4 text-center md:text-left mt-8">
                                Pushing Beyond Limits
                                </p>
                                <p className="text-default-gray text-base md:text-lg md:text-left text-center">In order to improve and provide quality services to our clients, we endeavor to constantly widen our horizons by pushing beyond our bounds. This does not rule out the possibility of leaving a lasting legacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='py-4 md:py-10'>
                <div className="max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto'>
                        <div className={"md:flex items-center w-full mb-10 md:space-x-10 lg:space-x-16"}>
                            <img src={DesigningFutures} alt="Designing the future" />
                            <div className="pl-1">                       
                                <p className="text-3xl font-semibold text-primary-blue sm:text-3.5xl leading-11 max-w-lg mb-6 text-center md:text-left md:mt-0 mt-10">
                                    Designing the future of Tech Globally
                                </p>
                                <p className="text-default-gray text-base md:text-lg leading-7 md:text-left text-center mt-6">{applyWhiteSpace(`Using Africa as a foot stool, we hope to spark a technological advancement using technical related tools. \n Change is constant. Transformation is our tagline and our promise. `)}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className='consultation-prompt py-10 md:pt-22 md:pb-16'>
               <div className="max-w-layout mx-auto">
                    <div className="md:w-9/10 lg:w-8/10 md:flex items-center justify-between mx-auto relative md:pl-2 px-4.5">
                        <div className="md:w-3/10">
                          <p className="text-3.5xl font-extrabold text-primary-blue sm:leading-none text-center md:text-left">
                                Ready to get Started?
                            </p>  
                        </div>
                        <div className="md:w-3.5/10">
                            <p className="text-default-gray text-base md:text-lg leading-7 text-center md:text-left md:my-0 my-10">Let's  design solutions to meet your individual and  business needs
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <button class="rounded-md bg-newport-blue text-white px-5 py-4 w-button-width leading-5">Book a Consultation</button>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
}

export default AboutUs;