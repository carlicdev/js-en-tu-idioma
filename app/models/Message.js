import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    subject: {
        type: String,
        required: [true, 'Please choose a subject']
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid email']
    },
    message: {
        type: String,
        required: [true, 'Please type a message']
    }
})

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

export default Message;