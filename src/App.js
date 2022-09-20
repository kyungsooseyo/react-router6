import { useState } from 'react'
import { HashRouter, BrowserRouter, } from 'react-router-dom';
import MRouter from './router/index';
import TabBar from './components/TabBar.jsx'
// ~BrowserRouter 会在生产环境下刷新的时候向后端按照当前路径发送请求，后端返回对应的页面，这时候需要后端配置路由，所以一般情况下就用hash吧
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <MRouter></MRouter>
        <TabBar></TabBar>
      </BrowserRouter>
    </div>
  )
}

export default App
