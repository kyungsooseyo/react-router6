import React from 'react'
//~ 这个组件的参数必须大写，react才能识别成组件
import { useNavigate,useParams,useLocation } from 'react-router-dom'
export default function WithRouter(Component) {
  return (props) => {
    //???????????????? 用不了 可能是因为react18版本的原因，下次换17看看
    // const push = useNavigate()
    // const match=useParams()
    // const location=useLocation()
    // return <Component a="1" {...props} history={{ push,match,location }} />
    return <Component a="1" {...props} history={{  }} />
  }

}
