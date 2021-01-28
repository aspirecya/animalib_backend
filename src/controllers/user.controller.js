const User = require('../models/user.model');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

exports.create = (req, res, err) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        animal: [],
        admin: false,
    });

    user.save()
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
    User.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching all users."
            })
        })
};

exports.findById = (req, res) => {
    User.findById(_id = req.params.id)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error has occurred while fetching the user."
            })
        })
};

exports.findByIdAndUpdate = (req, res) => {
    if(req.body.password = bcrypt.hashSync(req.body.password, 8));

    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while updating the user."
        })
    })
};

exports.findByIdAndRemove = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while deleting the user."
        })
    })
};

exports.removeAllUsers = (req, res) => {
    User.remove()
    .then(
        res.status(200).send({
            message: "Successfully deleted all users."
        })
    )
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while deleting the users."
        })
    })
};

//
// exports.addAnimalToUser = (req, res) => {
//     const animalObject = {
//         id: uuid.v4(),
//         name: req.body.name,
//         sex: req.body.sex,
//         type: req.body.type,
//         race: req.body.race,
//         dob: req.body.dob,
//         color: req.body.color,
//         sterile: req.body.sterile,
//         puce_id: req.body.puce_id
//     }
//
//     User.findByIdAndUpdate(_id = req.params.id)
//     .then(user => {
//         user.animal.push(animalObject)
//         user.save();
//         res.send(user.animal);
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message
//         })
//     })
// }
//
// exports.deleteAnimalFromUser = (req, res) => {
//     const id = req.params.animalid;
//
//     User.findByIdAndUpdate(_id = req.params.id)
//     .then(user => {
//         user.animal = user.animal.filter(item => item.id !== id);
//         user.save();
//         res.send(200);
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message
//         })
//     })
// }