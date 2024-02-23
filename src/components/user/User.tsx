'use Client';
import React from 'react';
import UserNavbar from './userNavbar';
import LandingImage from './LandingImage';
import Cards from './Cards';
import Team from './Team';
import Records from './Records';
import Search from './Search';
import Footer from './Footer';

const User = () => {
  return (
    <>
      <UserNavbar />
      <LandingImage />
      <Cards />
      <Team />
      <Records />
      <Search />
      <Footer />
    </>
  );
};

export default User;
