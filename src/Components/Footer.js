import React from 'react';
import Facebook from '../assets/Facebook';
import Twitter from '../assets/Twitter';
import Instagram from '../assets/Instagram';
import { applyWhiteSpace } from '../utils/helper';
import Logo from '../assets/Logo';
import { ReactComponent as Envelope } from '../assets/Envelope.svg';
import { ReactComponent as Phone } from '../assets/Phone.svg';
import { ReactComponent as WhatsApp } from '../assets/whatsapp.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer relative z-10 bg-cyan-blue">
      <div className="max-w-layout mx-auto">
        <div className="md:w-9/10 lg:w-8/10 md:mx-auto mx-4">
          <div className="pt-20 pb-10 text-gray-800 md:flex justify-between md:space-x-12">
            <div className="md:w-2/10 md:mb-0 mb-10">
              <Logo />
            </div>
            <div className="md:w-2/10 md:mb-0 mb-10">
              <p className="text-xl text-dark-cyan font-extrabold mb-8">
                Contact
              </p>
              <div className="h-14">
                <p className="text-default-gray text-sm">Write to us </p>
                <div className="flex items-center border-b border-b-dark-gray w-fit pb-5 mt-2">
                  <span className="mr-1">
                    <Envelope />
                  </span>
                  <a
                    href="mailto:contact@ctdigitaltech.com?subject = Enquiry&body = Message"
                    className="text-default-gray text-sm"
                  >
                    contact@ctdigitaltech.com
                  </a>
                </div>
              </div>
              <div className="pt-5">
                <p className="text-default-gray text-sm pt-5">Call Us </p>
                <div className="flex mt-2">
                  <span className="mr-1 mt-0.5">
                    <Phone />
                  </span>
                  <div>
                    <a
                      href="tel:+13107510178"
                      className="text-default-gray text-sm block"
                    >
                      +13107510178
                    </a>
                    <a
                      href="tel:+2348108039794"
                      className="text-default-gray text-sm block"
                    >
                      +2348108039794
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/10 md:mb-0 mb-10">
              <p className="text-xl text-dark-cyan font-extrabold mb-8">
                Office{' '}
              </p>
              <div className=" h-14">
                <div className="flex items-center border-b border-b-dark-gray w-fit pb-2.5 mt-2">
                  <p className="text-default-gray text-sm">
                    {applyWhiteSpace(
                      '1200 S. Figueroa St.\nLos Angeles, CA 90015\nUnited States'
                    )}
                  </p>
                </div>
              </div>
              <div className="pt-5">
                <p className="block text-default-gray mt-5 text-sm">
                  {applyWhiteSpace(
                    'Sinari Daranijo St.\nVictoria Island, Lagos 106104 Nigeria'
                  )}
                </p>

                <p className="text-default-gray mt-7 text-sm">
                  {applyWhiteSpace('Hours: Mon. - Fri.\n8am - 5pm PST/WAT')}
                </p>
              </div>
            </div>
            <div className="md:w-2/10 md:mb-0 mb-10">
              <p className="text-xl text-dark-cyan font-extrabold mb-8">
                Services{' '}
              </p>
              <ul className="list-none">
                <li className="mb-6">
                  <Link to={'/designs/1'} className="text-default-gray text-sm">
                    Design
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={'/'} className="text-default-gray text-sm">
                    Consulting
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={'/'} className="text-default-gray text-sm">
                    Managment{' '}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={'/'} className="text-default-gray text-sm">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-2/10 md:mb-0 mb-10">
              <p className="text-xl text-dark-cyan font-extrabold mb-8">
                SiteMap{' '}
              </p>
              <ul className="list-none">
                <li className="mb-6">
                  <Link
                    to={'/about-us/1'}
                    className="text-default-gray text-sm"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={'#services'} className="text-default-gray text-sm">
                    Services{' '}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link to={'/'} className="text-default-gray text-sm">
                    Case Studies{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex pb-5 m-auto pt-5 border-t-0.5 border-t-darker-cyan text-sm justify-between">
            <p className="uppercase text-default-gray text-sm font-medium md:mb-0 mb-6">
              CT Digital © 2021 / ALL RIGHTS RESERVED
            </p>
            <div className="flex">
              <span className="text-default-gray text-sm font-medium">
                Follow us:{' '}
              </span>
              <a href="/#" className="w-5 mx-7">
                <Facebook />
              </a>
              <a href="https://wa.me/+13107510178" className="w-5 mx-7">
                <WhatsApp />
              </a>
              <a href="/#" className="w-5 mx-7">
                <Instagram />
              </a>
              <a href="/#" className="w-5 mx-7">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
