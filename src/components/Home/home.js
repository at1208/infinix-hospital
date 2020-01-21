import React, { Component } from 'react';
import './home.css';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

import Hospital from './hospital'


class Home extends Component {

  state ={

    hospitalStatus: false,

  }

  render(){

    return <div>
    <h1 className='container text-center  heading'>Welcome to  .com</h1>
    <div className='container  '>
  <div className='row col justify-content-center'>
    <div className='shadow col-md-5 right-container'>
    <h1 className='user text-center'  onClick={() => this.setState({ hospitalStatus: true  })}>Register as a Hospital</h1>
    {this.state.hospitalStatus && <Hospital /> }
    </div>

    </div>
    </div>


          </div>
  }
}

export default Home;
