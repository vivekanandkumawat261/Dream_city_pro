import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updatedUserCoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
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
      { 
        name: 'avatar',
        maxCount: 1 
      },
      { name: 'coverImage', 
        maxCount: 1 

      }
    ]),
    registerUser
);

router.route("/login").post(loginUser) 

//secured routes
router.route('/logout').post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)  
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"),updateUserAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("/coverImage"), updatedUserCoverImage)
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)

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
