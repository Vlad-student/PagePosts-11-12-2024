import { PropTypes } from 'prop-types';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import Icon from "@mdi/react";   
import styles from './Pagination.module.scss'
 

const Pagination = (props) => {
    const {page, setPage, total, limit} = props; 
    const setPrevPage = () =>{
        if(page>1){ setPage((prev)=>prev-1)}}
    const setNextPage = () =>{
if (page<100){setPage((prev)=>prev+1)}};

    return (
        <div className={styles.pagination}> 
            <span onClick={setPrevPage}>
                <Icon size={2} path={mdiChevronLeft}/>
                </span>
                <span className={styles.page}>{page}</span>
               {(total - (limit*page)>0) && <span onClick={setNextPage}>
                <Icon size={2} path={mdiChevronRight}/>
               </span>   }      
        </div>
    );
}


Pagination.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
    total: PropTypes.number,
    limit: PropTypes.number,
};
export default Pagination;
