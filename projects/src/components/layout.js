import React from 'react'
import {Link} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <p>Layout</p>
       <Link to='counter1'>Counter1</Link>  
       <Link to='counter1'>Counter1</Link>
       <Link to='todo'>Counter1</Link>
       <Link to='bmiCal'>Counter1</Link>

    </div>
  )
}

export default Layout



import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      </>
  )
};

export default Layout;
