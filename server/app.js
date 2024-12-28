import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();        

const app = express();
const port = process.env.PORT || '8080';

app.use(cors());

//body parser middleware
app.use(express.json());

//connect to database
connectDB();

//include router
app.use("/api/admin", adminRoutes);

app.listen(port, (req,res)=>{
    console.log(`express server is running on prot http://localhost:${port}`);
})