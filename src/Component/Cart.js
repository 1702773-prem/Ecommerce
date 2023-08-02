import React, { useState } from 'react'
import CustomerData from './CustomerData'

function Cart(props) {

    const [form, setForm] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const arr = props.data

    function ContinueToForm() {

        //  window.location.pathname='/home/cart/continue'

        setTotalPrice(TotalOrderPrice)
        setForm(true)
    }

    var TotalOrderPrice = 0

    return (


        <div>
            <div style={{ marginLeft: "10rem" }}>
                {!form &&

                    <div>
                        <table >

                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Total Price</th>

                            </tr>

                            {

                                arr.map(function (i) {

                                    //  console.log(i)

                                    TotalOrderPrice += Number(i[3])

                                    return (
                                        <>

                                            <tr key={i[0]}>
                                                <td>{i[2]}</td>
                                                <td>{i[1]}</td>
                                                <td>{i[3]}</td>
                                            </tr>


                                        </>

                                    )

                                })


                            }
                            <tr>
                                <td></td>
                                <td>Total Order price</td>
                                <td>{TotalOrderPrice}</td>
                            </tr>

                        </table>


                        <button type="button" class="btn btn-primary" onClick={ContinueToForm}>Continue</button>
                    </div>
                }

            </div>
            {form && <CustomerData data={totalPrice} />}
        </div>

    )
}

export default Cart