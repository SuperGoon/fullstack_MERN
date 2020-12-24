import React, { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

import useStyles from "./styles";

function Form(props) {
    const [postData, setPostData] = useState({
        Creator: "",
        Title: "",
        Message: "",
        Tags: "",
        selectedFile: "",
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };

    const handleClear = () => {};

    return (
        <Paper className={classes.paper}>
            <form
                className={`${classes.root} ${classes.form}`}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography variant="h5">Creator and Memory</Typography>
                <TextField
                    fullWidth
                    name="Creator"
                    value={postData.Creator}
                    label="Creator"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Creator: e.target.value });
                    }}
                />
                <TextField
                    fullWidth
                    name="Title"
                    value={postData.Title}
                    label="Title"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Title: e.target.value });
                    }}
                />
                <TextField
                    fullWidth
                    name="Message"
                    value={postData.Message}
                    label="Message"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Message: e.target.value });
                    }}
                />
                <TextField
                    fullWidth
                    name="Tags"
                    value={postData.Tags}
                    label="Tags"
                    variant="outlined"
                    onChange={(e) => {
                        setPostData({ ...postData, Tags: e.target.value });
                    }}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={handleClear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;
