import { 
  Routes,
  Route,
} from "react-router-dom";

import ProductDevelopment from './ProductDevelopment/ProductDevelopment';
import SocialMediaPage from './SocialMediaManagement/SocialMediaPage';
import BrandDesign from './BrandDesign/BrandDesign'
import ProductDesign from "./ProductDesign/ProductDesign";

import LandingPage from './LandingPage/LandingPage'
import AboutUs from './AboutUs/aboutUs'

import './App.css';
import Projectpage from "./Components/ProjectPage";
import ProductDesignsPage from "./Pages/ProductDesignsPage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <Routes>
      <Route path="" element = {<LandingPage/>} />
      <Route path='product-development' element = {<ProductDevelopment />} />
      <Route path='product-page' element = {<Projectpage />} />
      <Route path='designs' element = {<ProductDesignsPage />} />
      <Route path='social-media-management' element = {<SocialMediaPage />} />
      <Route path='brand-design' element = {<BrandDesign />} />
      <Route path="product-design" element = {<ProductDesign />}/>
      <Route path="about-us" element ={<AboutUsPage />}/>
    </Routes>
  );
}

export default App;