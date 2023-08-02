import React, { useEffect, useState } from 'react'
import { myDatabase } from '../Firebase.js'

function Card() {

    const [data, setData] = useState([])

    console.log(data)

    useEffect(function () {

        myDatabase.collection("Products").onSnapshot(function (snapshot) {

            setData(snapshot.docs.map(function (snap) {

                return snap.data()

            }))

        })

    }, [])

    function collectCart(e) {

        if (localStorage.getItem("cart") === null) {

            var cart = {}
        }

        else {
            cart = JSON.parse(localStorage.getItem("cart"))
        }

        let myId = e.target.id;


        if (cart[myId] == undefined) {

            var name = document.getElementById("myname" + myId).innerText
            var price = document.getElementById("price" + myId).innerText
            var quantity = 1
            cart[myId] = [quantity, name, price]
        }

        else {

            var price = document.getElementById("price" + myId).innerText
            quantity = cart[myId][0] + 1
            cart[myId][0] = quantity;
            cart[myId][2] = Number(price) * quantity


        }

        localStorage.setItem("cart", JSON.stringify(cart))


    }


    return (
        <div className='product'>

            {

                data.map(function (i) {
                    return <div key={i.sno} className="card" style={{ "width": "18rem" }}>
                        <img src={i.url} className="card-img-top" alt="..." style={{ "height": 250 }} />
                        <div className="card-body">
                            <h5 className="card-title" id={"myname" + i.sno} >{i.title}</h5>
                            <p className="card-text">{i.description}</p>
                            <del><h5 className="card-text">{i.originalPrice}</h5></del>
                            <h5 className="card-text" id={"price" + i.sno}>{i.discountedPrice}</h5>
                            <a href="#" className="btn btn-primary" id={i.sno} onClick={collectCart}>Add To Cart</a>
                        </div>
                    </div>
                })

            }

        </div>
    )
}

export default Card