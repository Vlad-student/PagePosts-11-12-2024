import React from 'react';
import UserProfile from './../components/UserProfile/UserProfile';
import PostListByUser from '../components/PostsList/PostListByUser';

const UserPage = () => {
    return (
        <div>
          <UserProfile/> 
          <h2>My posts</h2>
              <PostListByUser/>
        </div>
    );
}

export default UserPage;
