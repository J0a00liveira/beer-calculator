const express = require("express");
const router = express.Router();

const httpStatus = require("../utils/http-status");

const BeerCalculationService = require("../application/BeerCalculationService");
const service = new BeerCalculationService();

router.post("/calculate/quantity", (req, res) => {
    try {
        const result = service.calculateByQuantity(req.body);
        return res.status(httpStatus.SUCCESS).json(result.toObject());
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).json({
            error: error.message
        });
    }
});

module.exports = router;
