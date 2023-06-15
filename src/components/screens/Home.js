import React from 'react';

const homeDescription = "Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions."
const Home  =() =>{
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('./react.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      };
    
      const contentStyle = {
        opacity :0.7,
        backgroundColor: '#f2f2f2',
        padding: '150px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width:'80%'
      };
      const paragraphStyle = {
        fontSize: '18px',
      };
    return(
        <>
           <div style={divStyle}>
              <div style={contentStyle}>
                   <p style={paragraphStyle}>{homeDescription}</p>
             </div>
         </div>
       
        </>
        
    )
        
}

export default Home