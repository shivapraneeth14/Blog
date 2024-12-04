import { Router } from "express";
import { Signup,Login,createblog,allblog,oneblog,getuserid } from "../Controllers/User.controller.js"
import upload from "../Middlewares/Multer.js";

const router = Router()
router.route("/Signup").post(Signup)
router.route("/Login").post(Login)
router.route("/create").post(upload.single("featuredImage"),createblog)
router.route("/allblog").get(allblog)
router.route("/oneblog").get(oneblog)
router.route("/getuserid").post(getuserid)


export default router