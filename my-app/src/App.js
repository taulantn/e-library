import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './Admin/components/Sidebar';
import sidebar_menu from './Admin/constants/sidebar-menu';

import './App.css';

import Products from './Admin/pages/Products';
import Orders from './Admin/pages/Orders';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<div></div>} />
                  <Route exact path="/products" element={<Products/>} />
                  <Route exact path="/orders" element={<Orders/>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;