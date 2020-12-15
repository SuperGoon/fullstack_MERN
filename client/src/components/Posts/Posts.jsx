import React from "react";

import Post from "./Post/Post";
import makeStyles from "./styles";

function Posts(props) {
    const classes = makeStyles();
    return (
        <div>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
