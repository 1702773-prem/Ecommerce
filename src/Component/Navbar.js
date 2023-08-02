import React, { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import Login from './Login'
import Card from './Card'
import Cart from './Cart'

import { myContext } from '../App.js'


function Navbar() {

    const context = useContext(myContext)

    const [login, setLogin] = useState(false)
    const [cart, setCart] = useState([])

    function pleaseLogout() {

        context.setIsLoggedIn(false)
        window.location.pathname = "/"

    }

    function displayCart() {

        const cartData = JSON.parse(localStorage.getItem("cart"))

        let j = -1
        const arrData = []
        for (let i in cartData) {

            arrData[++j] = [i, cartData[i][0], cartData[i][1], cartData[i][2]]
            //  console.log(arrData)

        }
        setCart(arrData)
        // console.log(cart)

    }



    return (
        <BrowserRouter>
            <div className='main'>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Ecommerce App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    {
                                        // <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    }

                                    {context.isLoggedIn && <Link className="nav-link active" to="/home" >Home</Link>}

                                </li>
                                <li className="nav-item">
                                    {
                                        // <a className="nav-link" href="#">Add Products</a>
                                    }

                                    {context.isLoggedIn && <Link className="nav-link active" to="/add" >Add Products</Link>}

                                </li>

                                {context.isLoggedIn && <Link className="nav-link active" to="/home/cart" > <button type="button" class="btn btn-secondary " onClick={displayCart} >
                                    Cart
                                </button>
                                </Link>
                                }

                            </ul>

                            {context.isLoggedIn &&
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>}

                            <li className="nav-item">

                                {
                                    //  <a className="nav-link" href="#">Login</a>
                                }

                                {!context.isLoggedIn ? <button type="button" class="btn btn-outline-danger btn-sm mx-2 my-0 " onClick={e => setLogin(true)} >SIGN IN</button> : <button type="button" class="btn btn-outline-danger btn-sm mx-4 " onClick={pleaseLogout} >SIGN OUT</button>}

                            </li>

                        </div>
                    </div>
                </nav>

            </div>

            <Routes>

                {context.isLoggedIn && <Route path='/home' element={<Card />} ></Route>}
                {context.isLoggedIn && <Route path='/add' element={<AddProduct />} ></Route>}
                {context.isLoggedIn && <Route path='/home/cart' element={<Cart data={cart} />} ></Route>}

            </Routes>
            {login && <Login data={setLogin} />}
        </BrowserRouter>

    )
}

export default Navbar