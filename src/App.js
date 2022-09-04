import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import NoPage from "./components/NoPage";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import CategoryProduct from "./components/CategoryProduct";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={< HomePage />} />
        <Route path='/*' element={< NoPage />} />
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/category/:id" element={<CategoryProduct />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
