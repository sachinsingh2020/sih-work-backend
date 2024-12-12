import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    state: {
        type: String,
        required: [true, "State is required"],
    },
    temperature: {
        type: String,
        required: [true, "Temperature is required"],
    },
    soilType: {
        type: String,
        required: [true, "Soil Type is required"],
    },
    humidity: {
        type: String,
        required: [true, "Humidity is required"],
    },
    cropType: {
        type: String,
        required: [true, "Crop Type is required"],
    },
    irrigationMethod: {
        type: String,
        required: [true, "Irrigation Method is required"],
    },
    farmingType: {
        type: String,
        required: [true, "Farming Type is required"],
    },
    chemicalUsage: {
        type: String,
        required: [true, "Chemical Usage is required"],
    },
    waterFootprint: {
        type: Number,
        required: [true, "Water Footprint is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const agricultureProductModel = mongoose.model("AgricultureProduct", schema);