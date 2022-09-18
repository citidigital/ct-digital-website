import { 
  Routes,
  Route,
} from "react-router-dom";

import ProductDevelopment from './ProductDevelopment/ProductDevelopment';
import SocialMediaPage from './SocialMediaManagement/SocialMediaPage';
import BrandDesign from './BrandDesign/BrandDesign'
import ProductDesign from "./ProductDesign/ProductDesign";

import LandingPage from './LandingPage/LandingPage'


import './App.css';


function App() {
  return (
    <Routes>
      <Route path="" element = {<LandingPage/>} />
      <Route path='product-development' element = {<ProductDevelopment />} />
      <Route path='social-media-management' element = {<SocialMediaPage />} />
      <Route path='brand-design' element = {<BrandDesign />} />
      <Route path="/product-design" element = {<ProductDesign />}/>
    </Routes>
  );
}

export default App;