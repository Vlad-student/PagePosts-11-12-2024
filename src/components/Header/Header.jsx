import {useState} from 'react';
import Menu from "../Menu/Menu";
import Icon from '@mdi/react'
import { mdiLoginVariant } from '@mdi/js';
import Modal from './../Modal/Modal';
import LoginForm from '../forms/LoginForm';
import { useSelector } from "react-redux";

const Header = () => {
    const {user} = useSelector((state)=>state.user)
    const [isShowModal, setIsShowModal ] = useState(false);
    const handLogin = ()=>{
        setIsShowModal(true);
    }
    const closeModal = ()=> {
        setIsShowModal(false)
    }
    return (
        <header>
            {user ? 'welcome' +user.username :
            <Icon size={1} path={mdiLoginVariant} onClick={handLogin}/>}
            <Menu/>
            {isShowModal && <Modal closeModal={closeModal}> <LoginForm closeModal={closeModal}/> </Modal>}
        </header>
    );
}

export default Header;
