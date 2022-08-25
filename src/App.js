import './App.css';
import { 
  Routes,
  Route,
} from "react-router-dom";
import ProductDevelopment from './ProductDevelopment/ProductDevelopment';
import SocialMediaPage from './SocialMediaManagement/SocialMediaPage';
import BrandDesign from './BrandDesign/BrandDesign';

function App() {
  return (
    <Routes>
      <Route path='product-development' element = {<ProductDevelopment />} />
      <Route path='social-media' element = {<SocialMediaPage />} />
    </Routes>
  );
}



export default App;