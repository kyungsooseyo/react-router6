import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function FilmItem(props) {
  // console.log(props);
  const navigate = useNavigate()
  const handleChangePage = (page) => {
    //· query传参
    // navigate(`/detail?id=${page.filmId}`)
    // · 路由传参
    navigate(`/detail/${page.filmId}`)
  }
  return (
    <li onClick={() => handleChangePage(props)}>{props.name}</li>
  )
}
