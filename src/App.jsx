
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Amir from './assets/components/Amir/Amir'
import Footer from './components/Footer'
import Header from './components/Header'
import Brand from './pages/Brand'
import Umar from './pages/Umar/Umar'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/brand' element={<Brand />} />
        <Route path='/umar' element={<Umar />} />
        <Route path='/amir' element={<Amir />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
