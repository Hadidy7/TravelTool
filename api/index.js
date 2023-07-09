import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import mealsRoute from "./routes/meals.js"
import weatherRoute from "./routes/weather.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.") 
}
    catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected.")
})

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use('/api/meals', mealsRoute);
app.use('/api/weather', weatherRoute);

// error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "An error has occured."
    return res.status(errorStatus).json({
        output:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect()
    console.log("Connected to backend.")
})