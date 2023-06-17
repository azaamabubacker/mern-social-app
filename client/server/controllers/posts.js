import { Post } from "../models/Post.js";
import { User } from "../models/User.js";

// Create.
export const createPost = async (req, res) => {
  try {
    const { userId, id } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.userPicturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Read.
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.param;
    const post = await Post.findById(userId);
    res.status(201).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Update.
export const likePost = async (req, res) => {
  try {
    const { id } = req.param;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (!isLiked) {
      post.likes.set(userId, true);
    } else {
      post.likes.delete(userId);
    }

    const updatePost = await Post.findByIdAndUpdate(
      id,
      { $set: { likes: post.likes } },
      { new: true }
    );

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
