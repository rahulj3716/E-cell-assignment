import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
 const src ='./songs/Ke Ghar Ab Aaoge Sandese Aate Hain Full Song Border 1997.mp3';
const songs = [
    
    {name : 'vande mataram', id : 1 ,src : src},{name : 'munni badnam' ,id : 2,src : src},
    {name : 'oolala oolala' ,id : 3 ,src : src},{name : 'bekhudi' ,id : 4 ,src : src},
    {name : 'chikni chameli' ,id : 5 ,src : src},{name : 'hud dabang' ,id : 6 ,src : src},
    {name : 'god allah' ,id : 7 ,src : src},{name : 'kaho na pyaar' ,id : 8 ,src : src},
    {name : 'nayan ne bandh' ,id : 9 ,src : src},{name : 'kya hua mera' ,id : 10 ,src : src}
  
];



ReactDOM.render(<App  songs = {songs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
