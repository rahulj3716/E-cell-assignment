import React from 'react';
import '../header.css';
import src from '../images/download (1).jpg'

const Card = (props) =>{


    return(
        <div className="cardimage" >
           <a href="munni badnam"> <img src={src} alt={props.card.index}/></a>
        </div>
    )
}

export default Card