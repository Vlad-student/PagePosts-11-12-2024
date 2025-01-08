import FeaturePost from "../components/FeaturePost/FeaturePost";
import PostsList from "../components/PostsList/PostsList";
import CONSTANTS from "../store/constants";
import Pagination from './../components/Pagination/Pagination';
import { useState } from "react";

const SinglePost = () => {
    const [page, setPage] = useState(1);
    const limitPosts = CONSTANTS.LIMIT_POSTS.at(2);
    const skip = (page - 1) * 5;
    return (
        <>
        <section>
            <FeaturePost imgPosition ='right'/>
        </section>
           <div>
            <h1>Blog</h1>
            <PostsList withPic limit={limitPosts} skip={skip} />
            <Pagination page={page} setPage={setPage} />
        </div>
        </>
    );
}

export default SinglePost;


