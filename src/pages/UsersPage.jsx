import { useState } from "react";
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import Icon from "@mdi/react";
import UsersList from "../components/UsersList/UsersList";
import styles from './pages.module.scss'


const BlogPage = () => {
  const limits = [4,8,12,20];
    const [limitUsers, setLimitUsers] = useState(limits.at(0));
    const [page, setPage] = useState(1);
    const showOption = (limit) => <option key={limit}>{limit}</option>;
    const changeLimitUsers = (event) =>{
        setLimitUsers(Number(event.target.value));
        setPage(1);
    }
    const setPrevPage = () =>{
        if(page>1){ setPage((prev)=>prev-1)}}
    const setNextPage = () =>{
if (page<100){setPage((prev)=>prev+1)}}
    const skip = (page -1)*limitUsers;
  


    return (
        <div className={styles.wrapper}>
            <h1>Autors</h1>
            <div>
                <select name="limitUsers" value={limitUsers} onChange={changeLimitUsers}>{limits.map(showOption)}</select>
            </div>
            <UsersList limit={limitUsers} skip={skip}/>
            <div>
                <span>prev</span>
                    <span onClick={setPrevPage}>
                        <Icon size={2} path={mdiChevronLeft}/>
                    </span>
                    <span onClick={setNextPage}>
                        <Icon size={2} path={mdiChevronRight}/>
                        </span>
            </div>
        </div>
        
    );
}

export default BlogPage;
