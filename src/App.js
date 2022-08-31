import { useState } from 'react'
import { HashRouter, BrowserRouter, } from 'react-router-dom';
import MRouter from './router/index';
import TabBar from './components/TabBar.jsx'
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
