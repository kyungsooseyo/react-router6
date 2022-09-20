import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FilmItem from './FilmItem';
import FilmItemClass from './FilmItemClass'
export default function NowPlaying() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4865587',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1657867789973531647049729"}',
        'X-Host': ' mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log('now playing', res.data.data.films);
      setList(res.data.data.films)
    })
  }, [])

  return (
    <div>NowPlaying
      <ul>
        {
          list.map(item => {
            // return <FilmItem key={item.filmId} {...item}></FilmItem>
            // ! 类组件没有办法用v6中路由钩子
            return <FilmItemClass key={item.filmId} {...item}></FilmItemClass>
          })
        }
      </ul>
      <Outlet></Outlet>
    </div>
  )
}
