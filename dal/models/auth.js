import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    idUser: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: true,
    },
    passwordUser: {
        type : String
    },
    rolUser: {
        type: String,
    }
})

export default mongoose.model('Auth', authSchema);
