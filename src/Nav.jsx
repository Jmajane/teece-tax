import { BrowserRouter, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

const Nav = () => {

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