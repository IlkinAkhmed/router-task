import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './Components/LanguagesSection'
import Home from './Components/HomeSection'
import MainLayout from './Layouts/MainLayout'
import Gallery from "./Components/GallerySection"
import ShortCodes from "./Components/ShortCodes"
import Languages from "./Components/LanguagesSection"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shortcodes" element={<ShortCodes />} />
            <Route path="/languages" element={<Languages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
