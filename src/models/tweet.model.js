/* eslint-disable indent */

'use strict'
const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')
// const httpStatus = require('http-status')
// const APIError = require('../utils/APIError')
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Tweet', tweetSchema)
