import React, { Component } from 'react';
import Header from './components/header.js';
import Search from './components/searchbox.js';
import Carousel from './components/carousel1';
import './header.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Iframe from './iframes/iframe.js';
import Iframe2 from './iframes/iframe2.js';
import Iframe3 from './iframes/iframe3.js';
import Iframe4 from './iframes/iframe4.js';
import Iframe5 from './iframes/iframe5.js';

class App extends Component {
  constructor(props){
      super(props);
       this.state = {
        songs : this.props.songs,
        
       }
     }
    
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      
        <Header />
        <div className="container">
        <Carousel cards = {this.state.cards}/>
        <Search className="search-box" filter = {this.state.songs} func={this.func}/>
        </div> 
        
        <p className="text">
          your song will display here
        </p>
        <Route path="/vande mataram" component ={Iframe} />
        <Route path="/oolala oolala"component ={Iframe2}/>
        <Route path="/bekhudi"component ={Iframe3}/>
        <Route path= "/munni badnam"component ={Iframe4}/>
        <Route path="/chikni chameli" component ={Iframe5} />
        <Route path="/god allah"component ={Iframe5}/>
        <Route path="/hud dabang"component ={Iframe4}/>
        <Route path= "/nayan ne bandh"component ={Iframe3}/>
        <Route path="/kaho na pyaar he" component ={Iframe2} />
        <Route path="/kya hua mera"component ={Iframe}/>
      
       
      </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
