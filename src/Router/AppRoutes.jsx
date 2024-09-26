import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Catalog from '../Pages/Catalog'
import Payment from '../Pages/PaymentDetails/Payment'
import ItemDetails from '../Pages/ItemDetails'
import AddToCart from '../Pages/AddToCart'
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login'
// import CartSummary from '../Pages/CartSummary'
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='/Payment' element={<Payment />} />
        {/* <Route path='/cartSummary' element={<CartSummary />} /> */}
        <Route path="/item-details/:id" element={<ItemDetails />} />  
        <Route path='/add-to-cart' element={<AddToCart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/home' element={<Login />} />

      </Routes>
    </div>
  )
}

export default AppRoutes
