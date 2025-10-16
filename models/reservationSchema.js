import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "first name should contain at least 3 characters"],
        maxlength: [30, "first name cannot contain more than 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "last name should contain at least 3 characters"],
        maxlength: [30, "last name cannot contain more than 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "phone number must contain 10 digits"],
        maxlength: [10, "phone number must contain 10 digits"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
