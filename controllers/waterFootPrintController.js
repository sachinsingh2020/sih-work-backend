import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import ApiFeatures from "../utils/apiFeatures.js";
import { WaterFootPrint } from "../models/waterFootPrintModel.js"

export const createWaterFootPrint = catchAsyncError(async (req, res, next) => {
    const waterFootPrint = await WaterFootPrint.create(req.body);
    res.status(201).json({
        success: true,
        waterFootPrint,
    });
}
);

export const getWaterFootPrints = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new ApiFeatures(WaterFootPrint.find(), req.query)
        .search()
        .filter()
        .pagination();

    const waterFootPrints = await apiFeatures.query;
    res.status(200).json({
        success: true,
        waterFootPrints,
    });
}
);
