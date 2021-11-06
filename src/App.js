import './App.css';
import React, {Component} from 'react';

import Navigation from './components/navigation/Navigation'
import Logo from "./components/logo/Logo";
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Image from './components/image/Image';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register'

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
      imageUrl: "",
      box: [],
      route: 'signin'
    }

  }

  calculateFaceLocation = (data) => {
    const faces = data.outputs[0].data.regions
    
    const image = document.getElementById("inputimage")
    const width = image.width
    const height = image.height

    const boxes = faces.map(face => {
    const boundingBox = face.region_info.bounding_box

    const topRow = Number(height * boundingBox.top_row)
    const leftCol = Number(width * boundingBox.left_col)
    const rightCol = Number(width - (width * boundingBox.right_col))
    const bottomRow = Number(height - (height * boundingBox.bottom_row)) 
  
    return [topRow, rightCol, bottomRow, leftCol]
    })

    return boxes;
  }

  displayFaceBox = (boxes) => {
    this.setState({
      box: boxes
    })

  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    })

  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    },
    () => {
      const obj = {
        user_app_id: {
              user_id: "o8ps2yhlqctx",
              app_id : "0cbeb7ffe2e544fd893612065c346c65"
          },
        inputs: [
          {
            data : {
              image: {
                url : this.state.imageUrl
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
        // .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data.regions))
        .then(result2 => this.displayFaceBox(result2))
        .catch(error => console.log('error', error));
    }
    )  

  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles" 
        params={particlesParams}
        />
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === "signin" ? 
          <SignIn onRouteChange={this.onRouteChange}/>
          :
          this.state.route === "register" ? 
          <Register onRouteChange={this.onRouteChange}/>
          : 
          <div>
          <Logo/>
          <Rank/>
          <ImageLinkForm
            onInputChange={this.onInputChange} 
            onSubmit={this.onSubmit}
          />
          <Image box={this.state.box} url={this.state.imageUrl} />
          </div>
        }
      </div>
    );
  }

}

export default App;
