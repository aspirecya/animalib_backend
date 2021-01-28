const Intervention = require('../models/intervention.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {

    const intervention = new Intervention({
        id_doctor: req.body.id_doctor,
        id_animal: req.body.id_animal,
        date: req.body.date,
        type: req.body.type,
        description: req.body.description,
        instructions: req.body.instructions
    });

    intervention.save()
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
    Intervention.find()
        .then(interventions => {
            res.send(interventions);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching all posts."
            })
        })
};

exports.findById = (req, res) => {
    Intervention.findById(_id = req.params.id)
        .then(intervention => {
            res.send(intervention)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching the intervention."
            })
        })
};

exports.findByAnimalId = (req, res) => {
    Intervention.find({ id_animal: req.params.id_animal })
        .then(intervention => {
            res.send(intervention)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching the intervention(s)."
            })
        })
};

exports.findByDoctorId = (req, res) => {
    Intervention.find({ id_doctor: req.params.id_doctor })
        .then(intervention => {
            res.send(intervention)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while fetching the intervention(s)."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    Intervention.findByIdAndUpdate(req.params.id, req.body)
        .then(intervention => {
            res.send(intervention)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while updating the intervention."
            })
        })
};

exports.findByIdAndRemove = (req, res) => {
    Intervention.findByIdAndDelete(req.params.id)
        .then(intervention => {
            res.send(intervention);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occured while deleting the intervention."
            })
        })
};

exports.removeAllInterventions = (req, res) => {
    Intervention.remove()
        .then(
            res.status(200).send({
                message: "Successfully deleted all interventions."
            })
        )
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while deleting the interventions."
            })
        })
};