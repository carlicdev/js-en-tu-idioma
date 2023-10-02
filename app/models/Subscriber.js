import mongoose, { Schema } from 'mongoose';

const subscriberSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide a valid email']
    }
})

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;