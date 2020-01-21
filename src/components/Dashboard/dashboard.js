import React from 'react';
import './dashboard.css'
import Drawer from '../Header/drawer'
import Header from '../Header/header'

const Dashboard = () => {
  return <div>
   <Header />
   <div className='container'>
    <h1 className='text-center'>Dashboard</h1>
    <hr />
   </div>
  </div>
}
export default Dashboard;
