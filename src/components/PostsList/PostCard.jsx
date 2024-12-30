import React from 'react';
import PropTypes from 'prop-types';


const PosrCard = (props) => {
    const {post} = props;
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 80)}...</p>
        </article>
    );
};


PosrCard.propTypes = {
    post: PropTypes.shape,
title:PropTypes.string,
body: PropTypes.string,
};


export default PosrCard;
