import React from "react";

export default class Body extends React.Component { 
    render () {
        const imgStyle = {
            height: '300px',
            width: '400px'
        }
        return (
            <div class="container">  
      
            <header>
              <h1 class="center-align">
              <span>Sam</span>&nbsp;<span>Burkett</span>
              </h1>
           </header>
     
          <div class="card blue-grey darken-1">
             <div class="card-content white-text">
               <span class="card-title">Hola</span>
               <p>Welcome to the site, hope you enjoy the lack of content and cat images!</p>
             </div>
             <div class="card-action">
              <a href="learnmore.html">Click for more!</a>
              <a href="fun.html">Click for fun!</a>
             </div>
         </div>  
     
         <div class="center-align">
           <img src="img/cat.jpg" alt="" class="responsive-img" style={imgStyle}></img>
         </div>
     
         <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis cursus ligula. Praesent ut enim et dui bibendum fermentum eget vitae nunc. In diam velit, fringilla ut erat a, molestie ullamcorper libero. Vestibulum ipsum ipsum, rutrum sit amet mauris non, ornare vestibulum metus. Sed eu ex egestas, tempus mauris vitae, eleifend purus. Donec ut orci congue, dapibus odio sit amet, volutpat ligula. Sed tempus ornare massa, sit amet semper tellus congue quis. Duis iaculis est odio, id convallis nibh consequat id.
         </p>    
     
         <br></br>
     
         <div class="center-align">
             <img src="img/cat2.jpg" alt="" class="responsive-img" style={imgStyle}></img>
         </div>
     
         <br></br>
     
         <p>
             Phasellus at nunc sedn purus posuere rhoncus tincidunt ut elit. Aenean et pretium augue. Pellentesque interdum varius justo, vel rhoncus erat viverra vitae. Aenean non justo sit amet nisl sagittis ornare et posuere eros. Suspendisse ac augue consectetur, consectetur nisl vitae, lobortis orci. Morbi magna lacus, facilisis sed fermentum eu, maximus nec libero. Curabitur laoreet magna dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque consequat eros sed risus mollis semper. Cras eu massa mattis, sagittis ex quis, sollicitudin dui. Fusce eget feugiat neque. Phasellus fermentum malesuada lacinia. Duis urna lorem, vestibulum ac pretium egestas, tristique ut turpis. Integer blandit ut nibh ac tincidunt. Quisque fringilla tortor ut quam iaculis iaculis.
         </p>
     
         <br></br>
     
         <div class="center-align">
             <img src="img/cat3.jpg" alt="" class="responsive-img" style={imgStyle}></img>
         </div>
       </div>
        )
    }
}