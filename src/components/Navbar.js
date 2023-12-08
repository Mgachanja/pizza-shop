import React,{useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import{Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'



export default function Navbar() {
    const [openLinks,setOpenLinks]=useState(false) 
    const [button,setButton]=useState(false)

    const toggleNavbar=()=>{
    setOpenLinks(!openLinks)}

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(true)
        }else{
            setButton(false)
        }
    }

    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize',showButton)
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?'open':'close'}>
      <div className='hiddenLinks'>
        <Link to ='/'>Home</Link>
        <Link to ='/menu'>Menu</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
        </div>
        <img src={Logo}/>
      </div>
      <div className='rightSide'>
      {button|| <div className='showLinks'>
        <Link to ='/'>Home</Link>
        <Link to ='/menu'>Menu</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
        </div> }
       { button&&<button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>}
        </div>
    </div>
  )
}
