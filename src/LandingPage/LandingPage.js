import React from "react";
import {ReactComponent as LPImage} from './lpImage.svg';

const LandingPage = () => {
    return(
        <div className="landingPage">
                <div className="bg-lpBackground px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        </div>
    );
}

export default LandingPage