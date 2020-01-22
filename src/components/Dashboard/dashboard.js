import React, {Component} from 'react';
import './dashboard.css'
import Drawer from '../Header/drawer'
import Header from '../Header/header'
import TextField from '@material-ui/core/TextField';
import {Button} from 'antd';

class Dashboard  extends Component {
    state = {
      addressGurgaon: 'CH Baktawar Singh Road, Sector 38, Gurugram, Haryana 122001',
      addressLucknow: 'Sector - A, Pocket - 1, Sushant Golf City, Amar Shaheed Path, Lucknow, Uttar Pradesh 226030',
      addressIndore: 'Medanta Super Speciality Hospital, Plot No. 8, PU04, Commercial Scheme 54, Rasoma Square, Vijaynagar, AB Road, Indore - 452010',
      addressRanchi: 'P.O: Irba, P.S: Ormanjhi,, National Highway 33, Ranchi, Jharkhand 835217',
      addressSouthDelhi: 'E – 18, Defence Colony, New Delhi, Delhi 110024',
      addressDLFCybercity: 'Building No. 10C, Upper Ground Floor, DLF Cyber City, Phase II, Gurugram, Haryana 122002',


       GurgaonStatus: false,
       LucknowStatus: false,
       IndoreStatus:  false,
       RanchiStatus: false,
       SouthDelhiStatus: false,
       DLFCybercityStatus: false,

       address: false,



       GurgaonVisitingDoctor: "800+",
       GurgaonEmergencyDoctor: "50+",
       GurgaonNumberOfAmbulance: '30+',
       GurgaonHelplineNumber: '0124 414 1414',
       GurgaonEmergencyStatus: "Available",
       GurgaonAmbulanceStatus: "Available",

       LucknowVisitingDoctor: "200+",
       LucknowEmergencyDoctor: "30+",
       LucknowNumberOfAmbulance: '20+',
       LucknowHelplineNumber: '0124 414 1417',
       LucknowEmergencyStatus: "Available",
       LucknowAmbulanceStatus: "Available",

       RanchiVisitingDoctor: "300+",
       RanchiEmergencyDoctor: "20+",
       RanchiNumberOfAmbulance: '20+',
       RanchiHelplineNumber: '0124 414 1403',
       RanchiEmergencyStatus: "Available",
       RanchiAmbulanceStatus: "Available",

       DLFCyberCityVisitingDoctor: "200+",
       DLFCyberCityEmergencyDoctor: "20+",
       DLFCyberCityNumberOfAmbulance: '20+',
       DLFCyberCityHelplineNumber: '0124 414 1422',
       DLFCyberCityEmergencyStatus: "Available",
       DLFCyberCityAmbulanceStatus: "Available",

       IndoreVisitingDoctor: "250+",
       IndoreEmergencyDoctor: "20+",
       IndoreNumberOfAmbulance: '20+',
       IndoreHelplineNumber: '0124 414 1424',
       IndoreEmergencyStatus: "Available",
       IndoreAmbulanceStatus: "Available",

       SouthDelhiVisitingDoctor: "100+",
       SouthDelhiEmergencyDoctor: "15+",
       SouthDelhiNumberOfAmbulance: '20+',
       SouthDelhiHelplineNumber: '0124 414 1504',
       SouthDelhiEmergencyStatus: "Available",
       SouthDelhiAmbulanceStatus: "Available",
    }
  render(){

    return <div className='dash'>
     <Header />
     <div className='container'>
      <h1 className='text-center'>Dashboard</h1>
      <hr />
      <div className='container '>
        <div className='row col justify-content-center '>
          <div className='col-md-6 '>

          {this.state.GurgaonStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.GurgaonVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.GurgaonEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.GurgaonEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.GurgaonAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.GurgaonNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.GurgaonHelplineNumber}
          </div>
          </div>
          </div>
          }


          {this.state.LucknowStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.LucknowVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.LucknowEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.LucknowEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.LucknowAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.LucknowNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.LucknowHelplineNumber}
          </div>
          </div>
          </div>
          }


          {this.state.RanchiStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.RanchiVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.RanchiEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.RanchiEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.RanchiAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.RanchiNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.RanchiHelplineNumber}
          </div>
          </div>
          </div>
          }


          {this.state.DLFCybercityStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.DLFCyberCityVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.DLFCyberCityEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.DLFCyberCityEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.DLFCyberCityAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.DLFCyberCityNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.DLFCyberCityHelplineNumber}
          </div>
          </div>
          </div>
          }

          {this.state.SouthDelhiStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.SouthDelhiVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.SouthDelhiEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.SouthDelhiEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.SouthDelhiAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.SouthDelhiNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.SouthDelhiHelplineNumber}
          </div>
          </div>
          </div>
          }



          {this.state.IndoreStatus &&
          <div className='container'>
          <div className='row col'>
          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Visiting Doctors</h6>
          {this.state.IndoreVisitingDoctor}

          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Doctors</h6>
          {this.state.IndoreEmergencyDoctor}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Emergency Status</h6>
          {this.state.IndoreEmergencyStatus}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Ambulance Status</h6>
          {this.state.IndoreAmbulanceStatus}
          </div>

          <div className='box col-md-4 text-center'>
          <h6 className='text-center size'>Ambulances</h6>
          {this.state.IndoreNumberOfAmbulance}
          </div>

          <div className='helpbox col-md-4 text-center'>
          <h6 className='text-center size'>Helpline Number</h6>
          {this.state.IndoreHelplineNumber}
          </div>
          </div>
          </div>
          }



        </div>

          <div className='col-md-5'>
          <h2 className='text-center'>Hospital Details</h2>
            <form>
               <TextField id="outlined-basic" label="Hospital Name" variant="outlined" style={{ width: "100%"}} value="Medanta -The Medicity"/>
            </form>
            <div className='container location'>
             <h4 className='text-center'>Location</h4>
              <div className='row col justify-content-center'>
                <Button className='location-button' onClick={() => this.setState({ GurgaonStatus: true, IndoreStatus: false, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: false, DLFCybercityStatus:false, address: true })}>Gurgaon</Button>
                <Button className='location-button' onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus:true, SouthDelhiStatus: false, DLFCybercityStatus:false, address: true })}>Lucknow</Button>
                <Button className='location-button  ' onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: true, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: false, DLFCybercityStatus:false, address: true })}>Indore</Button>
                <Button className='location-button' onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: false, RanchiStatus: true, LucknowStatus:false, SouthDelhiStatus: false, DLFCybercityStatus:false, address: true })}>Ranchi</Button>
                <Button className='location-button' onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: false, DLFCybercityStatus:true, address: true })}>DLF Cybercity</Button>
                <Button className='location-button' onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: true, DLFCybercityStatus:false, address: true})}>South Delhi</Button>

              </div>
            </div>
            <div className='container locs'>
               {this.state.address && <h4 className='text-center'>Address</h4>}
               {this.state.GurgaonStatus && <div>{this.state.addressGurgaon}</div>}

               <div>
                {this.state.LucknowStatus && <div>{this.state.addressLucknow}</div>}
                </div>

                <div>
                 {this.state.IndoreStatus && <div>{this.state.addressIndore}</div>}
                </div>

                <div>
                  {this.state.RanchiStatus && <div>{this.state.addressRanchi}</div>}
                </div>

                <div>
              {this.state.DLFCybercityStatus && <div>{this.state.addressDLFCybercity}</div>}
                </div>

              <div>
              {this.state.SouthDelhiStatus && <div>{this.state.addressSouthDelhi}</div>}
              </div>



            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  }
}
export default Dashboard;
