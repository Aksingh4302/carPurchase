import mongoose from "mongoose";


const ConnectDB = async () =>{
    try {
       const conn = await mongoose.connect("mongodb+srv://abhishek:asdf1234@cluster0.eudaevt.mongodb.net/test",{
        useUnifiedTopology: true

       });
       console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default ConnectDB;