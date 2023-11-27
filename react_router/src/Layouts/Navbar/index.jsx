import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav>
      <p className='headText'>Dazzling Demo</p>
      <div className="nav-texts">
        <NavLink to={'/'} className={'nav-link'} activeclassname='active' >Home</NavLink>
        <NavLink to={'/gallery'} className={'nav-link'} activeclassname='active' >Gallery</NavLink>
        <NavLink to={'/Shortcodes'} className={'nav-link'} activeclassname='active' >Shortcodes</NavLink>
        <div className={'nav-link'} onClick={()=>setIsOpen(!isOpen)} >About<i className={`fa-solid ${isOpen ? 'fa-sort-up' : 'fa-sort-down'}`}></i>
          <div className={`dropdown ${isOpen ? 'd-block' : ''}`}>
            <ul>
              <li><Link to={'/page-markup'} className='dropDownLink'><i className="fa-solid fa-barcode"></i>Page Markup And formatting</Link></li>
              <li><Link to={'/contact'} className='dropDownLink'><i className="fa-regular fa-envelope"></i>Contact Form</Link></li>
              <li><Link to={'/page-image'} className='dropDownLink'><i className="fa-regular fa-image"></i>Page Image Alignment (Full-Width)</Link></li>
              <li><Link to={'/clearing'} className='dropDownLink'><i className="fa-solid fa-leaf"></i>Clearing Floats</Link></li>
              <li><p>Comment options</p></li>
              <hr/>
              <li><Link to={'/comments'} className='dropDownLink'><i className="fa-regular fa-comment"></i>Page With Comments</Link></li>
              <li><Link to={'/disabledComments'} className='dropDownLink'><i className="fa-solid fa-xmark"></i>Page With Comments Disabled</Link></li>
              <li><p>More options</p></li>
              <li><p className='disabled'>This item is disabled</p></li>
            </ul>
          </div>
        </div>
        <NavLink to={'/Languages'} className={'nav-link'} activeclassname='active'>Languages</NavLink>
      </div>
    </nav>
  )
}

export default Navbar