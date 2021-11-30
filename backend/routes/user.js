const express = require('express')
const modelUser = require('../models/user')
const routerUser = express.Router()


routerUser.get('/users/username/:username', async(req, res) =>{
    const { username } = req.params
    try{
        const user = await modelUser.getUser(username)
        if(user !== null){
            return res.json({
                'result': 'succes',
                'user': user 
            })
        }

        return res.json({
            'result': 'failure',
            'message': `${username} not found`
        })
    } catch (error) {
        return res.json({
            'result': 'failure',
            'message': `user ${username} not found`
        })
    }
})


module.exports = routerUser