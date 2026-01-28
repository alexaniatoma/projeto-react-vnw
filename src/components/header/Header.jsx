import { Link, NavLink } from 'react-router-dom'
import s from './header.module.scss'
import Logo from '../../assets/logo.png'
import HamburguerIcon from "../../assets/hamburguer.png"
import Button from '../button/Button.jsx'

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.BoxLogo}>
            <img src={Logo} alt= "Imagem do logo do site Médicos Voluntários" />
            <Link to='/'>Médicos & Dentistas</Link>
        </div>
            <nav className={s.nav}>
              <input type="checkbox" id="menuControl" className={s.menuControl}/>
              <ul className= {s.menu}>
                <li className={s.menuItems}>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className={s.menuItems}>
                  <Button text= 'Seja Voluntário' to='/voluntario'/>                  
                </li>
              </ul> 
              <label for="menuControl" className={s.hamburguerIcon}>
                <img src={HamburguerIcon} alt="Ícone do menu hamburguer" />
              </label>          
            </nav>
    </header>   
  )
}

export default Header
