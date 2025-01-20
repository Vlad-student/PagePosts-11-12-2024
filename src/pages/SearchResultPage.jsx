import React from 'react';
import {useSearchParams} from 'react-router-dom'
import PostsSearchList from '../components/PostsList/PostsSearchList/PostsSearchList';
import Pagination from '../components/Pagination/Pagination';

const SearchResultPage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
    
    return (
        <div>
        <h1> Search result </h1>

        <section>
            <PostsSearchList q={q} />
            <Pagination/>
        </section>
        </div>
    );
}

export default SearchResultPage;
