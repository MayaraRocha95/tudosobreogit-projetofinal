import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../pages/Menu/Menu'
import Guia from '../pages/Guia/Guia'
import Questoes from '../pages/Questoes/Questoes'
import Comandos from '../pages/Comandos/Comandos'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './applicationroutes.css'

function ApplicationRoutes(){
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Menu />}/>
      <Route path="guia" element={<Guia />}/>
      <Route path="questoes" element={<Questoes />}/>
      <Route path="comandos" element={<Comandos />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default ApplicationRoutes