const formidable = require('formidable');
const validator = require('validator');
const registerModel = require('../models/authModel');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cloudinary = require('cloudinary').v2;

module.exports.userRegister = (req, res) => {

    const form = formidable();
    form.parse(req, async (err, fields, files) => {
        const {
            userName, email, password,confirmPassword
        } = fields;

        const {image} = files;
        const error = [];

        if(!userName){
            error.push('Please provide your user name');
        }
        if(!email){
            error.push('Please provide your Email name');
        }
        if(email && !validator.isEmail(email)){
            error.push('Please provide your valid Email');
        }
        if(!password){
            error.push('Please provide your Password');
        }
        if(!confirmPassword){
            error.push('Please provide your confirm Password');
        }
        if(password && password.length < 8){
            error.push("Please provide your password must be 8 characteres");
        }
        if(Object.keys(files).length === 0){
            error.push("Please provide your user image");
        }
        if(Object.keys(files).length !== 0){
            const name = files.image.originalFilename;
            const size = files.image.size;
            const type = files.image.mimetype;
            const imageSize = (size/1000)/1000;
            const imageType = type.split('/')[1];

            if(imageType !== 'png' && imageType !== 'jpg' && imageType !== 'jpeg'){
                error.push('please provide user image');
            }
            if(imageSize>8){
                error.push('please provide your image less then 8 MB');
            }
        }
        if(error.length > 0){
            res.status(400).json({
                error:{
                    errorMessage : error
                }
            })
        } else {
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
                secure: true
            });

            try {
                const checkUser = await registerModel.findOne({
                    email: email
                })
                if(checkUser){
                    res.status(404).json({
                        error: {
                            errorMessage: ['Your Email already exited']
                        }
                    });
                } else {
                    try {
                        const result = await cloudinary.uploader.upload(files.image.filepath);
                        // console.log(result);
    
                        const userCreate = await registerModel.create({
                            userName, 
                            email,
                            password : await bcrypt.hash(password,10),
                            image: result.url
                        });

                        // console.log(userCreate.image);

                        const token = jwt.sign({
                            id : userCreate._id,
                            email: userCreate.email,
                            userName: userCreate.userName,
                            image: userCreate.image,
                            registerTime: userCreate.createdAt
                        }, process.env.SECRET,{
                            expiresIn: process.env.TOKEN_EXP
                        });

                        const options = { expires : new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000 )}
                        
                        res.status(201).json({
                            successMessage : ['Your Register Successful']
                        })
                        
                    } catch (error) {
                        res.status(404).json({
                            error: {
                                errorMessage : ['Houve uma falha ao fazer o upload da imagem!']
                            }
                        })
                    }
                }
            } catch(error){
                res.status(500).json({
                    error: {
                        errorMessage : ['Internal Server Error']
                    }
                })
            }
        }
        
    }) // end Formidable
    
}

module.exports.userLogin = async (req, res) => {
    const error = [];
    const {email,password} = req.body;
    if(!email) {
        error.push('Please provide your Email');
    }
    if(!password) {
        error.push('Please provide your Password');
    }
    if(email && !validator.isEmail(email)){
        error.push('Please provide your valid Email');
    }
    if(error.length > 0){
        res.status(400).json({
            error:{
                errorMessage : error
            }
        })
    } else {
        try {
            const checkUser = await registerModel.findOne({
                email:email
            }).select('+password');
            
            if(checkUser){
                const matchPassword = await bcrypt.compare(password,checkUser.password);

                if(matchPassword){
                    const token = jwt.sign({
                         id : checkUser. _id,
                         email: checkUser.email,  
                         userName: checkUser.userName,
                         image: checkUser.image,
                         registerTime : checkUser.createdAt
                    }, process.env.SECRET,{
                       expiresIn: process.env.TOKEN_EXP
                    });
                const options = { expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000 )}
                
                res.status(201).cookie('authToken', token, options).json({
                    successMessage : 'Your Login Successful', token
                })

            } else {
               res.status(400).json({
                   error: {
                      errorMessage : ['Your Password not Valid']
                   }
               })
            }
            } else {
                res.status(400).json({
                    error: {
                       errorMessage : ['Your Email not Valid']
                    }
                })
            }

        } catch{
            res.status(500).json({
                error: {
                   errorMessage : ['Internal Server Error']
                }
            })
        }
    }
}

module.exports.userLogout = (req,res) => {
    res.status(200).cookie('authToken', '').json({
        success : true
    })
}