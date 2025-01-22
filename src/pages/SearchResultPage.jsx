import  { useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import PostsSearchList from '../components/PostsList/PostsSearchList/PostsSearchList';
import Pagination from '../components/Pagination/Pagination';
import CONSTANTS from './../store/constants';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SearchResultPage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
const [page, setPage] = useState(1);
const limitPosts = CONSTANTS.LIMIT_POSTS.at(2);
const skip = (page-1) * limitPosts;
const {total} = useSelector((state)=>state.posts);
useEffect(() => {
    setPage(1)
}, [q])

    
    
    return (
        <div>
        <h1> Search result </h1>

        <section>
            <PostsSearchList q={q} limit ={limitPosts} skip={skip} />
            {total > 0 ? (
                   <Pagination page={page} setPage={setPage} />
            ):(
                <p>posts not found</p>
            )
        }
           
        </section>
        </div>
    );
}

export default SearchResultPage;
