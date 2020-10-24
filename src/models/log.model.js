/* eslint-disable indent */
'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = [
    'access', 'action', 'audit'
]

const logSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'user',
        enum: categories
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Log', logSchema)
