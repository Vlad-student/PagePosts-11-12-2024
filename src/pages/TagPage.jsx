
import { useParams } from "react-router-dom";
import TagPosts from "../components/TagPosts/TagPosts";
import TagsList from "../components/TagsList/TagsList";
import CONSTANTS from "../store/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";

const TagPage = () => {
    const {tagName} = useParams();
    const [page, setPage] = useState(1);
const limitPosts = CONSTANTS.LIMIT_POSTS.at(2);
const skip = (page-1) * limitPosts;
const {total} = useSelector((state)=>state.posts);
 
useEffect(()=>{
    setPage(1);
},[tagName])



    return (
        <div>
            <h1>{tagName}</h1>
            <section>
                <TagPosts tagName={tagName} limit={limitPosts} skip={skip}  />
                {
                    total > limitPosts && (
                        <Pagination
                        page={page}
                        setPage={setPage}
                        limit={limitPosts}
                        total={total}
                        />
                    )}
            </section>
            <section>
                <TagsList/>
            </section>
        </div>
    );
}

export default TagPage;
