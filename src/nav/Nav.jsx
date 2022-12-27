import {AiOutlineHome} from "react-icons/ai"
import {BsPersonCheck} from "react-icons/bs"
import {IoIosBusiness} from "react-icons/io"
import {RiContactsBook2Line} from "react-icons/ri"
import {HiOutlineDesktopComputer} from "react-icons/hi"
import 'bootstrap/dist/css/bootstrap.css';
import "./nav.css"

const Nav = () => {

  return (
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Teece Tax Solution</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home <AiOutlineHome className="Nav__List-Icon"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PersonalTaxes">Personal Taxes <BsPersonCheck className="Nav__List-Icon"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/SmallBusiness">Small Business / LLC<IoIosBusiness className="Nav__List-Icon"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact <RiContactsBook2Line className="Nav__List-Icon"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.mytaxdocs.com/?o=19413" target='_blank' rel="noreferrer">Client Portal <HiOutlineDesktopComputer className="Nav__List-Icon"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav