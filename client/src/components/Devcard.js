import React from "react";

function Devcard(props) {
  return (
    
        <div className="dev-info">
            <h1>{props.title}</h1>
            <img className="dev-pic"
            src={process.env.PUBLIC_URL + props.imgSrc} alt={props.alt}/>
            <p>{props.description}</p>
            
            <div className="dev-icon-container">
              
              <div className="dev-icon"> 
                  <a href={props.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                  <h4>Code</h4></a>
              </div>
              
              <div className="dev-icon">
                  <a href={props.www} target="_blank" rel="noreferrer">
                  <i className="fas fa-globe"></i>
                  <h4>WWW.</h4></a>
              </div>

            </div>
        </div>
  
  );
}

export default Devcard;