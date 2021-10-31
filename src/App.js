import './App.css';
import React, {Component} from 'react';

import Navigation from './components/navigation/Navigation'
import Logo from "./components/logo/Logo";
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Image from './components/image/Image';

import Particles from 'react-particles-js';

const particlesParams = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area:700
      }
    }
  }
}

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: "",
      box: {}
    }

  }

  calculateFaceLocation = (data) => {
    const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = image.width
    const height = image.height
    return {
      topRow: Number(height * boundingBox.top_row),
      leftCol: Number(width * boundingBox.left_col),
      rightCol: Number(width - (width * boundingBox.right_col)),
      bottomRow: Number(height - (height * boundingBox.bottom_row)) 
    }

  }

  displayFaceBox = (box) => {
    this.setState({
      box: box
    })
    console.log(this.state.box)
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  onSubmit = () => {

    const obj = {
      user_app_id: {
            user_id: "o8ps2yhlqctx",
            app_id : "0cbeb7ffe2e544fd893612065c346c65"
        },
      inputs: [
        {
          data : {
            image: {
              url : this.state.input
            }
          }
        }
      ]
    }

    const raw = JSON.stringify(obj);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key 90057f8a4c684fecba97e7ec583b0807'
      },
      body: raw
    };
    
    fetch("https://api.clarifai.com/v2/models/e15d0f873e66047e579f90cf82c9882z/outputs", requestOptions)
      .then(response => response.text())
      .then(result => this.calculateFaceLocation(JSON.parse(result, null, 2)))
      .then(result2 => this.displayFaceBox(result2))
      .catch(error => console.log('error', error));

  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles" 
        params={particlesParams}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
        />
        <Image box={this.state.box} url={this.state.input} />
      </div>
    );
  }

}

  

export default App;
