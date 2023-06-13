// import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Páginas

const App = () => {  
    return(
        <Router>
            <div className="App">
                <NavBar/>
                <div id="main">
                    <ItemListContainer greeting="¡Bienvenido, disfruta de nuestras ofertas FLASH solo por 48hs!" fontSize="fs-3"/>
                </div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );   
}

export default App;