import React from "react";

import RightHandImage from '../Components/FeaturePageElements/RightHandImage';
import LeftHandImage from '../Components/FeaturePageElements/LeftHandImage';

import RectanglePD from '../Assets/imagesPM/RectanglePD.jpg'
import WebDevelopment from '../Assets/imagesPM/WebDevelopment.jpg'
import AppDevelopment from '../Assets/imagesPM/AppDevelopment.jpg'
import WebManagement from '../Assets/imagesPM/WebManagement.jpg'

import Footer from "../Components/Footer";
import Header from "../Components/Header";

const firstImageSection = {
    rhiHeader: 'Web Development',
    rhiParagraph: 'Build bespoke websites that are created with simplicity and originality from the scratch. Our hard works are dedicated to the style that your users will appreciate.',
    rhiImage: <img src={WebDevelopment} alt="Web Development"/>,
}
const secondImageSection = {
    lhiHeader: 'App Development',
    lhiParagraph: 'Web development plus ease and assessibility equals comfort. Create easy-to-use app with a visually appealing design and interactive elements. Create features in line the product requirement and get a free consultation on next steps ',
    lhiImage: <img src={AppDevelopment} alt="App Development"/>,
}
const thirdImageSection = {
    rhiHeader: 'Website Managment',
    rhiParagraph: 'Periodic reviews and general up-to-date maintenance are required to provide a professional website with a content distribution strategy and marketing strategy. CT digital offers that and more.',
    rhiImage: <img src={WebManagement} alt="Web Management"/>
}

const ProductDevelopment = () => {
    return (
        <div className="productDevelopment">
            <Header />

            <div>
                <img src={RectanglePD} alt="Product Development"/>
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

export default ProductDevelopment;