import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Particles from "react-particles-js";
=======
import Particles from "react-particles";
>>>>>>> bbac9b75afbf40190247f89e735a85eedab7d227
import Navbar from "./components/Navbar";
import Header from "./components/Header.js";


function App() {
  return (
    <>
<<<<<<< HEAD
       <Particles
       className="particles-canvas"
        params={{
          particles: {
            number: {
=======
      <Particles
        params={{
          particles: {
            shape: {
>>>>>>> bbac9b75afbf40190247f89e735a85eedab7d227
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
<<<<<<< HEAD
            },
            shape: {
            type: "circle", /*star, square*/
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
            } 
          }
        }}
      /> 
=======
            }
          }
        }}
      />
>>>>>>> bbac9b75afbf40190247f89e735a85eedab7d227
      <Navbar />
      <Header />
    </>
  );
}

export default App;
