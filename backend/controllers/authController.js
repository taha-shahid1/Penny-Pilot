const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { findOne } = require('../models/expense.js');

exports.register = async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    try{
        const userExists = await User.findOne({ email });
        if (userExists){
            return res.status(400).send('User already exists!');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, password: hashedPassword});
        await user.save();
        res.status(201).send('User saved');

    } catch (error){
        res.status(500).send(error);
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findOne({email});
        if (!user){
            res.status(400).send('User does not exist already');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword){
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRETKEY);
        res.json({token});
    } catch (error){
        res.status(500).send(error);
    }
};
