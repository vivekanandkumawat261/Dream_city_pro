import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const registerUser = async (req, res) => {
    
    try {
        console.log("REQ FILES:", req.files);
        console.log("REQ BODY:", req.body);
        
        const { fullName, email, password, username } = req.body;
     
        if (!req.files || !req.files.avatar || !req.files.avatar[0]) {
            return res.status(400).json({ message: "Avatar file is required" });
        }

        if (!req.files.coverImage || !req.files.coverImage[0]) {
            return res.status(400).json({ message: "Cover image file is required" });
        }
        const avatarLocalPath = req.files.avatar[0].path;
        const coverImageLocalPath = req.files.coverImage[0].path;

        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = await uploadOnCloudinary(coverImageLocalPath);

        if (!avatar || !coverImage) {
            return res.status(400).json({ message: "Failed to upload files to cloud storage" });
        }

        const user = await User.create({
            fullName,
            email,
            password,
            username,
            avatar: avatar.secure_url,
            coverImage: coverImage.secure_url
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                username: user.username,
                avatar: user.avatar,
                coverImage: user.coverImage
            }
        });

    } catch (error) {
        console.error("Registration Error:", error.message);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
