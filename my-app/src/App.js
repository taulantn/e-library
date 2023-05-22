import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './Admin/components/Sidebar';
import sidebar_menu from './Admin/constants/sidebar-menu';

import './App.css';

import Books from './Admin/pages/Books';
import Orders from './Admin/pages/Orders';
import Categories from './Admin/pages/Category';
import Users from './Admin/pages/Users';
import Home from './Landing/pages/Home';
import DashboardContent from './Admin/pages/Dashboard';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <SideBar menu={sidebar_menu} />
      <div className='dashboard-body'>
        <Routes>
          <Route exact path="/dashboard" element={<DashboardContent/>} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
