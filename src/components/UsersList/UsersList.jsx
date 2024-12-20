import { useSelector,useDispatch  } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { getAllUsersAsync } from "../../store/usersSlice";
import UserCard from "./UserCard";
import styles from './User.module.scss';

const UsersList = () => {
    const dispatch = useDispatch();
    const {users, error, isPending} = useSelector((state) => state.users);
useEffect(()=>{
    dispatch (getAllUsersAsync())
}, []);
const showUser = (user)=> <UserCard key={user.id} user={user}/>;


    if (error){return <p>{error}</p>}
    if (isPending) {return <Spinner/>}

    return (
        users.length === 0 ? (<p>list users empty</p>)
         :( <section>
            {users.map(showUser)}
         </section>)
    );
}

export default UsersList;
