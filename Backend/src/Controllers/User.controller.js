import axios from 'axios'
import User from '../Models/User.model.js';
import bcrypt from 'bcryptjs'
import Blog from '../Models/Blog.model.js';
const saltroundes = 10
async function generatebothtoken(userid) {
    try {
        const user = await User.findOne({ _id: userid });
        if (!user) {
            throw new Error("User not found");
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error("Error generating tokens");
    }
}
const Signup = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"Required filed"})
        }
        const user = await User.findOne(
           { $or:[{username},{email}]}
        )
        if(user){
            return res.status(500).json({message:"User alrready exists"})
        }
       const hashedpassword = await bcrypt.hash(password, saltroundes);
        if (!hashedpassword) {
            return res.status(400).json({ message: "Password is not hashed" });
        }
        console.log("Hashed password", hashedpassword);

        const newUser = new User({
            username,
            password: hashedpassword,
            email
        });
        console.log(newUser)
        await newUser.save()
        if (savedUser) {
            return res.status(201).json({ message: "User created successfully" });
        } else {
            return res.status(500).json({ message: "User not created" });
        }

    } catch (error) {
        return res.status(500).json({message:"Internal Server Error "})
    }
}
const Login= async(req,res)=>{
    try {
        const {loginname, password} = req.body;
        if(!loginname || !password){
            return res.status(400).json({messgae:"Enter the cerediantls"})
        }
        const user = await User.findOne
        ({$or:[{username:loginname},{email:loginname}]})

        if(!user){
            return res.status(400).json({message:"No User found"})
        }
        const passwordCorrect = await user.isPasswordCorrect(password);
        if (!passwordCorrect) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        
        console.log("Correct password");

        const { accessToken, refreshToken } = await generatebothtoken(user._id);
        const loggedinuser = await User.findById(user._id).select("-password");

        res.cookie("accessToken", accessToken, { secure: true, httpOnly: true, sameSite: 'Strict' });
        res.cookie("refreshToken", refreshToken, { secure: true, httpOnly: true, sameSite: 'Strict' });
        res.status(200).json({ message: "Logged in successfully", accessToken, refreshToken, loggedinuser });
    } catch (error) {
        return res.status(500).json({message:"Unable to Login"})
    }
}
const createblog = async (req, res) => {
    try {
      const { title, content,  tags,author } = req.body;
      console.log("Form Data:", title, content, author, tags);  
      console.log("File Data:", req.file); 
  
      if (!title || !content || !author || !tags || !req.file) {
        return res.status(500).json({ message: "Content not found" })
      }
  console.log(author)
      const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
      const newBlog = new Blog({
        title,
        content,
        author,
        tags,
        featuredImage: fileUrl,
      });
  
      await newBlog.save();
      return res.status(200).json({ message: "Blog uploaded successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
const allblog = async(req,res)=>{
    try {
        const blogs = await Blog.find()
        console.log("blogs")
        return res.status(200).json({message:"All Blogs",blogs})
    } catch (error) {
        return res.status(500).json({message:"Internal Sever Error"})
    }
}
const oneblog = async (req, res) => {
    try {
        const { id: postid } = req.query; 
        console.log("Post ID:", postid);

        if (!postid) {
            return res.status(400).json({ message: "No post ID provided" });
        }

        const post = await Blog.findOne({ _id: postid });
        console.log("Fetched Post:", post);

        if (!post) {
            return res.status(404).json({ message: "No post found with the provided ID" });
        }

        return res.status(200).json({ message: "Blog found", post });
    } catch (error) {
        console.error("Error fetching the blog post:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getuserid = async(req,res)=>{
    try {
        const {username} = req.body;
        if(!username){
            return res.status(500).json({message:"no username fot id"})
        }
        const user = await User.findOne({username:username})
        if(!user){
             return res.status(500).json({message:"no user found"})
        }
        const userid = user._id;
        if(!userid){
            return res.stauts(500).json({message:"no userid found"})
        }
        return res.status(200).json({message:"user id ofund",userid})
    } catch (error) {
        return res.status(500).json({message:"Internal Server error"})
    }
}
export {Signup,Login,createblog,allblog,oneblog,getuserid}