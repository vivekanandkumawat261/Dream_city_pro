// utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
 

export const uploadOnCloudinary = async (filePath) => {
    try {
        console.log("SECRET:", process.env.CLOUDINARY_API_SECRET);
        console.log(cloudinary.utils.api_sign_request({ timestamp: 1745934530 }, process.env.CLOUDINARY_API_SECRET));

      console.log("Uploading file from:", filePath);
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: "auto"
      });
      console.log("✅ Cloudinary Upload Success:", result.secure_url);
      return result;
    } catch (error) {
      console.error("❌ Cloudinary Upload Error:", error.message);
      throw error;
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
