import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Header() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Header