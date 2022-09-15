import React from "react";

import RectanglePDe from '../assets/imagesPD/RectanglePDe.jpg';
import Design_System from '../assets/imagesPD/DesignSystem.jpg';
import Interaction_Design from '../assets/imagesPD/InteractionDesign.jpg';
import Product_Research from '../assets/imagesPD/ProductResearch.jpg';
import UiUx_Design from '../assets/imagesPD/UiUxDesign.jpg';

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageSection from "../Components/PageSection";

const firstImageSection = {
    header: 'UI/UX Design',
    paragraph: 'Create a User-centric interface and experiences, which will not only foster effective communication and navigation on your website or application but also boost relevance and create an optimal user experience.',
    ImageComponent: <img src={UiUx_Design} alt="SEO management"/>,
}
const secondImageSection = {
    header: 'Product Research',
    paragraph: 'A feasibility study can help you better understand not only market trends, but also how customers tastes evolved over time. We can filter through a vast amount of data. With the information generated, we set to establish the user\'s requirements. We will help you study these trends and provide the best products to your clients.',
    ImageComponent: <img src={Product_Research} alt="Social Media Management"/>,
}
const thirdImageSection = {
    header: 'Design System',
    paragraph: 'Standardize your design sets to help unify your products, and provide a base line for continuity and consistency. We drive change, continuous growth, consistency, and eliminate design redundancy.',
    ImageComponent: <img src={Design_System} alt="Content Writing"/>
}

const fourthImageSection = {
    header: 'Interaction Design',
    paragraph: 'Designs that reflect your product\'s aim to better interactive experience while opening up conversations with your users and products. You can expect an excellent user experience with these.',
    ImageComponent: <img src={Interaction_Design} alt="Content Writing"/>
}

const ProductDesign = () => {
    return (
        <div className="ProductDesign">

            <Header />

            <div>
                <img src={RectanglePDe} alt="Product Design" Class="w-full"/>
            </div>

            <div className="flex-col max-w-2/3 mx-auto">
                <h1 className="w-2/5 mt-20 mb-14 leading-14 mx-auto text-center text-5xl font-semibold">Product Brand Design</h1>
                <p className='mb-14 text-center px-60'>A successful product is a blend of company objectives and user requirements. We accomplish this by combining the two while continuously improving the user experience to assist brands in developing long-term products.</p>                 
                
                <div className="w-2/3 mx-auto mb-14 text-center">
                        <button className="rounded-md bg-newport-blue text-white font-extrabold px-5 py-4" >View Projects</button>
                </div>

                <h2 className="w-2/5 mt-24 mb-5 leading-14 mx-auto text-center text-5xl font-semibold">Our Section</h2>
            </div>
            
            <PageSection
                position="right"
                Header = {firstImageSection.header}
                Paragraph = {firstImageSection.paragraph}
                Image = {firstImageSection.ImageComponent}
                />

            <PageSection
                Header = {secondImageSection.header}
                Paragraph = {secondImageSection.paragraph}
                Image = {secondImageSection.ImageComponent}
                />

            <PageSection
                position="right"
                Header = {thirdImageSection.header}
                Paragraph = {thirdImageSection.paragraph}
                Image = {thirdImageSection.ImageComponent}
                />

            <PageSection
                position="left"
                Header = {fourthImageSection.header}
                Paragraph = {fourthImageSection.paragraph}
                Image = {fourthImageSection.ImageComponent}
                />

            <Footer />
        </div>
    );
}

export default ProductDesign;