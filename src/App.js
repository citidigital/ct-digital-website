import { 
  Routes,
  Route,
} from "react-router-dom";

import ProductDevelopment from './Pages/ProductDevelopment';
import SocialMediaPage from './Pages/SocialMediaPage';
import BrandDesign from './Pages/BrandDesign'
import ProductDesign from "./Pages/ProductDesign";

import LandingPage from './Pages/LandingPage'

import './App.css';
import Projectpage from "./Components/ProjectPage";
import ProductDesignsPage from "./Pages/ProductDesignsPage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <Routes>
      <Route path="" element = {<LandingPage/>} />
      <Route path='product-development' element = {<ProductDevelopment />} />
      <Route path='project/:projectId' element = {<Projectpage />} />
      <Route path='designs/:tabId' element = {<ProductDesignsPage />} />
      <Route path='social-media-management' element = {<SocialMediaPage />} />
      <Route path='brand-design' element = {<BrandDesign />} />
      <Route path="product-design" element = {<ProductDesign />}/>
      <Route path="about-us/:tabId" element ={<AboutUsPage />}/>
    </Routes>
  );
}

export default App;