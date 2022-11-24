import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema({
    identification: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        street : String,
        city: String,
        locality: String,
        postal_code: Number
    },
    phone: [{
        phone_type: String,
        phone_number: Number,
    }],
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Client', clientsSchema);
