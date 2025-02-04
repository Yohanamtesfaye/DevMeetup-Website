import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import V1 from "./pages/V1"
import V2 from "./pages/V2"
import V3 from "./pages/V3"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/v1" element={<V1 />} />
            <Route path="/v2" element={<V2 />} />
            <Route path="/v3" element={<V3 />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App

