import React from 'react';
import { useSelector} from 'react-redux';

const OtherPage = ()=>{
   const {name,email} = useSelector((state)=>state.user);

   return(
      <div>
        <h2>User Details</h2>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
      </div>
   )
};

export default OtherPage;