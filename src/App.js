import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NoPage from "./components/NoPage";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import CategoryProduct from "./components/CategoryProduct";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import axios from "axios";
import { domain, header, token } from "./env";
import { useEffect, useState } from "react";
import { useGlobalState } from "./state/provider"
import './App.css'
function App() {
  const [{ profile,pagereload }, dispatch] = useGlobalState()
  const getProfile = () => {
    axios.get(`${domain}/profile/`, { headers: header })
      .then((response) => {
        dispatch ({
          type : "ADD_PROFILE",
          profile : response.data['data']
        })
      })
      .catch(error => console.error(`Error : ${error}`))
  }

  useEffect(() => {
    if (token !== null) {
      getProfile()
    }
  }, [pagereload])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={< HomePage />} />
        <Route path='/*' element={< NoPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<CategoryProduct />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
