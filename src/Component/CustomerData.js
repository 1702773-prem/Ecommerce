import React, { useState } from 'react'

import { myDatabase } from '../Firebase.js'

function CustomerData(props) {

  const [ payButton, setPayButton ] = useState(false)
  const [customerData, setCustomerData] = useState({
    name :"",
    city :"",
    country:"",
    pincode:"",
    amount:props.data
  })

  function collectData(e){

          const value = e.target.value
          setCustomerData({...customerData,[e.target.name]: value})

  }
  console.log(customerData)

  function storeData(){

   myDatabase.collection("customers").add({
    name :customerData.name,
    city :customerData.city,
    country:customerData.country,
    pincode:customerData.pincode,
    amount:props.data
   })

setPayButton(true)

  }
 


  return (
    
    <div className='row'>
      
      <div className='col-md-12'>
  
      <label >Custmer Name</label>
<input type="text" name="name" className = "form-control" id="" onChange={e => collectData(e)} value={customerData.name} required/>

<label >Customer City :</label>
<input type="text" name="city" className = "form-control" id="" onChange={e => collectData(e)} value={customerData.city} required/>

<label >Customer Country :</label>
<input type="text" name="country" className = "form-control" id="" onChange={e => collectData(e)} value={customerData.country} required/>

<label >Customer Pincode :</label>
<input type="text" name="pincode" className = "form-control" id="" onChange={e => collectData(e)} value={customerData.pincode} required/>

<label>Total amount :</label>
<input type="text" name="amount" className = "form-control" id="" onChange={e => collectData(e)} value={props.data} disabled/>
<button class="btn btn-primary mt-3" onClick={storeData}>Save</button>

      </div>
      
     {payButton && <a href="https://buy.stripe.com/test_dR68xjcaW40deSk6oo"><button class="btn btn-success mt-3"  >Make Payment</button></a> }
    </div>
    
  
  )
}

export default CustomerData