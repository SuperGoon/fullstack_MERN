import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    Creator: String,
    Title: String,
    Message: String,
    Tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;