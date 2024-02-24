const express=require('express')
const registerUser = require('../controller/registerControl')
const userLogin = require('../controller/loginController')
const createEvent = require('../controller/createEvent')
const getEvents = require('../controller/getAllEvents')
const Token = require('../middleware/Token')
const deleteEvent = require('../controller/deleteEvents')
const singleEvent = require('../controller/getSingleEvent')
const middleware=[Token]
const router=express.Router()

router.route('/events/:id').get(singleEvent)
router.route('/register').post(registerUser)
router.route('/login').post(userLogin)
router.route('/events').post(middleware,createEvent)
router.route('/events').get(middleware,getEvents) 
router.route('/delete/:id').delete(deleteEvent) 

module.exports=router