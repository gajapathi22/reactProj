import React from 'react';
import Card from '../card';
import OtherPage from '../OtherPage';
import { connect } from 'react-redux';



const Team  =({ user }) =>{
  const divStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'start',
    height: '100vh',
    marginTop: '10px',
    backgroundImage: "url('./react.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  const cardStyle = {
    flex: '0 0 auto', 
    width: '300px', 
    margin: '0 10px',
    marginLeft:'0px' 
  };
    return(
      <div   style ={divStyle}>
      <div className="col">
          <div className="col s12 "  style={cardStyle}>
                <Card
                    name="John Doe"
                    position="Software Engineer"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    image="/logo.png"
                   />
          </div>

         <div className="col s12 "  style={cardStyle}>
              <Card
                  name="Jane Smith"
                  position="Front-end Developer"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  image="/logo192.png"
              />
        </div>
      <OtherPage name={user.name} email ={user.email}/>
      {/* Add more Card components as needed */}
    </div>
    </div>

    );
        
};

const mapStateToProps = (state) => {
  return {
     user:state.user
  };
};

export default connect(mapStateToProps)(Team);

