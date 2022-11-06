import React from "react";

import RectangleBD from '../assets/imagesBD/RectangleBD.jpg';
import Brand_Design from '../assets/imagesBD/Brand_Design.jpg';
import Brand_Guidelines from '../assets/imagesBD/Brand_Guidelines.jpg';
import Video_Editing_Multimedia from '../assets/imagesBD/Video_Editing_Multimedia.jpg';

import Footer from "../components/Footer";
import Header from "../components/Header";
import PageSection from "../components/PageSection";
import { Link } from "react-router-dom";

const firstImageSection = {
    header: 'Brand Design',
    paragraph: 'For us, your brand is your voice and we position you to be heard. The though process put into designing logos, illustrations and banners will distinguish your brand to leave an impression while communicating your narrative to oyur audience',
    ImageComponent: <img src={Brand_Design} alt="SEO management"/>,
}
const secondImageSection = {
    header: 'Video Editing & Multimedia',
    paragraph: 'Our entertainment division will help you reach a large audience by telling your story and promoting your products in unique and creative ways. Using videos and motion graphics to provide living arts that incorporates design with elements of time and space.',
    ImageComponent: <img src={Video_Editing_Multimedia} alt="Social Media Management"/>,
}
const thirdImageSection = {
    header: 'Brand Guidelines',
    paragraph: 'Your Identity is our utmost concern. As a result, we will make consistency our trademark when it comes to your designs, logos, and a voice that will always represent you.',
    ImageComponent: <img src={Brand_Guidelines} alt="Content Writing"/>
}

const BrandDesign = () => {
    return (
        <div className="brand-design">

            <Header />

            <div>
                <img className="w-full" src={RectangleBD} alt="Brand Design"/>
            </div>

            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative pt-16 md:pb-16 pb-0">
                <div className="md:w-9/10 lg:w-8/10 mx-auto">
                    <p className="font-semibold font-sans md:text-5xl text-primary-blue text-sxl sm:leading-none max-w-lg text-center">
                        Brand Design
                    </p>
                    <p className='text-default-gray text-base md:text-lg leading-7 mb-10 text-center mt-6 md:px-10 lg:px-24'>Building a brand identity requires designs and, that is where our creativity comes to play in developing what makes you instantly recognizable by your customers. To attain great layouts, we first set up the design structure and create your business assets. Typography, colour, and form or shape are the essential elements of consideration for our design process (method). Your business value comes from the application of these concepts.</p>
                    <div className="md:mb-0 mb-14 text-center flex justify-center">
                        <Link to={'/designs/2'} className="rounded-md bg-newport-blue text-white px-5 py-4 leading-5 w-48">View Projects</Link>
                    </div>
                </div>
            </section>

            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-16">
                <div className="md:w-9/10 lg:w-8/10 mx-auto">
                    <p className="font-semibold md:text-5xl text-primary-blue text-4xl sm:leading-none max-w-lg text-center md:mb-11 mb-6">
                        Our Services
                    </p>
            
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

export default BrandDesign;