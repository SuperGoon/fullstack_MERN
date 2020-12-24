import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
} from "@material-ui/core";

import makeStyles from "./styles";

function Post(props) {
    const { post } = props;
    const classes = makeStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.Title}
            />
            <Typography className={classes.title} variant="h5">
                {post.Title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.Message}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;
