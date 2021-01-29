const User = require('../models/user.model');
const jwtConfig = require('../configs/jwt.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res, err) => {
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
            console.log("[DEBUG] User " + req.body.email + " has registered.");
            let userToken = jwt.sign(
                {
                    id: user.email,
                    admin: user.admin
                },
                jwtConfig.secret,
                {
                    expiresIn: 86400
                }
            );
            res.send({
                auth: true,
                token: userToken,
                body: data,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.getUserById = (req, res) => {
    User.findById({ _id : req.params.id }, (err, user) => {
        if(err) {
            console.log('[LOG] USER FETCH FAILURE, SEE ERROR LOG:');
            console.log(err);
        }

        res.send(user);
    })
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!bcrypt.compareSync(req.body.password, user.password)){
                return res.status(404).send({
                    message: "The password you entered is incorrect."
                })
            }
            let userToken = jwt.sign(
                {
                    id: user.email,
                    admin: user.admin
                },
                jwtConfig.secret,
                {
                    expiresIn: 86400
                }
            )
            res.send({
                auth: true,
                token: userToken,
                body: {
                    _id: user._id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname
                }
            });
        }).catch(err => {
        return res.status(500).send({
            message: err || "An error occurred when logging in."
        });
    });
};