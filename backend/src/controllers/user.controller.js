import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = async (req, res) => {
    try {
        console.log("REQ FILES:", req.files);  // Log files
        console.log("REQ BODY:", req.body);    // Log body

        const { fullName, email, password, username } = req.body;

        if (!req.files || !req.files.avatar || !req.files.avatar[0]) {
            console.log("No avatar file found in request");
            return res.status(400).json({ message: "Avatar file is required" });
        }

        if (!req.files.coverImage || !req.files.coverImage[0]) {
            console.log("No cover image file found in request");
            return res.status(400).json({ message: "Cover image file is required" });
        }

        // Log the paths
        const avatarLocalPath = req.files.avatar[0].path;
        const coverImageLocalPath = req.files.coverImage[0].path;

        console.log("Avatar Path:", avatarLocalPath);
        console.log("Cover Image Path:", coverImageLocalPath);

        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = await uploadOnCloudinary(coverImageLocalPath);

        if (!avatar || !coverImage) {
            console.log("Cloudinary upload failed");
            return res.status(400).json({ message: "Failed to upload files to cloud storage" });
        }

        // Log user creation
        const user = await User.create({
            fullName,
            email,
            password,
            username,
            avatar: avatar.secure_url,
            coverImage: coverImage.secure_url
        });

        console.log("User created:", user);

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
        return res.status(500).json({ message: error.message || "Something went wrong" });
    }
};
