import React from 'react';

import Image1 from '../assets/Images/DesignGallery/image1.png';
import Image2 from '../assets/Images/DesignGallery/image2.png';
import Image3 from '../assets/Images/DesignGallery/image3.png';
import Image4 from '../assets/Images/DesignGallery/image4.png';
import Image5 from '../assets/Images/DesignGallery/image5.png';
import Image6 from '../assets/Images/DesignGallery/image6.png';
import Image7 from '../assets/Images/DesignGallery/image7.png';
import Image8 from '../assets/Images/DesignGallery/image8.png';
import Image9 from '../assets/Images/DesignGallery/image9.png';
import Image10 from '../assets/Images/DesignGallery/image10.png';

const ProjectGallery = () => {
  return (
    <section className="overflow-hidden text-gray-700 md:mt-0 mt-10">
      <div className="container px-5 py-2 mx-auto lg:pt-15 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image1}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image2}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image4}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-2/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image5}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image6}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image7}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image8}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-2/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image9}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-2 md:p-6">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-md"
                src={Image10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
