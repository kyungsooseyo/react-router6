import React from 'react'
import { NavLink, Link } from 'react-router-dom';
// import './tabbar.scss';
export default function TabBar() {
  return (
    <footer className='footer'>
      <ul>
        <li><Link to={'/film'}>电影</Link>L</li>
        <li><Link to={'/cinema'}>影院</Link></li>
        <li><Link to={'/center'}>我的</Link></li>
        {/* <li><Link to={'/film'}>电影</Link></li> */}
      </ul>
    </footer>
  )
}
