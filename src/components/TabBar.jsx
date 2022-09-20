import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
// import './tabbar.scss';
import './tabBar.css';
export default function TabBar() {
  return (
    <footer className='footer'>
      <ul>
        {/* .// ~ 与v5中的重新赋值active有些不一样 */}
        <li><NavLink to={'/film'} className={({ isActive }) => isActive ? 'my-active' : ''}>电影</NavLink></li>
        <li><NavLink to={'/cinema'} className={({ isActive }) => isActive ? 'my-active' : ''}>影院</NavLink></li>
        <li><NavLink to={'/center'} className={({ isActive }) => isActive ? 'my-active' : ''}>我的</NavLink></li>
        {/* <li><Link to={'/film'}>电影</Link></li> */}
      </ul>
    </footer>
  )
}
