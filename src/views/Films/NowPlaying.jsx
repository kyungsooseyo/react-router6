import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NowPlaying() {
  return (
    <div>NowPlaying
      <Outlet></Outlet>
    </div>
  )
}
