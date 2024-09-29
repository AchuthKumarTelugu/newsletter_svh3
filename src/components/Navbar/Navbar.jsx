import React from 'react'
import "./Navbar.css"
import { FaNewspaper } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
  let navList=[
    {name:"Home",link:"/"},
    {name:"Telangana",link:"/"},
    {name:"Andhra pradhesh",link:"/"},
    {name:"Business",link:"/"},
    {name:"Sports",link:"/"},
    {name:"Cinema",link:"/"},
    {name:"Family",link:"/"}          
  ]
  return (
    <div className="navbar">
      <div className="top">
        <div className="news-logo">
          {/* <img src="" alt="" /> */}
          <FaNewspaper className='news-logo-image'/>
          <h1 className="news-heading">News Today</h1>
        </div>
        <div className="search-bar">
          <input type="text" name="" id=""  placeholder='enter topics,events....'/>
          {/* <img src="" alt="" /> */}
          <div className="search-icon-box">
          <FaSearch className="search-icon"/>
          </div>
        </div>
        <div className="user-actions">
          {/* <img src="" alt=""  className='notifications'/> */}
          <div className="notification-container">
          <IoIosNotifications  className='notifications'/>
          </div>
          
          <button>Live tv</button>
          <button>Login</button>
        </div>
      </div>
      <div className="bottom">
        <ul className="media-streams">
          {
            navList.map((value,index)=>(
              <li key={index}>
                <Link to={value.link}>{value.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
