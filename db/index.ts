import mongoose from "mongoose";

async function dbConnection() {
    try{
        await mongoose.connect("mongodb://localhost/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);
        console.log("We are connected to the No relational database");
    }
    catch(err: unknown){
        if(err instanceof Error){
            return err.message;
        }
        return "Unknown error, Failed to init no relational database :(";
    }
    
}

export default dbConnection;