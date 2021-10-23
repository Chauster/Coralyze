import React from 'react';
import Navbar from '../components/Navbar';
import ResetPassword from '../components/Authentication/resetpassword';
const resetpassword = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ResetPassword></ResetPassword>
    </div>
  );
};

export default resetpassword;
