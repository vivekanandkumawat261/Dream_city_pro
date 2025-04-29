import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.get("/ping", (req, res) => {
    console.log("✅ Ping route hit");
    res.send("Pong!");
  });
  

router.post(
    "/register",
    (req, res, next) => {
        console.log("✅ Route Hit: /api/v1/users/register");
      next();
    },
    upload.fields([
      { name: 'avatar', maxCount: 1 },
      { name: 'coverImage', maxCount: 1 }
    ]),
    registerUser
);
export default router




// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         },
//         {
//             name: "coverImage",
//             maxCount: 1
//         }
//     ]),
//     registerUser
// )
//router.route("/login").post(login)
