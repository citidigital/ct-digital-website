import React from "react";
import Header from "../Components/Header";
import {ReactComponent as LPImage} from './lpImage.svg';
import BookConsult from "../Components/BookConsult";

import {ReactComponent as Ellipse36} from '../Assets/imagesLanding/Ellipse36.svg'; 
import {ReactComponent as EllipseGroup} from '../Assets/imagesLanding/EllipseGroup.svg';
import {ReactComponent as Ellipse70} from '../Assets/imagesLanding/Ellipse70.svg';

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
            <div className="bg-lpBackground px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="absolute">
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
                </div>

                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">                       
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                            A Crew of Creative Doers
                            </h2>
                            <p className="text-black text-base md:text-lg">CTdigital is a global digital team that brings together design and 
                            technology to create digital products and experiences for brands across the globe. We collaborate with 
                            forward-thinking brands to transform digital presence into empowering and efficient experiences.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <LPImage />    
                    </div>

                </div>
            </div>
            <div className="flex gap-4">
                <UiUx/>
                <BD/>
                <WebProgramming/>
                <SmManagement/>
            </div>
            <div className="flex">
                <div>
                    <img src={InnovativeImageOne} alt="InnovativeImage" />
                    <img src={InnovativeImageTwo} alt="InnovativeImage" />
                    <img src={InnovativeImageThree} alt="InnovativeImage" />
                </div>
                <div>
                    <h2>Innovative Products for your users</h2>
                    <p>We provide our clients with unique user-centric products. By improving the product experience, we help generate leads and increase customer engagement and retention.</p>
                    <BookConsult />
                </div>
            </div>
            <div className="flex">
                <div>
                    <h2>Creating powerful products for Businesses</h2>
                    <p>We value continuity and growth, thus we are dedicated to building a successful brand,  delivering seamless products and building a  strong product portfolios for businesses.</p>
                    <BookConsult />
                </div>
                <div>
                    <div>
                        <img src={CreatingOne} alt="Creative pages"/>
                    </div>
                    <div>
                        <img src={CreatingTwo} alt="Creative pages"/>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div><img src={ProjectOne} alt="Project One" /></div>    
                <div><img src={ProjectTwo} alt="Project Two" /></div>    
                <div><img src={ProjectThree} alt="Project Three" /></div>    
                <div><img src={ProjectFour} alt="Project Four" /></div>                    
            </div>

        </div>
    );
}

export default LandingPage