import express from "express";
import { Post, CreatePost, UpdatePost} from "../controllers/post.js";
const router = express.Router();

router.get('/', Post)
router.post('/create', CreatePost)
router.put("/update", UpdatePost )
export default router