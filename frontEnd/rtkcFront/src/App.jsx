
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import AboutPizza from './components/Pizza/AboutPizza'
import AboutNoodles from './components/Noodles/AboutNoodles'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/aboutPizza" element={<AboutPizza/>}/>
        <Route path="/aboutNoodles" element={<AboutNoodles/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
