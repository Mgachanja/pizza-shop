import React from 'react'
import '../styles/Menu.css'
import { MenuList } from '../helpers/MenuList'
import Menuitem from '../components/Menuitem'
function menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>our menu</h1>
      <div className='menuList'>
      {MenuList.map((menuItem,key)=>{
        return<Menuitem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
      })}

      </div>
    </div>
  )
}

export default menu
