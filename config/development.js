//panApp
//5KaoySEWmf9Su0DJ

import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://panApp:5KaoySEWmf9Su0DJ@pantasya.l2pvb6s.mongodb.net/panApp?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 4000