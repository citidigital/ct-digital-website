import React, { useState } from "react";
import AboutUs from "../AboutUs/aboutUs";

import DesignHero from '../assets/Images/design_hero.jpeg'

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProjectGallery from "./ProjectGallery";
import UIDesignPage from "./UIDesignPage";

const AboutUsPage = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className="about-us">
            <Header />
            
            <section className="about md:w-full mx-auto md:pl-2 pl-4.5 pr-5 relative py-10">
                <div className="w-full bg-gray-100">
                    <div className="max-w-layout mx-auto">
                        <div className="tabs flex w-full mb-6 md:w-9/10 lg:w-8/10 mx-auto pt-4">
                            <button className={`${selectedTab == 1 ? 'text-blue-1000 active-tab' : 'bg-transparent mb-3 text-neutral-1000'} px-5 w-38 leading-5 font-semibold`} onClick={() => setSelectedTab(1)}>Overview</button>
                            <button className={`${selectedTab == 2 ? 'text-blue-1000 active-tab' : 'bg-transparent mb-3 text-neutral-1000'} px-5 w-38 leading-5 font-semibold`} onClick={() => setSelectedTab(2)}>Our Team</button>
                        </div>
                        
                    </div>
                </div>
                {selectedTab == 1 ? <AboutUs /> : null}
                {/* {selectedTab == 2 ? <AboutUs /> : null} */}
            </section>

            <Footer />
        </div>
    );
}

export default AboutUsPage;