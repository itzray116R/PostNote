import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(!process.env.MONGODB_URL) return
  console.log('MongoDB-URL Not Found');
  if(isConnected) return console.log('Already Connected to MongoDB');

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected =true;

  } catch (err){
    console.log(err);

  }
}