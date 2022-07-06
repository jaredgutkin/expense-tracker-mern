const Transaction = require('../models/Transaction')

// @desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc add transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction')
}

// @desc delete transactions
//@route delete /api/v1/transactions/:id
//@access Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction')
}