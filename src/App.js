import React from "react";
import "./App.css";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import NavBar from "./components/NavBar/NavBar";

// Páginas
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { Container } from "@mui/material";

const App = () => {
    return (
        <Router>
            <Container className="App" maxWidth="xl">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    <Route exact path="/detail/:id" element={<DetailPage />} />
                    <Route exact path="/cart" element={<CartPage />} />
                    <Route
                        exact
                        path="/category/:categoryId"
                        element={<CategoryPage />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
