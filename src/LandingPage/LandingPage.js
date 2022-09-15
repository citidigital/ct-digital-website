import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {ReactComponent as LPImage} from './lpImage.svg';
import BookConsult from "../Components/BookConsult";

import {ReactComponent as Ellipse36} from '../assets/imagesLanding/Ellipse36.svg'; 
import EllipseGroup from '../assets/imagesLanding/EllipseGroup.svg';
import {ReactComponent as Ellipse70} from '../assets/imagesLanding/Ellipse70.svg';

import HeroVideo from '../assets/Images/hero_video.jpeg';

import BD from './callouts/BD';
import WebProgramming from "./callouts/WebProgramming";
import UiUx from "./callouts/UiUx";
import SmManagement from "./callouts/SManagement";

import InnovativeImageOne from './images/InnovativeImageOne.jpg';
import InnovativeImageTwo from './images/InnovativeImageTwo.jpg';
import InnovativeImageThree from './images/InnovativeImageThree.jpg';

import ProjectOne from './images/ProjectOne.jpg';
import ProjectTwo from './images/ProjectTwo.jpg';
import ProjectThree from './images/ProjectThree.jpg';
import ProjectFour from './images/ProjectFour.jpg';

import CreatingOne from './images/CreatingOne.jpg'
import CreatingTwo from './images/CreatingTwo.jpg'

const LandingPage = () => {
    return(
        <div className="landingPage">
            <Header />
            <div className="hero p-4 h-halfscreen md:flex items-center">
                <div className="max-w-9/10 md:w-full lg:max-w-8/10 mx-auto pl-2 sm:px-2.5">
                {/* <div className="absolute">
                    <Ellipse36 />
                </div>
                <div className="absolute">
                    <Ellipse70 />
                </div>
                <div className="absolute">
                    <Ellipse70 />
                </div>
                <div className="absolute">
                    <EllipseGroup />
                </div> */}

                    <div className="md:flex items-center justify-between w-full mb-10">
                        
                        <div className="md:w-1/2">
                            <div className="w-8/10">
                                <div className="text-right">
                                    <div className="w-18 h-18 rounded-full bg-blue1 inline-block"></div>  
                                </div>
                                                 
                                <p className="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                                A Crew of Creative Doers
                                </p>
                                <p className="text-black text-base md:text-lg leading-7 mb-8">CTdigital is a global digital team that brings together design and 
                                technology to create digital products and experiences for brands across the globe. We collaborate with 
                                forward-thinking brands to transform digital presence into empowering and efficient experiences.
                                </p>
                            </div>
                            <div>
                                <button class="rounded-md bg-newport-blue text-white px-5 py-4 leading-5">Book a Consultation</button>
                            </div>

                            <div className="text-right w-8/10">
                                <div className="w-9 h-9 rounded-full bg-blue1 inline-block mr-18"></div>  
                            </div>
                        </div>

                        <div className="w-1/2 relative">
                            <div className="text-right">
                                <img src={HeroVideo} alt="Video in hero section" className="z-10 relative top-0 left-0 inline-block"/>
                            </div>
                            
                            <img src={EllipseGroup} alt="Video in hero section" className="absolute -right-2 -bottom-18"/>
                            <div className="w-18 h-18 bg-blue1 absolute rounded-full left-24 -bottom-8"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-36 pt-22">
                <div className="">
                    <h2 className="text-3.5xl font-black w-fit mx-auto mb-6">Building the Greatest Solutions</h2>
                    <p className="w-2/3 text-center mx-auto mb-9">Results matter a lot, this in each step of the product lifecycle our team of experts are fully active to help you launch your product, brand and ideas with a bang. </p>
                </div>
                <div className="calloutElements flex gap-4">
                    <UiUx/>
                    <BD/>
                    <WebProgramming/>
                    <SmManagement/>
                </div>
            </div>
            <div className="flex p-36 justify-between">
                <div className="relative w-579px h-465px pl-13">
                    <img src={InnovativeImageOne} alt="InnovativeImage" className="absolute z-10"/>
                    <img src={InnovativeImageTwo} alt="InnovativeImage" className="absolute z-20 top-196px left-352px"/>
                    <img src={InnovativeImageThree} alt="InnovativeImage" className="absolute z-30 top-2/3"/>
                </div>
                <div className="w-96 mt-20">
                    <h2 className="text-3.5xl font-black w-fit">Innovative Products for your users</h2>
                    <p className="text-base font-normal mt-4 leading-7">We provide our clients with unique user-centric products. By improving the product experience, we help generate leads and increase customer engagement and retention.</p>
                    <BookConsult />
                </div>
            </div>
            <div className="flex  p-36 justify-between">
                <div className="w-96">
                    <h2 className="text-3.5xl font-black w-fit">Creating powerful products for Businesses</h2>
                    <p className="text-base font-normal mt-4 leading-7">We value continuity and growth, thus we are dedicated to building a successful brand,  delivering seamless products and building a  strong product portfolios for businesses.</p>
                    <BookConsult />
                </div>
                <div className="flex w-634px justify-between">
                    <div>
                        <img src={CreatingOne} alt="Creative pages"/>
                    </div>
                    <div>
                        <img src={CreatingTwo} alt="Creative pages"/>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-3.5xl font-black w-fit">Our Favorite Projects</h2>
                <div className="flex my-12">
                    <div><img src={ProjectOne} alt="Project One" /></div>    
                    <div><img src={ProjectTwo} alt="Project Two" /></div>    
                    <div><img src={ProjectThree} alt="Project Three" /></div>    
                    <div><img src={ProjectFour} alt="Project Four" /></div>                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage