import React from 'react';


  
  
  
const About  =() =>{
    const div1Style = {
        position: 'absolute',
        top: '20%',
        left: '5%',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '5px',
      };
    
      const div2Style = {
        position: 'absolute',
        top: '50%',
        right: '5%',
        transform: 'translateX(-50%)',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '5px',
      };
    
      const div3Style = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '5px',
      };

    const divStyle = {
       
        height: '100vh',
        backgroundImage: "url('./react.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return(
        <>  
        <div style= {divStyle}>
              <div style={div1Style}>
                   <h3>Left Side</h3>
                   <p>This is the content on the left side.</p>
             </div>

             <div style={div2Style}>
                  <h3>Center</h3>
                  <p>This is the content in the center.</p>
             </div>

             <div style={div3Style}>
                   <h3>Bottom Left Side</h3>
                   <p>This is the content at the bottom left side.</p>
             </div>
        </div>
            
        </>
       
    )
        
}

export default About