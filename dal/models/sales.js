import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        trim: true
    },
    idClient: {
        type: mongoose.Schema.Types.ObjectId,ref:'Client',
        required: true,
    },
    amount: {
        type : Number
    },
    confirm: {
        type: Boolean,
    },
    detailSale: [{
        idProduct: {
            type: mongoose.Schema.Types.ObjectId,ref:'Product',
            required: true
        },
        quantity:{
            type: Number,
            required: true
        }
    }]
})

export default mongoose.model('Sales', salesSchema);
