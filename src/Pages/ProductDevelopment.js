import React from "react";

import RectanglePD from '../assets/imagesPM/RectanglePD.jpg' 
import WebDevelopment from '../assets/imagesPM/WebDevelopment.jpg'
import AppDevelopment from '../assets/imagesPM/AppDevelopment.jpg'
import WebManagement from '../assets/imagesPM/WebManagement.jpg'

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageSection from "../Components/PageSection";

const firstImageSection = {
    header: 'Web Development',
    paragraph: 'Build bespoke websites that are created with simplicity and originality from the scratch. Our hard works are dedicated to the style that your users will appreciate.',
    ImageComponent: <img src={WebDevelopment} alt="Web Development"/>,
}

const secondImageSection = {
    header: 'App Development',
    paragraph: 'Web development plus ease and assessibility equals comfort. Create easy-to-use app with a visually appealing design and interactive elements. Create features in line the product requirement and get a free consultation on next steps ',
    ImageComponent: <img src={AppDevelopment} alt="App Development"/>,
}

const thirdImageSection = {
    header: 'Website Managment',
    paragraph: 'Periodic reviews and general up-to-date maintenance are required to provide a professional website with a content distribution strategy and marketing strategy. CT digital offers that and more.',
    ImageComponent: <img src={WebManagement} alt="Web Management"/>
}

const ProductDevelopment = () => {
    return (
        <div className="product-development">
            <Header />

            <div>
                <img src={RectanglePD} alt="Product Development" className="w-full"/>
            </div>
            
            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-16">
                <div className="md:w-9/10 lg:w-8/10 mx-auto">
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
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductDevelopment;