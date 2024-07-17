"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    fullName: String,
    dob: String,
    nationality: String,
    contactInformation: String,
    departureDate: String,
    returnDate: String,
    accommodationPreference: String,
    specialPreference: String,
    healthDeclaration: String,
    emergencyContactInfo: String,
}, {
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
