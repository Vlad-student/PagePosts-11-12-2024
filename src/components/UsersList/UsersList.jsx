import { useSelector,useDispatch  } from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { getAllUsersAsync } from "../../store/usersSlice";
import UserCard from "./UserCard";
import styles from './User.module.scss';


const UsersList = (props) => {
    const {limit = 4, skip = 0} = props;
    const dispatch = useDispatch();
    const {users, error, isPending} = useSelector((state) => state.users);
useEffect(()=>{
    dispatch(getAllUsersAsync({limit, skip}))
}, [dispatch, limit, skip]);
const showUser = (user)=> <UserCard key={user.id} user={user}/>;


    if (error){return <p>{error}</p>}
    if (isPending) {return <Spinner/>}
    // if (isPending) { return <p>Loading</p> }

    return (
        users.length === 0 ? (<p>list users empty</p>)
         :( <section className={styles['users-list']}>
            {users.map(showUser)}
         </section>)
    );
}

UsersList.propTypes = {
    limit: PropTypes.number,
    skip: PropTypes.number,
}

export default UsersList;
