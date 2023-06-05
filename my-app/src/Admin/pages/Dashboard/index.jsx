import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import '../styles.css';
import Users from '../Users'
import Books from '../Books';
import Categories from '../Category';
import Orders from '../Orders';

function DashboardContent () {

    const navigate = useNavigate();

    const navigateToUsers = () => {
        // navigate to /users
        navigate('/users');
      };

    const navigateToBooks = () => {
        // navigate to /books
        navigate('/books');
      };  

      const navigateToCategories = () => {
        // navigate to /books
        navigate('/categories');
        
      };

      const navigateToOrders = () => {
        // navigate to /books
        navigate('/orders');
        
      };

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="Dashboard" />

            <div className='dashboard-content-container'>
                <div className='dashboard-card-container'>
                <div className='dashboard-card'>
               
                 <Card>
                        <CardImg 
                        className="dashboard-card-img"  
                        src="https://cdn-icons-png.flaticon.com/512/166/166258.png"
                         />
                    <CardBody>
                        <CardTitle tag="h5">USERS</CardTitle>
                        <CardText>Check Users Data!</CardText>
                        <Button onClick={navigateToUsers} >CHECK USERS</Button>
                    </CardBody>
                </Card>
                </div>
                <div className='dashboard-card'>
               
               <Card>
                      <CardImg 
                      className="dashboard-card-img"  
                      src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png"
                       />
                  <CardBody>
                      <CardTitle tag="h5">BOOKS</CardTitle>
                      <CardText>Check Books Data!</CardText>
                      <Button onClick={navigateToBooks}>CHECK BOOKS</Button>
                  </CardBody>
              </Card>

                
              </div>

              <div className='dashboard-card'>
               
               <Card>
                      <CardImg 
                      className="dashboard-card-img"  
                      src="https://cdn-icons-png.flaticon.com/512/4989/4989577.png"
                       />
                  <CardBody>
                      <CardTitle tag="h5">CATEGORY</CardTitle>
                      <CardText>Check Categories!</CardText>
                      <Button onClick={navigateToCategories}>CHECK CATEGORIES</Button>
                  </CardBody>
              </Card>

                
              </div>

              <div className='dashboard-card'>
               
               <Card>
                      <CardImg 
                      className="dashboard-card-img"  
                      src="https://cdn-icons-png.flaticon.com/512/2821/2821876.png"
                       />
                  <CardBody>
                      <CardTitle tag="h5">ORDERS</CardTitle>
                      <CardText>Check Orders List!</CardText>
                      <Button onClick={navigateToOrders}>CHECK ORDERS</Button>
                  </CardBody>
              </Card>

                
              </div>

              <Routes>
                    <Route path="/users" element={<Users/>} />
                    <Route path="/books" element={<Books/>} />
                    <Route path="/categories" element={<Categories/>} />
                    <Route path="/orders" element={<Orders/>} />
                </Routes>
              </div>
            </div>
        </div>
    )
}

export default DashboardContent;






