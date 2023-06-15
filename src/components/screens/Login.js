import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setName, setEmail } from '../userActions';
import OtherPage from '../OtherPage';

const Login = ({ setName, setEmail }) => {
  const [name, setNameValue] = useState('');
  const [email, setEmailValue] = useState('');

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name);
    setEmail(email);
  
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" id="name" value={name} onChange={handleNameChange} />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="email">Email</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit">
          Submit
        </button>
      </form>
      <OtherPage/>
    </div>
  );
};

const mapDispatchToProps = {
    setName,
    setEmail,
  };
  
  export default connect(null, mapDispatchToProps)(Login);