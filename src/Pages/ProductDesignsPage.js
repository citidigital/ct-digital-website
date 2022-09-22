import React, { useState } from "react";

import DesignHero from '../assets/Images/design_hero.jpeg'

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProjectGallery from "./ProjectGallery";
import UIDesignPage from "./UIDesignPage";

const ProductDesignsPage = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className="productDevelopment">
            <Header />

            <div>
                <img src={DesignHero} alt="Product Development" className="w-full"/>
            </div>
            
            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-10">
                <div className="felx text-center w-full">
                    <div className="inline-block bg-verylight-blue rounded-md">
                        <button class={`rounded-md ${selectedTab == 1 ? 'bg-newport-blue text-white' : 'bg-transparent text-black'} px-5 py-3 w-38 leading-5`} onClick={() => setSelectedTab(1)}>UI Design</button>
                        <button class={`rounded-md ${selectedTab == 2 ? 'bg-newport-blue text-white' : 'bg-transparent text-black'} px-5 py-3 w-38 leading-5`} onClick={() => setSelectedTab(2)}>Brand Design</button>
                    </div>
                    
                </div>
                {selectedTab == 1 ? null : <ProjectGallery />}
                {selectedTab == 3 ? null : <UIDesignPage />}
            </section>

            <Footer />
        </div>
    );
}

export default ProductDesignsPage;