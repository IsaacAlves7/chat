import Conversation from '../model/conversation.js';

export const newConversation = async (req, res) => {
    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;

    try{
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        res.status(200).json('new conversation added successfully!');

    } catch (error) {
        res.status(500).json(error);
    }
}