const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        address: {
            type: String
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
