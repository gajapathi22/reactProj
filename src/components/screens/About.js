import { Axios } from 'axios';
import React from 'react';
import MyComponent from '../Axios';

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundImage: "url('./react.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight:'100vh'
    
  };

  const div1Style = {
    backgroundColor: '#f2f2f2',
    padding: '50px ',
    borderRadius: '50px',
    margin: ' 50px  800px  50px 50px',
  };

  const div2Style = {
    backgroundColor: '#f2f2f2',
    padding: '50px',
    borderRadius: '50px',
    mrgin:'100px ' ,
    marginLeft: '800px',
    marginRight:'auto'
  };

  const div3Style = {
    backgroundColor: '#f2f2f2',
    padding: '50px',
    borderRadius: '50px',
    margin: '50px  100px  10px 50px',
  };
  const paragraphStyle = {
    wordWrap: 'break-word',
  };

  return (
    <div style={containerStyle}>
      <div style={div1Style}>
        <h3>Top Left</h3>
        <p style = {paragraphStyle}>This is the chggvgvhgvjhvjhvjhjhvjvjhvjvjhvjhvjhvjhvjvjvjvjhvjhvjvjjhvjhvjhvjhvjhvjhvjhvjhvjhvjhvjvjvgvhgvghvjvjvhvvgvhgvhvhgv devdhmqvdqgvedvgedvedhontent on the top left side.</p>
      </div>

      <div style={div2Style}>
        <h3>Center Right</h3>
        <p style = {paragraphStyle}>This is the contehgvhgvhgvjvjvmhjvmhjvjmvmjvmvmvgmvnt in the center right.</p>
      </div>

      <div style={div3Style}>
        <h3>Bottom Left</h3>
        <p style = {paragraphStyle}>Tgfhis is the content ajvkukuqwkubqdebibqkiiqt hgcvxjycwhxgfjysxjqytfxjqfxjqyfxjftxjyqtfjqwfyfwtqjxyuftuxfxfthe bottom left side.</p>
      </div>
      <MyComponent/>
    </div>
  );
};

export default About;
