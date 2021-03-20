import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import Particles from "react-particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header.js";


function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            shape: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
