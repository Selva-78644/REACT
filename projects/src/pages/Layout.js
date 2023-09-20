import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <p>Layout</p>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact</Link>
      <Outlet/> 
    </div>
)
};

export default Layout;


    