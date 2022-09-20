import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const setToken = () => {
    window.localStorage.setItem('test_token', '123456')
    navigate('/center')
  }
  return (
    <div>
      <input type="text" />
      <button onClick={setToken}>登录</button>
    </div>
  )
}
