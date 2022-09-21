import React from 'react'
import { useRoutes } from 'react-router-dom';
import Redirect from '../components/Redirect'
export default function MRouter() {
  const routes = useRoutes([
    {
      path: '/',
      //= 这块不用重定向的话直接写film 不太行，因为路径上没显示film 但是显示了film内容，重新点击电影的话会闪一下，所以还是重定向到film
      element: <Redirect to="/film"></Redirect>,
    },
    {
      path: '/film',
      element: lazyLoad('Film'),
      children: [
        {
          path: '',
          element: <Redirect to="/film/nowPlaying"></Redirect>,
        },
        {
          path: 'nowPlaying',
          element: lazyLoad('Films/NowPlaying'),
        },
        {
          path: 'comingSoon',
          element: lazyLoad('Films/ComingSoon'),
        },
      ]
    },
    {
      path: '/cinema',
      element: lazyLoad('Cinema'),
    },
    {
      path: '/center',
      element: <AuthComponent>{lazyLoad('Center')}</AuthComponent>,
    },
    {
      path: '/login',
      element: lazyLoad('Login'),
    },
    {
      path: '/detail/:id',
      element: lazyLoad('Detail'),
    },
    {
      path: '*',
      element: lazyLoad('NotFond'),
    },
  ])
  return (
    routes
  )
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