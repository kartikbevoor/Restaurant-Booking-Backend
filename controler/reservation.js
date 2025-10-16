import { json } from "express";
import ErrorHandler from "../Error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) =>{
    const { firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }
    try{
        await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            sucess: true,
            message: "Reservation sent successfully",
        })
    } catch(error){
        if(error.name === "Validationerror"){
            const validationerror = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationerror.join(' , '), 400));
        }
        return next(error);
    }
};