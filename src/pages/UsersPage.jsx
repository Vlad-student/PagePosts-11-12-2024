import { useState } from "react";
import UsersList from "../components/UsersList/UsersList";
import styles from './pages.module.scss';
import Limit from "../components/limit/limit";
import CONSTANTS from "../store/constants";
import Pagination from "../components/Pagination/Pagination";


const BlogPage = () => {
  const limits = CONSTANTS.LIMITS;
    const [limitUsers, setLimitUsers] = useState(limits.at(0));
    const [page, setPage] = useState(1);
    const changeLimitUsers = (event) =>{
        setLimitUsers(Number(event.target.value));
        setPage(1);
    }

    const skip = (page -1)*limitUsers;
  


    return (
        <div className={styles.wrapper}>
            <h1>Autors</h1>
            <Limit 
            limitUsers = {limitUsers} changeLimitUsers={changeLimitUsers} />
            <UsersList limit={limitUsers} skip={skip}/>
            <Pagination page={page} setPage={setPage} />
        </div>
        
    );
}

export default BlogPage;
