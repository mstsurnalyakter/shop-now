import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    cartItem: {
        type: Object,
        default: {},
    },
},
    {
        minimize: false,
        timeseries: true
    }
)

const User = models.User || model("User", userSchema);


export default User;