import { Link, NavLink } from 'react-router-dom'
import s from './header.module.scss'
import Logo from '../../assets/logo.png'
import Button from '../button/button.jsx'


const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.BoxLogo}>
            <img src={Logo} alt= "Imagem do logo do site Médicos Voluntários" />
            <Link to='/'>Médicos & Dentistas</Link>
        </div>
            <nav className={s.nav}>
              <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <Button text= 'Seja Voluntário' to='/voluntario'/>                  
                </li>
              </ul>           
            </nav>
    </header>   
  )
}

export default Header
