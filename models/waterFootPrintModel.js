
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    state: {
        type: String,
        required: [true, "State is required"],
    },
    region: {
        type: String,
        required: [true, "Region is required"],
    },
    waterFootprint: {
        type: String,
        required: [true, "Water Footprint is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const WaterFootPrint = mongoose.model("WaterFootPrint", schema);
