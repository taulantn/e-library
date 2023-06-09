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
import AboutUss from './Landing/components/About-us/About-us';
import Contact from './Landing/pages/Contact';
import Login from "./Landing/components/LogIn-SignUp/index"
import BooksPage from './Landing/pages/Books';
// import BookDetail from './Landing/components/Books-Details'
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
        <Route path="/about-us" element={<AboutUss />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books-page" element={<BooksPage/>} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="/login-signup" element={< Login/>} />
        {/* <Route path="/book-details" element={< BookDetail/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;


//asdklmalksmdasd
//;alksmdlkamsdlkmaksd
//alskmdlakmsdlkmasdlmkasdd