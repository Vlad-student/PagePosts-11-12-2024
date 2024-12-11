import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;
