import React from 'react';
import '../header.css';


const Searchitems=(props)=>{

    
     
       return(
      props.filter.map(item=>{
        return(
            <div key={item.id} className="songs-item">
                <a key={item.id} href={item.name}  >{item.name}</a>
                <br/>
                </div>
            )
      })
       
       )
    }
    
export default Searchitems