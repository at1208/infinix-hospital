import React , { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

class Hospital extends Component {

  render(){
    return <>
       <div className='input-element'>
       <Input placeholder="Enter hospital Name" />
    </div>

    <div className='input-element'>
     <Input placeholder="Enter hospital email" />
  </div>

<div className='input-element'>
 <Input placeholder="Enter password" type='password'/>
</div>

<div className='text-center submit-button'>
<a to='/'><Button className='btn btn-info' onClick={() => {
  window.location.reload()

}}>Submit</Button></a>
</div>
    </>
  }
}


export default Hospital;
