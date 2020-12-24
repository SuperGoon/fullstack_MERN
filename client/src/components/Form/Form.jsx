import React, { useState } from "react";

import { TextField, Typography, Button, Paper } from "@material-ui/core";

import useStyles from "./styles";

function Form(props) {
    const [postData, setPostData] = useState({
        Creator: "",
        Title: "",
        Message: "",
        Tags: "",
    });
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Paper className={classes.paper}>
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography variant="h5">Creator and Memory</Typography>
                <TextField
                    className={classes.fileInput}
                    name="Creator"
                    value={postData.Creator}
                    label="Creator"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, creator: e.target.value });
                    }}
                />
                <TextField
                    className={classes.fileInput}
                    name="Title"
                    value={postData.Title}
                    label="Title"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Title: e.target.value });
                    }}
                />
                <TextField
                    className={classes.fileInput}
                    name="Message"
                    value={postData.Message}
                    label="Message"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Message: e.target.value });
                    }}
                />
                <TextField
                    className={classes.fileInput}
                    name="Tags"
                    value={postData.Tags}
                    label="Tags"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Tags: e.target.value });
                    }}
                />
            </form>
        </Paper>
    );
}

export default Form;
