import mongoose, { mongo } from 'mongoose'


const blogSchema = new mongoose.Schema(
    {title: {
        type: String,
        required: true, 
      },
      content: {
        type: String,
        required: [true, 'Content is required'],
      },
      author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      tags: {
        type: String,
      },
      featuredImage: {
        type: String, 
        default: null,
      },
}
)

const Blog = mongoose.model("Blog",blogSchema)

export default Blog