import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'
const Menu = () => {
    return (
        <nav>
            <ul className={styles.menu}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li> <NavLink to ='/Users'>Users Page</NavLink> </li>
                <li> <NavLink to ='/Single'>Single post</NavLink> </li>
                <li> <NavLink to ='/Pages'>Pages</NavLink> </li>
                <li> <NavLink to ='/Contact'>Contact</NavLink> </li>
                
            </ul>
        </nav>
    );
}

export default Menu;
