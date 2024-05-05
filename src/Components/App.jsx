import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import AiTools from './AiTools'
import PrivacyPolicy from './PrivacyPolicy'
import Terms from './Terms'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    < Router >
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route exact path="/" element={<AiTools />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App


