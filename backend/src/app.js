import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db/index.js";

// Import Routes
import userRoutes from "./routes/user.routes.js";
import cityRoutes from "./routes/city.routes.js";
import statisticsRoutes from "./routes/statistics.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import tokenRoutes from "./routes/token.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";

// Middleware
import { errorMiddleware } from "./middlewares/error.middleware.js";

dotenv.config();
const app = express();

// DB Connection
connectDB();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/cities", cityRoutes);
app.use("/api/v1/statistics", statisticsRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/tokens", tokenRoutes);
app.use("/api/v1/invoices", invoiceRoutes);

// Error Handler
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




// import express from "express"
// import cors from "cors"
// import cookieParser from "cookie-parser"

// // Add this after route declarations
// import { ApiError } from "./utils/ApiError.js";

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "../public")));

// // app.use(express.static("public"))
// app.use(cookieParser())

// //routes import 
// import userRouter from './routes/user.routes.js'

// //routes declaration
// app.use("/api/v1/users", userRouter)

// app.use((err, req, res, next) => {
//     if (err instanceof ApiError) {
//       return res.status(err.statusCode).json({
//         success: false,
//         message: err.message,
//         errors: err.errors || [],
//         stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
//       });
//     }
  
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
//     });
//   });
// //http://localhost:8000/api/v1/users/register
export { app }