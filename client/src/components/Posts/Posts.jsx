import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import makeStyles from "./styles";

function Posts(props) {
    const posts = useSelector((state) => state.posts);
    const classes = makeStyles();
    console.log(posts);
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </>
    );
}

export default Posts;
