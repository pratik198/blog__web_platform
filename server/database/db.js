import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://pratik198:myblogapp@blogplatform.rw5qqls.mongodb.net/?retryWrites=true&w=majority&appName=blogplatform`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
