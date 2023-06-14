import React from 'react';

const Card = ({name,position,description,image})=>{
    return(
      <div className="col s12 m12">
      <div className="card small">
        <div className="card-image">
          <img src={image} alt={name} />
         
        </div>
        
        <div className="card-content">
        <span className="card-title">{name}</span>
          <p>{position}</p>
         
        </div>
        <div className="card-action">
          
        </div>
      </div>
    </div>
    );
};

export default Card