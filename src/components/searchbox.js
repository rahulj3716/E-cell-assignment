import React, { Component } from 'react';

import '../header.css';

import Searchitems from './searchitems';

class Search extends Component {
    constructor(props) {
        super(props);
    this.state = {
      filter:this.props.filter
      
    };
    this.handleChange = this.handleChange.bind(this);
}
    
    handleChange(e) {
		
    let currentList = [];
	
    let newList = [];

		
    if (e.target.value !== "") {
		
      currentList = this.props.filter;

			
      newList = currentList.filter(item => {
		
        const lc = item.name.toLowerCase();
			
        const filtered = e.target.value.toLowerCase();
				
        return lc.includes(filtered);
      });
    } else {
		
      newList = this.props.filter;
    }
		
    this.setState({
      filter: newList
    });
  }
  
    render() {
       return (
        <div className="search">
          <input type="Search" placeholder="top songs !!" onChange={this.handleChange}/>
          <div className="songs-box">
           <Searchitems filter={this.state.filter} func={this.props.func}/>
           
          </div>
        </div>
      
      );
    }
  }
  

  export default Search;