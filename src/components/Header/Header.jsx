import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>บริการอาหารและเครื่องดื่ม พร้อมเสิร์ฟถึงที่นั่ง</h2>
        <p>
        เมนูอาหารและเครื่องดื่มหลากหลาย
        เสิร์ฟสดใหม่ถึงที่นั่งของท่าน
        เพื่อช่วงเวลาการตกปลาที่อร่อยและผ่อนคลาย
        </p>        
        <button>ดูเมนูอาหาร</button>
      </div>
    </div>
  )
}

export default Header
