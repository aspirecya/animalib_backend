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
        },
        race: {
            type: String,
        },
        dob: {
            type: String,
        },
        color: {
            type: String,
        },
        sterile: {
            type: Boolean,
        },
        puce_id: {
            type: String,
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Animal', animalSchema);
