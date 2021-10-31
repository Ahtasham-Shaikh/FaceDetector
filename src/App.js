import './App.css';

import Navigation from './components/navigation/Navigation'
import Logo from "./components/logo/Logo";
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

function App() {

  const particlesParams = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }

  return (
    <div className="App">
      <Particles 
      className="particles" 
      params={particlesParams}
      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/*<Image/>} */}
    </div>
  );
}

export default App;
