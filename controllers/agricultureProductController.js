import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { agricultureProductModel } from "../models/agricultureProductModel.js";
import ApiFeatures from "../utils/apiFeatures.js";


export const createAgricultureProduct = catchAsyncError(async (req, res, next) => {
    const agricultureProduct = await agricultureProductModel.create(req.body);
    res.status(201).json({
        success: true,
        agricultureProduct,
    });
});

export const getAgricultureProducts = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new ApiFeatures(agricultureProductModel.find(), req.query)
        .search()
        .filter()
        .pagination();

    const agricultureProducts = await apiFeatures.query;
    res.status(200).json({
        success: true,
        agricultureProducts,
    });
});

export const getAgricultureProduct = catchAsyncError(async (req, res, next) => {
    const agricultureProduct = await agricultureProductModel.findById(req.params.id);
    if (!agricultureProduct) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        agricultureProduct,
    });
});  