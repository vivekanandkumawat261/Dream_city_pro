// utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File uploaded successfully
        fs.unlinkSync(localFilePath);  // remove file from local after uploading
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);  // remove file even if upload fails
        return null;
    }
};




// import { v2 as cloudinary } from "cloudinary"
// import fs from "fs"

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null;
//         // upload the file on Cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         });
//         // file has been uploaded successfully
//         console.log("File is uploaded on Cloudinary", response.url);
//         return response;
//     } catch (error) {
//         fs.unlinkSync(localFilePath); // remove the local saved temporary file as the upload operation failed
//         console.error("Error uploading file to Cloudinary:", error);
//         return null;
//     }
// }

// export { uploadOnCloudinary }
