import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Admin from'./Views/Admin/Admin'
import './App.css'


function App() {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname 
        === '/'  && <Nav></Nav>
      }
      <Routes>
      <Route path='/' element={<Admin/>} />
      </Routes>
    </div>
    
  )
}

export default App
