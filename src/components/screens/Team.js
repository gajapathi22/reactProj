import React from 'react';
import Card from '../card';

const Team  =() =>{
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100vh',
    backgroundImage: "url('./react.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

    return(
      <div style ={divStyle}>
      <div className="row">
      <Card
        name="John Doe"
        position="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="/logo.png"
      />
      <Card
        name="Jane Smith"
        position="Front-end Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="/logo192.png"
      />
      {/* Add more Card components as needed */}
    </div>
    </div>

    );
        
};

export default Team