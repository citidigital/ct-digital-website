import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {ReactComponent as LPImage} from './lpImage.svg';
import BookConsult from "../Components/BookConsult";

import {ReactComponent as Ellipse36} from '../assets/imagesLanding/Ellipse36.svg'; 
import EllipseGroup from '../assets/imagesLanding/EllipseGroup.svg';
import Polygon1 from '../assets/Polygon1.svg';
import Polygon2 from '../assets/Polygon2.svg';
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
import { Link } from "react-router-dom";

const LandingPage = () => {
    const projects = [ProjectOne, ProjectTwo, ProjectThree, ProjectFour];
    return(
        <div className="landingPage">
            <Header />
            <div className="hero md:py-4 min-h-hero md:flex items-center py-6">
                <div className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className="md:flex items-center justify-between w-full mb-6 md:w-8/10 mx-auto">
                        <div className="md:w-1/2">
                            <div className="md:w-8/10">
                                <div className="text-right">
                                    <div className="hidden w-18 h-18 rounded-full bg-blue1 md:inline-block"></div>  
                                </div>
                                                 
                                <p className="font-sans text-3xl font-bold tracking-tig text-primary-blue sm:text-4xl sm:leading-none max-w-lg mb-6 text-center md:text-left">
                                A Crew of Creative Doers
                                </p>
                                <p className="text-default-gray text-base md:text-lg leading-7 mb-8">We are a multi-digital workspace with a drive to use design and innovation to promote your  business, leveraging on technology as a platform for change. 
                                </p>
                            </div>
                            <div className="md:mb-0 mb-14 md:text-left text-center">
                                <button class="rounded-md bg-newport-blue text-white px-5 py-4 leading-5">Book a Consultation</button>
                            </div>

                            <div className="hidden md:block text-right w-8/10">
                                <div className="w-9 h-9 rounded-full bg-blue1 inline-block mr-18 mt-9"></div>  
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div className="text-right">
                                <img src={HeroVideo} alt="Video in hero section" className="z-10 relative top-0 left-0 inline-block"/>
                            </div>
                            
                            <img src={EllipseGroup} alt="Video in hero section" className="hidden md:block absolute -right-4 -bottom-18"/>
                            <div className="hidden md:block w-18 h-18 bg-blue1 absolute rounded-full -left-6 -bottom-8"></div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Carousel />
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
            <div className="flex p-36 justify-between">
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
            </div> */}

            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 projects relative">
                <img src={Polygon1} alt="Polygon 1" className="polygon-one hidden md:block absolute"/>
                <div className="md:ml-1/10 relative z-10">
                    <div className="md:flex justify-between">
                        <p className="font-sans text-3xl font-bold tracking-tig text-primary-blue sm:text-4xl sm:leading-none max-w-lg mb-6 text-center md:text-left">
                        Our Favorite Projects
                        </p>
                        <Link to="projects" className="text-link text-base">See All Projects</Link>
                    </div>
                    
                    <div className="flex flex-nowrap overflow-scroll my-12 slide">
                        {projects.map((project, index) => <div className="mr-10 last:mr-0 project" key={index}><img src={project} alt={`Project ${index + 1}`} /></div>)}
                        {/* {<div><img src={ProjectOne} alt="Project One" /></div>}    
                        <div><img src={ProjectTwo} alt="Project Two" /></div>    
                        <div><img src={ProjectThree} alt="Project Three" /></div>    
                        <div><img src={ProjectFour} alt="Project Four" /></div>                     */}
                    </div>
                </div>
                <img src={Polygon2} alt="Polygon 2" className="ploygon-two hidden md:block absolute"/>
            </section>
            <Footer />
        </div>
    );
}

export default LandingPage