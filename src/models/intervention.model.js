const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interventionSchema = new Schema({
        id_doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor',
                required: true
        },
        id_animal: {
                type: String,
                required: true
        },
        date: {
                type: String
        },
        type: {
                type: String
        },
        description: {
                type: String
        },
        instructions: {
                type: String
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Intervention', interventionSchema);
