import React from "react";

import RectangleSM from '../assets/imagesSM/RectangleSM.jpg';
import SEOmanagement from '../assets/imagesSM/SEOmanagement.jpg';
import SocialMediaManagement from '../assets/imagesSM/SocialMediaManagement.jpg';
import ContentWriting from '../assets/imagesSM/ContentWriting.jpg';

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageSection from "../Components/PageSection";

const firstImageSection = {
    header: 'SEO Management',
    paragraph: 'Our SEO services will help you maximize your results and reach your marketing, sales, and business objectives. This will assist you increase your internet visibility and presence.',
    ImageComponent: <img src={SEOmanagement} alt="SEO management"/>,
}
const secondImageSection = {
    header: 'Social Media Management',
    paragraph: 'Collaborating with influencers, volunteering in the community, and keeping an eye on your internet presence are all important.\nWe aim to analyze social media users and tailor a plan for them, as well as developing and distributing content for social media profiles and monitoring online interactions.',
    ImageComponent: <img src={SocialMediaManagement} alt="Social Media Management"/>,
}
const thirdImageSection = {
    header: 'Content Writing',
    paragraph: 'With a compelling call to action and an inclination to keep your audience coming back for more, our writing style will interest your readers and increase digital marketing aims.',
    ImageComponent: <img src={ContentWriting} alt="Content Writing"/>
}

const SocialMediaPage = () => {
    return (
        <div className="social-media-page">
            <Header />
            <div>
                <img src={RectangleSM} alt="Social Media" className="w-full"/>
            </div>
            
            <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-16">
                <div className="md:w-9/10 lg:w-8/10 mx-auto lg:px-10">
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

export default SocialMediaPage;