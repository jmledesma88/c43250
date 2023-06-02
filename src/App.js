// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <h1>Hola Mundo</h1>
//     </div>
//   );
// }

// export default App;

import React, {Component} from "react";
import "./App.css";

import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
    render() {
        return(
            <div className="App">
                <NavBar/>
                <Header/>
                <Header title="Soy un título a partir de una prop" color="red" />
                <div className="userSection">
                    <CardUser name="Pedro" date="20/03/13" description="Usuario experto" img="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                    <CardUser name="Pedro" date="20/03/13" description="Usuario experto" img="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                    <CardUser name="Pedro" date="20/03/13" description="Usuario experto" img="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
                </div>
            </div>
        );
    }
}

export default App;