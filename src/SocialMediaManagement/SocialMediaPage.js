import React from "react";

import RightHandImage from '../Components/FeaturePageElements/RightHandImage';
import LeftHandImage from '../Components/FeaturePageElements/LeftHandImage';

import RectangleSM from '../Assets/imagesSM/RectangleSM.jpg';
import SEOmanagement from '../Assets/imagesSM/SEOmanagement.jpg';
import SocialMediaManagement from '../Assets/imagesSM/SocialMediaManagement.jpg';
import ContentWriting from '../Assets/imagesSM/ContentWriting.jpg';
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const firstImageSection = {
    rhiHeader: 'SEO Management',
    rhiParagraph: 'Our SEO services will help you maximize your results and reach your marketing, sales, and business objectives. This will assist you increase your internet visibility and presence.',
    rhiImage: <img src={SEOmanagement} alt="SEO management"/>,
}
const secondImageSection = {
    lhiHeader: 'Socia-Media Management',
    lhiParagraph: 'Collaborating with influencers, volunteering in the community, and keeping an eye on your internet presence are all important.<br>We aim to analyze social media users and tailor a plan for them, as well as developing and distributing content for social media profiles and monitoring online interactions.',
    lhiImage: <img src={SocialMediaManagement} alt="Social Media Management"/>,
}
const thirdImageSection = {
    rhiHeader: 'Content Writing',
    rhiParagraph: 'With a compelling call to action and an inclination to keep your audience coming back for more, our writing style will interest your readers and increase digital marketing aims.',
    rhiImage: <img src={ContentWriting} alt="Content Writing"/>
}

const SocialMediaPage = () => {
    return (
        <div className="SocialMediaPage">
            <Header />

            <div>
                <img src={RectangleSM} alt="Social Media"/>
            </div>
            
            <RightHandImage 
                rhiHeader = {firstImageSection.rhiHeader}
                rhiParagraph = {firstImageSection.rhiParagraph}
                rhiImage = {firstImageSection.rhiImage}
                />

            <LeftHandImage 
                lhiHeader = {secondImageSection.lhiHeader}
                lhiParagraph = {secondImageSection.lhiParagraph}
                lhiImage = {secondImageSection.lhiImage}
                />

            <RightHandImage 
                rhiHeader = {thirdImageSection.rhiHeader}
                rhiParagraph = {thirdImageSection.rhiParagraph}
                rhiImage = {thirdImageSection.rhiImage}
                />

            <Footer />
        </div>
    );
}

export default SocialMediaPage;