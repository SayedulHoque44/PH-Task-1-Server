import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>({
    fullName:String,
    dob:String,
    nationality:String,
    contactInformation:String,
    departureDate:String,
    returnDate:String,
    accommodationPreference:String,
    specialPreference:String,
    healthDeclaration:String,
    emergencyContactInfo:String,
},{
    timestamps:true
})


export const UserModel = model<TUser>("User",UserSchema)