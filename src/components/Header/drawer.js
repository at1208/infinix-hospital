
import React from 'react';
import './drawer.css'
import { Drawer, Button,Icon  } from 'antd';
import { MdReorder } from "react-icons/md";
import { Link } from 'react-router-dom'



class SideDrawer extends React.Component {

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <MdReorder type="primary" onClick={this.showDrawer} className='drawer-icon'>

        </MdReorder>
        <Drawer
          title="Admin"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Link to='/dashboard'><p>Dashboard</p></Link>
           <Link to='/management'><p> Management</p></Link>
          <Link to='/'><p>Logout</p></Link>


        </Drawer>
        <span    style={{ marginLeft: "20px", fontSize:"26px"}}>.com</span>
      </div>
    );
  }
}

 export default SideDrawer;
