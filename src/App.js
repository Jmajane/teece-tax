import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import PersonalTaxes from "./pages/PersonalTaxes"
import SmallBusiness from "./pages/SmallBusiness"
import LLC from "./pages/LLCTaxes"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='PersonalTaxes' element={<PersonalTaxes />} />
            <Route path='SmallBusiness' element={<SmallBusiness />} />
            <Route path='LLC' element={<LLC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))