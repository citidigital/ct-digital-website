import React from 'react';
import { Link, useParams } from 'react-router-dom';

import DesignHero from '../assets/Images/design_hero.jpeg';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProjectGallery from './ProjectGallery';
import UIDesignPage from './UIDesignPage';

const ProductDesignsPage = () => {
  const params = useParams();
  const { tabId } = params;

  return (
    <div className="productDevelopment">
      <Header />

      <div>
        <img src={DesignHero} alt="Product Development" className="w-full" />
      </div>

      <section className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 projects relative py-10">
        <div className="text-center w-full flex justify-center">
          <div className="flex bg-verylight-blue rounded-md h-12 items-center w-fit">
            <Link
              to={'/designs/1'}
              className={`rounded-md ${
                tabId === 1
                  ? 'bg-newport-blue text-white'
                  : 'bg-transparent text-black'
              } px-5 py-3 w-38 leading-5`}
            >
              UI Design
            </Link>
            <Link
              to={'/designs/2'}
              className={`rounded-md ${
                tabId === 2
                  ? 'bg-newport-blue text-white'
                  : 'bg-transparent text-black'
              } px-5 py-3 w-38 leading-5`}
            >
              Brand Design
            </Link>
          </div>
        </div>
        {tabId === 1 ? <UIDesignPage /> : null}
        {tabId === 2 ? <ProjectGallery /> : null}
      </section>

      <Footer />
    </div>
  );
};

export default ProductDesignsPage;
