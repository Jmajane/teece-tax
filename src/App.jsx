import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import PersonalTaxes from "./pages/personal/PersonalTaxes"
import SmallBusiness from "./pages/smallBusiness/SmallBusiness"
import LLC from "./pages/LLC/LLCTaxes"
import Contact from './pages/contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='PersonalTaxes' element={<PersonalTaxes />} />
            <Route path='SmallBusiness' element={<SmallBusiness />} />
            <Route path='LLC' element={<LLC />} />
            <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))