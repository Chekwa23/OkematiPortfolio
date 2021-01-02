import React, { Component } from 'react';
import {Container,Jumbotron, Form, Navbar, Nav, Button, Image, Row, Col} from "react-bootstrap";
import logo from './logo.svg';
import './App.css';

// width = 1438
// height = 900

//1106
import backgroundImage from './svgs/backgroundImage.svg';
import menuButton from './svgs/menuButton.svg';
import verticalLine from './svgs/verticalLine.svg';
import picture1 from './svgs/picture1.svg';
import picture2 from './svgs/picture2.svg';
import picture3 from './svgs/picture3.svg';
import playButton from './svgs/playButton.svg';
import verticalLongLines from './svgs/verticalLongLines.svg';
import music from './svgs/music.svg';


class App extends Component{
  render(){
    return (
      <div style={{backgroundImage:"url("+backgroundImage+")", backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100vw", height:"100vh"}}>
        <div style={{background:"linear-gradient(247.82deg, #0B141A -8.45%, rgba(0, 0, 0, 0.25) 125.9%), linear-gradient(45.68deg, #0B141A 41.68%, rgba(0, 0, 0, 0.25) 70.84%)", backgroundSize:"cover", width:"100vw", height:"100vh"}}>
          <div style={{position:"relative", backgroundColor:"", width:"77%", height:"100%", margin:"auto"}}>
            <div><Image className="" style={{position:"absolute", marginLeft:'-0.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginLeft:'19.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginLeft:'39.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginLeft:'59.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginLeft:'79.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginLeft:'99.5%'}} src={verticalLongLines} height="100%" width="1%" alt="logo"/></div>
            
            

            <div><Image className="" style={{position:"absolute", marginTop:'4.78%', marginLeft:'0%'}} src={menuButton} height="35vmin" width="35vmin" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginTop:'11.4%', marginLeft:'0%'}} src={verticalLine} height="40vmin" width="2vmin" alt="logo"/></div>
            <div><p style={{position:"absolute", marginTop:'12.1%', marginLeft:'1%', fontSize:"1vmin", color:"#32C069", fontFamily:"Airbnb Cereal App", fontWeight:"500", letterSpacing:"0.3vmin"}}>HELLO, MY NAME IS</p></div>
            <div><p style={{position:"absolute", marginTop:'16%', marginLeft:'0%', fontSize:"11vmin", color:"#32C069", fontFamily:"Airbnb Cereal App", fontWeight:"bold", letterSpacing:"0.08vmin", backgroundImage: "linear-gradient(45deg, #32C069, #4F97A3)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Chewka Lucas</p></div>
            
            <div><Image className="" style={{position:"absolute", marginTop:'28%', marginLeft:'40%'}} src={verticalLine} height="40vmin" width="2vmin" alt="logo"/></div>
            <div><p style={{position:"absolute", marginTop:'28.75%', marginLeft:'41%', fontSize:"1vmin", color:"#32C069", fontFamily:"Airbnb Cereal App", fontWeight:"500", letterSpacing:"0.3vmin"}}>WHAT I DO</p></div>
            <div style={{position:'absolute', marginTop:'31%', marginLeft:'40%', width:'20%'}}>
              <p style={{position:"absolute", marginTop:'0%', marginLeft:'0%', fontSize:"200%", color:"#FFFFFF", fontFamily:"Airbnb Cereal App", fontWeight:"500", letterSpacing:"0.3vmin"}}>Above all else, I am a UI/UX Designer!</p>
            </div>

            <div><Image className="" style={{position:"absolute", marginTop:'29%', marginLeft:'0%'}} src={picture1} height="35%" width="20%" alt="logo"/></div>
            <div><Image className="" style={{position:"absolute", marginTop:'47%', marginLeft:'20%'}} src={picture2} height="35%" width="20%" alt="logo"/></div>
            <div style={{backgroundColor:'#1B1A1A', position:'absolute', marginTop:'40%', marginLeft:'40%', height:'18%', width:'40%'}}>
              <Image className="" style={{position:"absolute", marginTop:'0%', marginLeft:'0%', height:"100%", width:"35%"}} src={picture3} alt="logo"/>
              <Image className="" style={{position:"absolute", marginTop:'0%', marginLeft:'35%', height:"100%", width:"65%"}} src={music} alt="logo"/>
              <div style={{backgroundColor:'#32C069', position:'absolute', marginTop:'25.3%', marginLeft:'34.9%', height:'20%', width:'7%'}}>
                <Image className="" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", height:"50%", width:"50%"}} src={playButton} alt="logo"/>
              </div>
            </div>
            <div style={{backgroundColor:'#32C069', position:'absolute', marginTop:'52.6%', marginLeft:'80%', height:'7%', width:'20%'}}>
              <p style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -130%)", fontSize:"250%", color:"#000000", fontFamily:"Airbnb Cereal App", fontWeight:"bold", letterSpacing:"0vmin"}}>HIRE ME</p>
            </div>
          
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
