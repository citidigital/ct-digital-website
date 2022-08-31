import React from "react";

import RectangleBD from '../Assets/imagesBD/RectangleBD.jpg';
import Brand_Design from '../Assets/imagesBD/Brand_Design.jpg';
import Brand_Guidelines from '../Assets/imagesBD/Brand_Guidelines.jpg';
import Video_Editing_Multimedia from '../Assets/imagesBD/Video_Editing_Multimedia.jpg';

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageSection from "../Components/PageSection";

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
        <div className="BrandDesign">

            <Header />

            <div>
                <img className="w-full" src={RectangleBD} alt="Brand Design"/>
            </div>

            <div className="flex-col max-w-2/3 mx-auto">
                    
                    <h2 className="w-2/5 mt-20 mb-14 leading-14 mx-auto text-center text-5xl font-semibold">Brand Design</h2>
                    
                    <p className='mb-14 text-center px-60'>Building a brand identity requires designs and, that is where our creativity comes to play in developing what makes you instantly recognizable by your customers. To attain great layouts, we first set up the design structure and create your business assets. Typography, colour, and form or shape are the essential elements of consideration for our design process (method). Your business value comes from the application of these concepts.</p>                 
                    
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

            <Footer />
        </div>
    );
}

export default BrandDesign;