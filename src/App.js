import { 
  Routes,
  Route,
} from "react-router-dom";

import ProductDevelopment from './pages/ProductDevelopment'; 
import SocialMediaPage from './pages/SocialMediaPage'; 
import BrandDesign from './pages/BrandDesign'
import ProductDesign from "./pages/ProductDesign";

import LandingPage from './pages/LandingPage'

import './App.css';
import Projectpage from "./components/ProjectPage";
import ProductDesignsPage from "./pages/ProductDesignsPage";
import AboutUsPage from "./pages/AboutUsPage";

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