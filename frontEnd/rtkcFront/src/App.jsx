
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage/>}>
          
          </Route>
        <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
