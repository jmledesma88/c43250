// import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Páginas
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";


const App = () => {  
    return(
        <Router>
            <div className="App">
                <NavBar/>
                {/* <div id="main">
                    <ItemListContainer greeting="¡Bienvenido, disfruta de nuestras ofertas FLASH solo por 48hs!" fontSize="fs-3"/>
                </div> */}
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    {/* <Route exact path="/detail/:id" element={<DetailPage />} />
                    <Route exact path="/category/:categoryId" element={<CategoryPage />} /> */}
                </Routes>
            </div>
            <DetailPage/>
        </Router>
    );   
};

export default App;