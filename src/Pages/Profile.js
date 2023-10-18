import React from 'react';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
        <Header />
        <div className='profile'>
          <h1>{user.email}</h1>
          <h1>{user.uid}</h1>
        </div>
    </>
  )
}

export default Profile