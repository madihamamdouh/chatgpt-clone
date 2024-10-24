import React from 'react';
import "./rootlayout.css";
import { Link, Outlet } from 'react-router-dom';
const RootLayout = () => {
     return (
          <div className="rootLayout">
               <header>
                    <Link to="/" className='logo'>
                         <img src="/logo.png" alt="" />
                         <span>OPenAI</span>
                    </Link>
                    <div className="user">User</div>
               </header>
               <main>
                    <Outlet/>
                    fdfdf
               </main>
          </div>
     )
}

export default RootLayout