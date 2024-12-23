import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUserAsync } from '../../store/usersSlice';


const UserProfile = () => {

    const dispatch = useDispatch();
    const {userId} = useParams();
    useEffect(()=>{
dispatch(getOneUserAsync(userId))
    },[dispatch, userId]);
    return (
        <div>
            UserProfile
        </div>
    );
}

export default UserProfile;
