const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
        id_owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        sex: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        race: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        sterile: {
            type: Boolean,
            required: true,
        },
        puce_id: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Animal', animalSchema);
