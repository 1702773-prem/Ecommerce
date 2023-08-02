import React, { useState } from 'react'
import { myDatabase } from '../Firebase.js';

function AddProduct() {

  const [data, setData] = useState({
    productSno: "",
    productName: "",
    productURL: "",
    productDiscription: "",
    productOriginalPrice: "",
    productDiscountedPrice: ""

  })

  function collectIt(e) {
    //const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [e.target.name]: value })

  }

  function saveData() {

    myDatabase.collection("Products").add({

      sno: data.productSno,
      title: data.productName,
      url: data.productURL,
      description: data.productDiscription,
      originalPrice: data.productOriginalPrice,
      discountedPrice: data.productDiscountedPrice


    })

    setData({
      productSno: "",
      productName: "",
      productURL: "",
      productDiscription: "",
      productOriginalPrice: "",
      productDiscountedPrice: ""
    })



  }

  console.log(data)


  return (
    <div className='row' >

      <div >
        <label htmlFor="">Product S.no :</label>
        <input type="text" name='productSno' className='form-control' onChange={collectIt} value={data.productSno} /><br />
      </div>

      <div >
        <label htmlFor="">Product Name :</label>
        <input type="text" name='productName' className='form-control' onChange={collectIt} value={data.productName} /><br />
      </div>

      <div >
        <label htmlFor=""> Product URL :</label>
        <input type="text" name='productURL' className='form-control' onChange={collectIt} value={data.productURL} /><br />
      </div>

      <div >
        <label htmlFor="">Product description :</label>
        <textarea name="productDiscription" id="" cols="40" rows="4" className='form-control' onChange={collectIt} value={data.productDiscription}></textarea><br />
      </div>


      <div >
        <label htmlFor="">Original Price :</label>
        <input type="text" name='productOriginalPrice' className='form-control' onChange={collectIt} value={data.productOriginalPrice} /><br />
      </div>

      <div >
        <label htmlFor="">Discounted Price :</label>
        <input type="text" name='productDiscountedPrice' className='form-control' onChange={collectIt} value={data.productDiscountedPrice} /><br />
      </div>

      <button onClick={saveData}>ADD PRODUCT</button>
    </div>



  )
}

export default AddProduct