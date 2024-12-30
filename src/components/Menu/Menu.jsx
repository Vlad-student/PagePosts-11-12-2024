import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <nav>
            <ul className={styles.menu}>
                <li> 
                    <NavLink  to='/' 
                className={({ isActive }) => isActive ? styles.active : undefined }> 
                Home </NavLink> </li>
                <li> <NavLink 
                to ='/Users'
                className={({ isActive }) => isActive ? styles.active : undefined }>
                    Users Page</NavLink> </li>
                <li> <NavLink to ='/Single' 
                className={({ isActive }) => isActive ? styles.active : undefined }>Single post</NavLink> </li>
                <li> <NavLink to ='/Pages' 
                className={({ isActive }) => isActive ? styles.active : undefined }>Pages</NavLink> </li>
                <li> <NavLink to ='/Contact' 
                className={({ isActive }) => isActive ? styles.active : undefined }>Contact</NavLink> </li>
                
            </ul>
        </nav>
    );
};

export default Menu;
