import React, { Component } from 'react';
import './management.css';
import Header from '../Header/header'
import TextField from '@material-ui/core/TextField';
import {Button} from 'antd';



class Management extends Component {

   state = {
     GurgaonStatus: false,
     LucknowStatus: false,
     IndoreStatus:  false,
     RanchiStatus: false,
     SouthDelhiStatus: false,
     DLFCybercityStatus: false,


     addressGurgaon: 'CH Baktawar Singh Road, Sector 38, Gurugram, Haryana 122001',
     addressLucknow: 'Sector - A, Pocket - 1, Sushant Golf City, Amar Shaheed Path, Lucknow, Uttar Pradesh 226030',
     addressIndore: 'Medanta Super Speciality Hospital, Plot No. 8, PU04, Commercial Scheme 54, Rasoma Square, Vijaynagar, AB Road, Indore - 452010',
     addressRanchi: 'P.O: Irba, P.S: Ormanjhi,, National Highway 33, Ranchi, Jharkhand 835217',
     addressSouthDelhi: 'E – 18, Defence Colony, New Delhi, Delhi 110024',
     addressDLFCybercity: 'Building No. 10C, Upper Ground Floor, DLF Cyber City, Phase II, Gurugram, Haryana 122002',




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

console.log(this.state.GurgaonStatus)
console.log(this.state.LucknowStatus)
console.log(this.state.IndoreStatus)
console.log(this.state.SouthDelhiStatus)
console.log(this.state.DLFCybercityStatus)
console.log(this.state.RanchiStatus)

    return <>
   <Header />
  <div className='container'>
    <h1 className='text-center'>Hospital Details</h1>
    <hr />
    <div className='container'>

<div className='row col'>
    <div className='col-md-6'>
  <div className='row col justify-content-center text-center'>
  <div className='col-md-6'>
  <Button className='button'  size='large' onClick={() => this.setState({  GurgaonStatus: true, IndoreStatus: false, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: false, DLFCybercityStatus:false })}>Gurgaon</Button>
  </div>

  <div className='col-md-6'>
  <Button className='button'  size='large'  onClick={() => this.setState({GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus:true, SouthDelhiStatus: false, DLFCybercityStatus:false})}>Lucknow</Button>

  </div>

  <div className='col-md-6'>
  <Button className='button'  size='large'  onClick={() => this.setState({GurgaonStatus: false, IndoreStatus: true, RanchiStatus: false, LucknowStatus: false, SouthDelhiStatus: false, DLFCybercityStatus:false})}>Indore</Button>
  </div>

  <div className='col-md-6'>
  <Button className='button'  size='large'  onClick={() => this.setState({GurgaonStatus: false, IndoreStatus: false, RanchiStatus: true, LucknowStatus: false, SouthDelhiStatus: false, DLFCybercityStatus:false})}>Ranchi</Button>

  </div>

  <div className='col-md-6'>
  <Button className='button'  size='large'  onClick={() => this.setState({ GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus: false, SouthDelhiStatus: false, DLFCybercityStatus: true})}>DLF Cybercity</Button>
  </div>

  <div className='col-md-6'>
  <Button className='button'  size='large'  onClick={() => this.setState({GurgaonStatus: false, IndoreStatus: false, RanchiStatus: false, LucknowStatus:false, SouthDelhiStatus: true, DLFCybercityStatus:false})}>South Delhi</Button>

  </div>
  </div>


    </div>

    <div className='col-md-5'>
    {this.state.GurgaonStatus &&
      <>
      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}} value={this.state.addressGurgaon}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}} value={this.state.GurgaonVisitingDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.GurgaonEmergencyDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}} value={this.state.GurgaonAmbulanceStatus}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.GurgaonNumberOfAmbulance}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}   value={this.state.GurgaonHelplineNumber}/>
      </div>
      </>
    }

{this.state.LucknowStatus &&
  <>
    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}} value={this.state.addressLucknow}/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}} value={this.state.LucknowVisitingDoctor}/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.LucknowEmergencyDoctor}/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}} value={this.state.LucknowAmbulanceStatus}/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.LucknowNumberOfAmbulance}/>
    </div>

    <div className='hospital-details'>
     <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}   value={this.state.LucknowHelplineNumber}/>
    </div>
    </>
}

{
  this.state.IndoreStatus &&
  <>
  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}} value={this.state.addressIndore}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}} value={this.state.IndoreVisitingDoctor}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.IndoreEmergencyDoctor}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}}  value={this.state.IndoreAmbulanceStatus}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.IndoreNumberOfAmbulance}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}   value={this.state.IndoreHelplineNumber}/>
  </div>
</>
}





{
  this.state.RanchiStatus &&
  <>
      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}}  value={this.state.addressRanchi}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}} value={this.state.RanchiVisitingDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.RanchiEmergencyDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}}  value={this.state.RanchiAmbulanceStatus}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.RanchiNumberOfAmbulance}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}  value={this.state.RanchiHelplineNumber}/>
      </div>
</>

}


{
  this.state.DLFCybercityStatus &&
  <>
      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}}   value={this.state.addressDLFCybercity}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.DLFCybercityVisitingDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.DLFCybercityEmergencyDoctor}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}}  value={this.state.DLFCyberCityAmbulanceStatus}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.DLFCyberCityNumberOfAmbulance}/>
      </div>

      <div className='hospital-details'>
       <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}  value={this.state.DLFCyberCityHelplineNumber}/>
      </div>

  </>
}







{
  this.state.SouthDelhiStatus &&
  <>
  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Hospital name" variant="outlined" style={{ width: "100%"}} value='Medanta -The Medicity'/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Hospital Address" variant="outlined" style={{ width: "100%"}}   value={this.state.addressSouthDelhi}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of visiting doctors" variant="outlined" style={{ width: "100%"}} value={this.state.SouthDelhiVisitingDoctor}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of emergency doctors" variant="outlined" style={{ width: "100%"}}  value={this.state.SouthDelhiEmergencyDoctor}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Ambulance Status" variant="outlined" style={{ width: "100%"}}  value={this.state.SouthDelhiAmbulanceStatus}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Number of Ambulance Available" variant="outlined" style={{ width: "100%"}}  value={this.state.SouthDelhiNumberOfAmbulance}/>
  </div>

  <div className='hospital-details'>
   <TextField id="outlined-basic" label="Helpline number" variant="outlined" style={{ width: "100%"}}  value={this.state.SouthDelhiHelplineNumber}/>
  </div>



  </>
}








    </div>
</div>

    </div>
  </div>
    </>
  }
}
export default Management;
