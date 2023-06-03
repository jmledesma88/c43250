import React, {Component} from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends Component {
    render() {
        return(
            <div className="App">
                <NavBar/>
                <div id="main">
                    <ItemListContainer greeting="¡Bienvenido, disfruta de nuestras ofertas FLASH solo por 48hs!" fontSize="fs-3"/>
                </div>
            </div>
        );
    }
}

export default App;