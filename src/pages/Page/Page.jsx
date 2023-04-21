import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Account/Account_Setting';
import ForgotPassword from './Account/Forgot_Password';
import Login from './Account/Login';
import Register from './Account/Register';
import Cart from './Cart/Cart';
import Favourite from './Cart/Favourite_List';
import Home from './Home/Home';
import Detail from './Product/Product_Detail';
import Shop from './Product/Shop';
import './Page.css'
import Checkout from './Cart/Checkout';
import OrderComplete from './Cart/OrderComplete';
import Contact from './Contact/Contact';
import News from './News/News';

class Page extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/account-setting" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/favourite-list" element={<Favourite />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-complete" element={<OrderComplete />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Page;