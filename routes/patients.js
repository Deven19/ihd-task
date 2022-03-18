const express = require('express');
const router = express.Router();
const xss = require('xss');
const data = require("../data");
const patientsData = data.patients;
const inputValidate = require('../utils/inputValidate');

router.get('/getAll', async (req, res) => {
    try {
        let result = await patientsData.getAll();
        res.status(result.statusCode?result.statusCode:200).send(result);
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
});


router.get('/getById/:id', async (req, res) => {
    try {
        console.log(Number.isInteger(Number(xss(req.params.id))))
        let isValidID = await inputValidate.variableSanityCheck((req.params.id),"number","ID",1)
        let errors = [];
        
        if (!isValidID.result) errors.push(isValidID.message)
        if(errors.length>0){
            res.status(isValidID.status?isValidID.status:400).send({errors : errors, result:[], data:[]});
            return;
        }

        let input = {
            id:req.params.id
        }

        let result = await patientsData.getById(input);
        res.status(result.statusCode?result.statusCode:200).send(result);
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
})

router.post('/addNew', async (req, res) => {
    try {
        res.send({});
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
})

router.post('/delete', async (req, res) => {
    try {
        res.send({});
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
})

module.exports = router;