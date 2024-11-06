import mongoose, { Mongoose } from 'mongoose';

const dbConnet = async()=>{
    try {
        mongoose.connection.on("connected", () => {
            console.log("DB is Connected");
        });  
        await mongoose.connect(process.env.MONGODB_URI, {
        });
    } catch (error) {
        console.log("MongoDB Connection Error", error);
    }
}    

export default dbConnet