import "./header.css"
import teecetax from "../../assets/teecetax.png"

const Header = () => {
  return (
    <section id='header'>       
        <div className='header'>
            <img className='header__image' src={teecetax} alt="company logo" />
        </div>
    </section>
  )
}

export default Header