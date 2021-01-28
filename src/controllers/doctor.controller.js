const Doctor = require('../models/doctor.model');

exports.create = (req, res, err) => {
    const doctor = new Doctor({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    });

    doctor.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.findAll = (req, res) => {
    Doctor.find()
        .then(doctors => {
            res.send(doctors);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching all users."
            })
        })
};

exports.findById = (req, res) => {
    Doctor.findById(_id = req.params.id)
        .then(doctor => {
            res.send(doctor)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching the doctor."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    Doctor.findByIdAndUpdate(req.params.id, req.body)
        .then(doctor => {
            res.send(doctor)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while updating the doctor."
            })
        })
};

exports.findByIdAndRemove = (req, res) => {
    Doctor.findByIdAndDelete(req.params.id)
        .then(doctor => {
            res.send(doctor);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while deleting the doctor."
            })
        })
};

exports.removeAllDoctors = (req, res) => {
    Doctor.remove()
        .then(
            res.status(200).send({
                message: "Successfully deleted all doctors."
            })
        )
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while deleting the doctors."
            })
        })
};