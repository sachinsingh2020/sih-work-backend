
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    crop: {
        type: String,
        required: [true, "Crop is required"],
    },
    weather: {
        type: String,
        required: [true, "Weather is required"],
    },
    state: {
        type: String,
        required: [true, "State is required"],
    },
    waterType: {
        type: String,
        required: [true, "Water Type is required"],
    },
    duration: {
        type: String,
        required: [true, "Duration is required"],
    },
    landArea: {
        type: String,
        required: [true, "Land Area is required"],
    },
    suitable: {
        type: String,
        required: [true, "Suitable is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const CropType = mongoose.model("CropType", schema);
