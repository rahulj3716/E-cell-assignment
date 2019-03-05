import React, { Component } from 'react';
import '../header.css';
import Card from './card';
import cards from '../images/imagesrc.js'


class Carousel extends Component{
    
   constructor(props){
       super(props);
       this.state = {
           cards :cards,
           card : cards[0]  
       }
   }
    nextslide = ()=>{
       let newindex = this.state.card.index+1;
       if(newindex==4){
           newindex=0;
       }
       console.log(newindex);
       this.setState({
           card : this.state.cards[newindex]
       })
    
    }
   prevslide = ()=>{
    let newindex = this.state.card.index-1;
    if(newindex===-1){
        newindex=3;
    }
    this.setState({
        card : this.state.cards[newindex]
    })
    }
    render(){
        return(
            <div className="slide">
                <div className="card">
                    <Card card={this.state.card}/>
                    
                <a className="prev" onClick ={()=>{this.prevslide()}} disabled = {this.state.card.index===0} >&#10094;</a>
                <a className="next"  onClick ={()=>{this.nextslide()}} disabled = {this.state.card.index===this.state.cards.length-1} >&#10095;</a>
                </div>
                
                
            </div>
        )
    }
}

export default Carousel