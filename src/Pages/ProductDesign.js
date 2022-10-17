import React from 'react';

import RectanglePDe from '../assets/imagesPD/RectanglePDe.jpg';
import Design_System from '../assets/imagesPD/DesignSystem.jpg';
import Interaction_Design from '../assets/imagesPD/InteractionDesign.jpg';
import Product_Research from '../assets/imagesPD/ProductResearch.jpg';
import UiUx_Design from '../assets/imagesPD/UiUxDesign.jpg';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PageSection from '../Components/PageSection';
import { Link } from 'react-router-dom';

const firstImageSection = {
  header: 'UI/UX Design',
  paragraph:
    'Create a User-centric interface and experiences, which will not only foster effective communication and navigation on your website or application but also boost relevance and create an optimal user experience.',
  ImageComponent: <img src={UiUx_Design} alt="SEO management" />,
};
const secondImageSection = {
  header: 'Product Research',
  paragraph:
    "A feasibility study can help you better understand not only market trends, but also how customers tastes evolved over time. We can filter through a vast amount of data. With the information generated, we set to establish the user's requirements. We will help you study these trends and provide the best products to your clients.",
  ImageComponent: <img src={Product_Research} alt="Social Media Management" />,
};
const thirdImageSection = {
  header: 'Design System',
  paragraph:
    'Standardize your design sets to help unify your products, and provide a base line for continuity and consistency. We drive change, continuous growth, consistency, and eliminate design redundancy.',
  ImageComponent: <img src={Design_System} alt="Content Writing" />,
};

const fourthImageSection = {
  header: 'Interaction Design',
  paragraph:
    "Designs that reflect your product's aim to better interactive experience while opening up conversations with your users and products. You can expect an excellent user experience with these.",
  ImageComponent: <img src={Interaction_Design} alt="Content Writing" />,
};

const ProductDesign = () => {
  return (
    <div className="product-design">
      <Header />

      <div>
        <img src={RectanglePDe} alt="Product Design" Class="w-full" />
      </div>

      <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative pt-16 md:pb-16 pb-0">
        <div className="md:w-9/10 lg:w-8/10 mx-auto">
          <p className="font-semibold font-sans md:text-5xl text-primary-blue text-4xl sm:leading-none max-w-lg text-center">
            Product Design
          </p>
          <p className="text-default-gray text-base md:text-lg leading-7 mb-10 text-center mt-6 md:px-16 lg:px-52">
            A successful product is a blend of company objectives and user
            requirements. We accomplish this by combining the two while
            continuously improving the user experience to assist brands in
            developing long-term products.
          </p>
          <div className="md:mb-0 mb-14 text-center flex justify-center">
            <Link
              to={'/designs/1'}
              classNames="rounded-md bg-newport-blue text-white px-5 py-4 leading-5 w-48"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-16">
        <div className="md:w-9/10 lg:w-8/10 mx-auto">
          <p className="font-semibold md:text-5xl text-primary-blue text-4xl sm:leading-none max-w-lg text-center mb-6 md:mb-11">
            Our Services
          </p>
          <PageSection
            position="right"
            Header={firstImageSection.header}
            Paragraph={firstImageSection.paragraph}
            Image={firstImageSection.ImageComponent}
          />

          <PageSection
            Header={secondImageSection.header}
            Paragraph={secondImageSection.paragraph}
            Image={secondImageSection.ImageComponent}
          />

          <PageSection
            position="right"
            Header={thirdImageSection.header}
            Paragraph={thirdImageSection.paragraph}
            Image={thirdImageSection.ImageComponent}
          />

          <PageSection
            position="left"
            Header={fourthImageSection.header}
            Paragraph={fourthImageSection.paragraph}
            Image={fourthImageSection.ImageComponent}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDesign;
