import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./pages/Home"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <div>
        <nav class="navbar navbar-dark bg-success">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/PersonalTaxes">Personal Taxes</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/SmallBusiness">Small Business</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/LLC">LLC</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav