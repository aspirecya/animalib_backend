const Animal = require('../models/animal.model');

exports.create = (req, res, err) => {
    const animal = new Animal ({
        id_owner: req.body.id_owner,
        name: req.body.name,
        sex: req.body.sex,
        type: req.body.type,
        race: req.body.race,
        dob: req.body.dob,
        color: req.body.color,
        weight: req.body.weight,
        sterile: req.body.sterile,
        puce_id: req.body.puce_id
    });

    animal.save()
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
    Animal.find()
        .then(animals => {
            res.send(animals);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching all animals."
            })
        })
};

exports.findById = (req, res) => {
    Animal.findById(_id = req.params.id)
        .then(animal => {
            res.send(animal)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching the animal."
            })
        })
};

exports.findByOwnerId = (req, res) => {
    Animal.find({ id_owner: req.params.id_owner })
        .then(animal => {
            res.send(animal)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching the animal(s)."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body)
        .then(animal => {
            res.send(animal)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while updating the animal."
            })
        })
};

exports.findByIdAndRemove = (req, res) => {
    Animal.findByIdAndDelete(req.params.id)
        .then(doctor => {
            res.send(doctor);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while deleting the doctor."
            })
        })
};

exports.removeAllAnimals = (req, res) => {
    Animal.remove()
        .then(
            res.status(200).send({
                message: "Successfully deleted all animals."
            })
        )
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while deleting the animals."
            })
        })
};