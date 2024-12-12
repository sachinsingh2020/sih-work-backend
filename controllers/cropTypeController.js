import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import ApiFeatures from "../utils/apiFeatures.js";
import { CropType } from "../models/cropType.js"

export const createCropType = catchAsyncError(async (req, res, next) => {
    const cropType = await CropType.create(req.body);
    res.status(201).json({
        success: true,
        cropType,
    });
});

export const getCropTypes = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new ApiFeatures(CropType.find(), req.query)
        .search()
        .filter()
        .pagination();

    const cropTypes = await apiFeatures.query;
    res.status(200).json({
        success: true,
        cropTypes,
    });
});