const { sign } = require('jsonwebtoken');
const {addUserQuery} = require('../database/queires');

const addUser= (req, res)=>{
    addUserQuery(req.body)
    .then()
}