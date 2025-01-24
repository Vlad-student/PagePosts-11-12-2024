import {useState, useContext} from 'react';
import Menu from "../Menu/Menu";
import Icon from '@mdi/react'
import { mdiLoginVariant, mdiLogoutVariant, mdiLightbulbNightOutline, mdiLightbulbNight  } from '@mdi/js';
import Modal from './../Modal/Modal';
import LoginForm from '../forms/LoginForm';
import { useSelector, useDispatch } from "react-redux";
import { clearError, clearUser } from '../../store/userSlice';
import Spinner from '../Spinner/Spinner';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'
import SearchForm from '../forms/SearchForm/SearchForm';
import {ThemeContext} from '../../context/ThemeContext';
import CONSTANTS from '../../store/constants';


const {THEMES} = CONSTANTS;




const Header = () => {
    const {user, error, isPending} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal ] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);
    const handLogin = ()=>{
        setIsShowModal(true);
    }
    const closeModal = ()=> {
        setIsShowModal(false)
    }
    const closeErrorModal = ()=> {dispatch(clearError())};
    const logoutUser = ()=> {dispatch(clearUser())};
    return (
        <header className={styles.header}> 
            <div className={styles.headerTop}>
                {isPending? <Spinner/> : user ? (
                <p>
                   <span>Welcome ,{user.username}</span> 
                 <Icon size={1} path={mdiLogoutVariant} onClick={logoutUser}/>
                 </p> 
            ): (
            <Icon size={1} path={mdiLoginVariant} onClick={handLogin}/>
                )}
            </div>

            <div className={styles.headerBottom}>
                <NavLink to='/Home' className={styles.logo}>Logo</NavLink>
                <Menu/>
               <SearchForm/>
               <span onClick={toggleTheme}>
                {theme === THEMES.LIGHT ? (
                    <Icon size={1} path={mdiLightbulbNight}  />
                ) : (
                    <Icon  size={1}  path={mdiLightbulbNightOutline}  />
                )}
               </span>
            </div>
            
            
            {isShowModal && (
            <Modal closeModal={closeModal}>
                <LoginForm closeModal={closeModal}/> 
                </Modal>
            )}
{error && <Modal closeModal={closeErrorModal}>{error}</Modal>}
        </header>
    );
}

export default Header;

