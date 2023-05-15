import { PostModel } from "../models/PostModel.js"
export const Post = async(req, res) => {

      try {
         const post =  await PostModel.find();
         res.status(200).json(post)
      } catch (error) {
         res.status(500).json({error: error})
      }
}
export const CreatePost = async(req, res) => { 
    try {
       const NewPost = req.body
       const newpost = new PostModel(NewPost)
       await newpost.save()
        res.status(200).json(newpost)
     } catch (error) {
        res.status(500).json({error: error})
     }
}
export const UpdatePost = async(req, res) => {
    try {
        const updatePost = req.body;
        const post =await PostModel.findOneAndUpdate({id: updatePost.id}, updatePost, {new: true})
        res.status(200).json({
            state: success,
            post: post
        })
    } catch (error) {
        res.status(500).json({err: error})
    }
}