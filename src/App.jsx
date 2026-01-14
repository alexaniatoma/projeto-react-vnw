import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'
import Footer from './components/footer/Footer'

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Header />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/voluntario' element={<Voluntario />} />

          </Routes>
        </div>

        <Footer />

      </BrowserRouter>    
    </> 
  )
}

export default App;
