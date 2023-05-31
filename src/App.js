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

import Header from "./components/Header";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;