import React from 'react';
import "./Header.css"
import { IoMenu,IoClose } from "react-icons/io5";


const Hamburger = ({hamburgerOpen}) => {
  return (
    <div className='hamburger'>
      {hamburgerOpen ?<IoClose />: <IoMenu /> }
       

    </div>
  )
}

export default Hamburger;