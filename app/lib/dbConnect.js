import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
    try {
        await mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true,});
     
        console.log('connected to DB');
    } catch (err) {
        console.log('Error connecting to DB:', err.message );
    }
}

export default dbConnect;

