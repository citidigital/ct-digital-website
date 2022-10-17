import { Link, useParams } from 'react-router-dom';
import AboutUs from './AboutUs';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const AboutUsPage = () => {
  const params = useParams();
  const { tabId = 1 } = params;
  return (
    <div className="about-us">
      <Header />

      <section className="about md:w-full mx-auto relative">
        <div className="w-full bg-gray-100">
          <div className="max-w-layout mx-auto">
            <div className="tabs flex w-full mb-6 md:w-9/10 lg:w-8/10 mx-auto pt-4">
              <Link
                to={'/about-us/1'}
                className={`${
                  tabId === 1
                    ? 'text-blue-1000 active-tab'
                    : 'bg-transparent mb-3 text-neutral-1000'
                } md:ml-10 px-5 leading-5 font-semibold`}
              >
                Overview
              </Link>
              {/* <Link to={'/about-us/2'} className={`${tabId === 2 ? 'text-blue-1000 active-tab' : 'bg-transparent mb-3 text-neutral-1000'} px-5 leading-5 font-semibold`}>Our Team</Link> */}
            </div>
          </div>
        </div>
        {tabId == 1 ? <AboutUs /> : null}
        {/* {selectedTab == 2 ? <AboutUs /> : null} */}
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
