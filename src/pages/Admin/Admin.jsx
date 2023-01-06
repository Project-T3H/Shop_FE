import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListBranch from './Branch/ListBranch';
import CreateUpdateCategory from './Category/CreateCategory';
import ListCategory from './Category/ListCategory';
import Home from './Home/Home';
import ListOrder from './Orders/ListOrder';
import CreateUpdateProducer from './Producer/CreateUpdateProducer';
import ListProducer from './Producer/ListProducer';
import CreateUpdateProduct from './Product/CreateUpdateProduct';
import ListProduct from './Product/ListProduct';
import ListCustomer from './Users/ListCustomer';
import ListUserManages from './Users/ListUserManages';

class Admin extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/admin/home' element={<Home />} />
          <Route path='/admin' element={<Home />} />
          <Route path='/admin/manages-category' element={<ListCategory />} />
          <Route path='/admin/create-update-category' element={<CreateUpdateCategory />} />
          <Route path='/admin/update-category/:id' element={<CreateUpdateCategory />} />
          <Route path='/admin/manages-producer' element={<ListProducer />} />
          <Route path='/admin/create-update-producer' element={<CreateUpdateProducer />} />
          <Route path='/admin/list-order' element={<ListOrder />} />
          <Route path='/admin/list-customers' element={<ListCustomer />} />
          <Route path='/admin/list-user-manages' element={<ListUserManages />} />
          <Route path='/admin/manages-product' element={<ListProduct />} />
          <Route path='/admin/create-update-product' element={<CreateUpdateProduct />} />
          <Route path='/admin/manages-branch' element={<ListBranch />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Admin;
