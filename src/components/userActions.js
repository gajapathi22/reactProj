export const setName = (name) => {
    return {
      type: 'SET_NAME',
      payload: name,
    };
  };
  
  export const setEmail = (email) => {
    return {
      type: 'SET_EMAIL',
      payload: email,
    };
  };