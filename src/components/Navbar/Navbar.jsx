import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className="navbar">

      <Link to='/'><img
        src={assets.logo}
        alt="Logo"
        className="logo"
        style={{ height: '50px', width: 'auto' }}
      /></Link>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

      </div>

    </div>
  )
}

export default Navbar