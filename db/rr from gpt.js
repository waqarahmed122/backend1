const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: "User" }, //relation with user model
});

const User = mongoose.model("User", UserSchema); //user model

const Post = mongoose.model("Post", PostSchema); //post model

module.exports = { User, Post };
