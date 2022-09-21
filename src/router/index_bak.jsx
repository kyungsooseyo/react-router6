import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
// import Film from '../views/Film';
// import Center from '../views/Center';
// import Cinema from '../views/Cinema';
// import Blank from '../views/Blank';
import Redirect from '../components/Redirect'
// import NotFond from '../views/NotFond';
// import Search from '../views/Search';
// import NowPlaying from '../views/Films/NowPlaying';
// import ComingSoon from '../views/Films/ComingSoon';
// import NowPlayChild from '../views/Films/NowPlayChild'
// import Detail from '../views/Detail';
// import Login from '../views/Login'
export default function MRouter() {
  return (
    <div>
      {/* //! 值得注意的时在v5里面的component 直接写上组件就行，在v6里面 必须给他加上尖括号包起来 */}
      <Routes>
        {/* //~ index用于嵌套路由，当匹配父路由的时候就渲染该组件，在下面的路由中，父级路由是 / ，即当路由为/ 时渲染film */}
        {/* <Route index element={<Film />} /> */}
        <Route path='/film' element={lazyLoad('Film')}>
          {/* <Route path='/film/nowPlaying' element={<NowPlaying></NowPlaying>}></Route>
          <Route path='/film/comingSoon' element={<ComingSoon></ComingSoon>}></Route> */}
          {/* //` 通过index 这种方式，即只需要输入父级路径 也会把子组件nowPlaying展示出来，否则是不会展示的，必须要把子路径输入全才能展示 */}
          {/* <Route index element={<NowPlaying></NowPlaying>}></Route> */}
          <Route index element={<Redirect to='/film/nowPlaying'></Redirect>}></Route>
          {/* //- 这种嵌套路由也可以不带上父级的路由，在子级中前面不用加 / */}
          <Route path='nowPlaying' element={lazyLoad('Films/NowPlaying')}>
            {/* //. 如果是三级路由的话 还是要写全路径的 */}
            <Route path='/film/nowPlaying/child' element={lazyLoad('NowPlayChild')}></Route>
          </Route>
          <Route path='comingSoon' element={lazyLoad('Films/ComingSoon')}></Route>
        </Route>
        {/* //+ 在v5的版本中，权限判断是通过一个render函数来进行的，路由更改的时候，render会重新执行，所以授权能够完成，但是这种三目运算只会执行一次 */}
        {/* <Route path='/center' element={isAuth() ? <Center></Center> : <Redirect to='/login'></Redirect>}></Route> */}
        <Route path='/center' element={<AuthComponent>{lazyLoad('Center')}</AuthComponent>}></Route>
        <Route path='/cinema' element={lazyLoad('Cinema')}></Route>
        <Route path='/cinema/search' element={lazyLoad('Search')}></Route>
        <Route path='/blank' element={lazyLoad('Blank')}></Route>
        <Route path='/login' element={lazyLoad('Login')}></Route>

        {/* 动态路由 */}
        <Route path='/detail/:id' element={lazyLoad('Detail')}></Route>
        {/* //= 第一种方式 有点类似重定向 */}
        {/* <Route path='*' element={<Navigate to='/film' replace={true}></Navigate>}></Route> */}
        {/* //= 第二种方式 使用useNavigate 自己封装 */}
        <Route path='/' element={<Redirect to='/film'></Redirect>}></Route>
        <Route path='*' element={lazyLoad('NotFond')}></Route>
      </Routes>
    </div>
  )
}
const isAuth = () => {
  return window.localStorage.getItem('test_token')
}
function AuthComponent(props) {
  // ~ 核心原理就是运用了函数会再次执行的特性
  const isLogin = window.localStorage.getItem('test_token')
  return isLogin ? props.children : <Redirect to='/login'></Redirect>
}
//~ 路由懒加载  这种懒加载的方式，第一次不会把该路由下的文件打包进去，只有访问路由的时候会下载该文件（大约为2kb），大大减少了首屏加载的时间
const lazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`))
  return (
    <React.Suspense fallback={'加载中......'}>
      <Comp></Comp>
    </React.Suspense>
  )
}