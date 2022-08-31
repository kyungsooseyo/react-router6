import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Film from '../views/Film';
import Center from '../views/Center';
import Cinema from '../views/Cinema';
import Blank from '../views/Blank';
import Redirect from '../components/Redirect'
import NotFond from '../views/NotFond';
import Search from '../views/Search';
import NowPlaying from '../views/Films/NowPlaying';
import ComingSoon from '../views/Films/ComingSoon';
import NowPlayChild from '../views/Films/NowPlayChild'
export default function MRouter() {
  return (
    <div>
      {/* //! 值得注意的时在v5里面的component 直接写上组件就行，在v6里面 必须给他加上尖括号包起来 */}
      <Routes>
        {/* //~ index用于嵌套路由，当匹配父路由的时候就渲染该组件，在下面的路由中，父级路由是 / ，即当路由为/ 时渲染film */}
        {/* <Route index element={<Film />} /> */}
        <Route path='/film' element={<Film></Film>}>
          {/* <Route path='/film/nowPlaying' element={<NowPlaying></NowPlaying>}></Route>
          <Route path='/film/comingSoon' element={<ComingSoon></ComingSoon>}></Route> */}
          {/* //` 通过index 这种方式，即只需要输入父级路径 也会把子组件nowPlaying展示出来，否则是不会展示的，必须要把子路径输入全才能展示 */}
          {/* <Route index element={<NowPlaying></NowPlaying>}></Route> */}
          <Route index element={<Redirect to='/film/nowPlaying'></Redirect>}></Route>
          {/* //- 这种嵌套路由也可以不带上父级的路由，在子级中前面不用加 / */}
          <Route path='nowPlaying' element={<NowPlaying></NowPlaying>}>
            {/* //. 如果是三级路由的话 还是要写全路径的 */}
            <Route path='/film/nowPlaying/child' element={<NowPlayChild></NowPlayChild>}></Route>
          </Route>
          <Route path='comingSoon' element={<ComingSoon></ComingSoon>}></Route>
        </Route>
        <Route path='/center' element={<Center></Center>}></Route>
        <Route path='/cinema' element={<Cinema></Cinema>}></Route>
        <Route path='/cinema/search' element={<Search></Search>}></Route>
        <Route path='/blank' element={<Blank></Blank>}></Route>
        {/* //= 第一种方式 有点类似重定向 */}
        {/* <Route path='*' element={<Navigate to='/film' replace={true}></Navigate>}></Route> */}
        {/* //= 第二种方式 使用useNavigate 自己封装 */}
        <Route path='/' element={<Redirect to='/film'></Redirect>}></Route>
        <Route path='*' element={<NotFond></NotFond>}></Route>
      </Routes>
    </div>
  )
}
