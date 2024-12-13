import {useState} from 'react';
import Menu from "../Menu/Menu";
import Icon from '@mdi/react'
import { mdiLoginVariant } from '@mdi/js';
import Modal from './../Modal/Modal';


const Header = () => {
    const [isShowModal, setIsShowModal ] = useState(false);
    const handLogin = ()=>{
        setIsShowModal(true);
    }
    return (
        <header>
            <Icon size={1} path={mdiLoginVariant} onClick={handLogin}/>
            <Menu/>
            {isShowModal && <Modal closeModal={()=>{}}>23424234</Modal>}
        </header>
    );
}

export default Header;
