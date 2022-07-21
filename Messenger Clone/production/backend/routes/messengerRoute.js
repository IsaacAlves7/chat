const router = require('express').Router();

const { authMiddleware } = require('../middleware/authMiddleware');
// const { messageUploadDB } = require('../controller/messengerController');

const User = require('../models/authModel');
const messageModel = require('../models/messageModel');
const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;

// Router + Controller
// OBS: O router tem a função do Controller, visto que no Controller está inativo!

// ---------------------------------------------------------------------------------------------------------------------------
// getLastMessage controller
router.get('/api/messenger/getfriends', authMiddleware, async (req, res) => {
    const getLastMessage = async(myId, fdId) => {
        const msg = await messageModel.findOne({
            $or : [{
                $and: [{
                    senderId : {
                        $eq: myId
                    }
                },{
                    reseverId : {
                        $eq : fdId
                    }
                }]
            },{
                $and : [{
                    reseverId : {
                        $eq : fdId
                    } 
                },{
                    senderId : {
                        $eq : myId
                    }
                }]
            }]
        }).sort({
            updated : -1
        });
        return msg;
    }
    // console.log("ok"); // funcionou!

    const myId = req.myId;
    let fnd_msg = [];
    // console.log(myId);
    try {
        const friendGet = await User.find({
            _id: {
                $ne: myId
            }
        });
        for (let i = 0; i < friendGet.length; i++ ){
            let lmsg = await getLastMessage(myId,friendGet[i].id);
            fnd_msg = [...fnd_msg, {
                fndInfo : friendGet[i],
                msgInfo : lmsg
            }]
            // console.log(fnd_msg);
            // console.log(lmsg);
        }
        // console.log(friendGet);

        // const filter = friendGet.filter(d=>d.id !== myId);
        res.status(200).json({success:true, friends : fnd_msg})
        // console.log(friendGet);
    } catch (error) {
        res.status(500).json({
            error: {
                errorMessage : 'Internal Server Error'
            }
        })
    }
});
// messageUploadDB controller
router.post('/api/messenger/send-message',authMiddleware, async(req, res) => {
    const {senderName,reseverId,message} = req.body
    const senderId = req.myId;
        try {
            const insertMessage = await messageModel.create({
                senderId : senderId,
                senderName : senderName,
                reseverId : reseverId,
                message : {
                     text : message,
                     image : ''
                }
            })
            res.status(201).json({
                success : true, 
                message : insertMessage
            })
        } catch (error) {
            
        }
});
// messageGet controller
router.get('/api/messenger/get-message/:id',authMiddleware, async(req, res) => {
    const myId = req.myId;
    const fdId = req.params.id

    try {
        let getAllMessage = await messageModel.find({
            $or : [{
                $and: [{
                    senderId : {
                        $eq: myId
                    }
                },{
                    reseverId : {
                        $eq : fdId
                    }
                }]
            },{
                $and : [{
                    senderId : {
                        $eq : fdId
                    } 
                },{
                    reseverId : {
                        $eq : myId
                    }
                }]
            }]
        })

        // getAllMessage = getAllMessage.filter(m=>m.senderId === myId && m.reseverId === fdId || m.reseverId === myId && m.senderId === fdId);

        res.status(200).json({
            success: true,
            message: getAllMessage
        })

        // console.log(getAllMessage); // pega todas as mensagens

    } catch (error) {
        res.status(500).json({
            error: {
                errorMessage: 'Internal Server Error'
            }
        })
    }

    // console.log(myId); // funciona
    // console.log(req.params.id); // funciona
});
// ImageMessageSend controller
router.post('/api/messenger/image-message-send',authMiddleware, async(req, res) => {
    const senderId = req.myId;
    const form = formidable();

    form.parse(req, async (err, fields, files) => {

        const{
            senderName,
            reseverId
        } = fields;

        if(Object.keys(files).length === 0) {
            res.status(400).json({
                error: {
                    errorMessage: 'Please provide image'
                }
            })
        }
        if(Object.keys(files).length !== 0){
            const size = files.image.size;
            const type = files.image.mimetype;
            const imageSize = (size/1000)/1000;
            const imageType = type.split('/')[1];
            // console.log(imageType);
            if(imageType !== 'png' && imageType !== 'jpg' && imageType !== 'jpeg' && imageType !== 'gif'){
                // console.log("ok");
                res.status(500).json({
                    error : {
                        errorMessage: 'Image upload failed!' 
                    }
                })
            }
            else if(imageSize>8){
                res.status(500).json({
                    error : {
                        errorMessage: 'please provide your image less then 8 MB' 
                    }
                })
            }
            else {
                cloudinary.config({
                    cloud_name: process.env.CLOUD_NAME,
                    api_key: process.env.API_KEY,
                    api_secret: process.env.API_SECRET,
                    secure: true
                });
                try {
                    const result = await cloudinary.uploader.upload(files.image.filepath);
                    // console.log(result.url);
                    const insertMessage = await messageModel.create({
                        senderId: senderId,
                        senderName: senderName,
                        reseverId: reseverId,
                        message: {
                            text: '',
                            image: result.url
                        }
                    })
                    res.status(201).json({
                        success: true,
                        message: insertMessage
                    })
                } catch (error) {
                    res.status(500).json({
                        error: {
                            errorMessage: 'Internal server error 2'
                        }
                    })
                }
            }
        }
    })
});
// messageSeen controller
router.post('/api/messenger/seen-message',authMiddleware, async(req, res) => {
    const messageId = req.body._id;

    await messageModel.findByIdAndUpdate(messageId, {
        status : 'seen'
    })
    .then(() => {
        res.status(200).json({
            success : true
        })
    }).catch(() => {
        res.status(500).json({
            error : {
                errorMessage : 'Internal Server Error'
            }
        })
    })

});

router.post('/api/messenger/delivared-message',authMiddleware, async(req, res) => {
    const messageId = req.body._id;

    await messageModel.findByIdAndUpdate(messageId, {
        status : 'delivared'
    })
    .then(() => {
        res.status(200).json({
            success : true
        })
    }).catch(() => {
        res.status(500).json({
            error : {
                errorMessage : 'Internal Server Error'
            }
        })
    })
});

module.exports = router;