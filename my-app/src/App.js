import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './Admin/components/Sidebar';
import sidebar_menu from './Admin/constants/sidebar-menu';

import './App.css';

import Books from './Admin/pages/Books';
import Orders from './Admin/pages/Orders';
import Categories from './Admin/pages/Category';
import Users from './Admin/pages/Users';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<div></div>} />
                  <Route exact path="/books" element={<Books/>} />
                  <Route exact path="/categories" element={<Categories/>} />
                  <Route exact path="/users" element={<Users/>} />
                  <Route exact path="/orders" element={<Orders/>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;