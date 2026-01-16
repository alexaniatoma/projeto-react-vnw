import { Link } from 'react-router-dom'
import s from './button.module.scss'


const Button = ({text, to, onClick, type='button'}) => { 
    if(to) {
        return (
            <Link to={to} className={s.btnVerde}>{text}</Link>
        )
    }
    return (
        <button type={type} onClick={onClick} className={s.btnVerde}>{text}</button>
    )
}

export default Button
