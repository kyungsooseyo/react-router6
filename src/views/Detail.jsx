import React from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'
export default function Detail() {
  //- 有点类似于useState
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get('id'))
  // ~ 解构出id 因为在外面路由写的占位符就是叫id
  const { id } = useParams()
  //= 通过动态路由传参的方式是没有第二个钩子使用的，必须用useNavigate来进行跳转
  const navigate = useNavigate()
  console.log(id);
  return (
    <div>Detail
      {/* //. 利用这个钩子可以从一个详情页面跳到另一个详情页面 */}
      {/* <button onClick={() => setSearchParams({ id: 1000 })}>猜你喜欢</button> */}
      <button onClick={() => navigate('/detail/1000')}>猜你喜欢</button>
    </div>
  )
}
