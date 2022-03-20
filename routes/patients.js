const express = require('express');
const router = express.Router();
const xss = require('xss');
const data = require("../data");
const patientsData = data.patients;
const inputValidate = require('../utils/inputValidate');



router.post('/add', async (req, res) => {
    try {
        let errors = [];
        let isValidFirstName = await inputValidate.variableSanityCheck((xss(req.body.first_name)),"string","First Name");
        let isValidLastName = await inputValidate.variableSanityCheck((xss(req.body.last_name)),"string","Last Name");
        let isValidEmail = await inputValidate.variableSanityCheck((xss(req.body.email)),"string","Email");
        let isValidPrimaryContactNumber= await inputValidate.variableSanityCheck((xss(req.body.primary_contact_number)),"string","Primary Contact Number");
        let isValidSecondaryContactNumber = await inputValidate.variableSanityCheck((xss(req.body.secondary_contact_number)),"string","Secondary Contact Number");
        let isValidEmergencyContactFirstName = await inputValidate.variableSanityCheck((xss(req.body.emergency_contact_first_name)),"string","Emergency Contact First Name");
        let isValidEmergencyContactRelationship = await inputValidate.variableSanityCheck((xss(req.body.emergency_contact_relationship)),"string","Emergency Contact Relationship");
        let isValidEmergencyContactNumber = await inputValidate.variableSanityCheck((xss(req.body.emergency_contact_number)),"string","Emergency Contact Number");
        let isValidAddress = await inputValidate.variableSanityCheck((xss(req.body.address)),"string","Address");
        let isValidAddressLine2 = await inputValidate.variableSanityCheck((xss(req.body.address_line2)),"string","Address Line 2");
        let isValidCity = await inputValidate.variableSanityCheck((xss(req.body.city)),"string","City");
        let isValidCounty = await inputValidate.variableSanityCheck((xss(req.body.county)),"string","County");
        let isValidState = await inputValidate.variableSanityCheck((xss(req.body.state)),"string","State");
        let isValidCountry = await inputValidate.variableSanityCheck((xss(req.body.country)),"string","Country");
        let isValidCreatedBy = await inputValidate.variableSanityCheck((xss(req.body.created_by)),"string","Created By");

        
        if (!isValidFirstName.result) errors.push(isValidFirstName.message);
        if (!isValidLastName.result) errors.push(isValidLastName.message);
        if (!isValidEmail.result) errors.push(isValidEmail.message);
        if (!isValidPrimaryContactNumber.result) errors.push(isValidPrimaryContactNumber.message);
        if (!isValidSecondaryContactNumber.result) errors.push(isValidSecondaryContactNumber.message);
        if (!isValidEmergencyContactFirstName.result) errors.push(isValidEmergencyContactFirstName.message);
        if (!isValidEmergencyContactRelationship.result) errors.push(isValidEmergencyContactRelationship.message);
        if (!isValidEmergencyContactNumber.result) errors.push(isValidEmergencyContactNumber.message);
        if (!isValidAddress.result) errors.push(isValidAddress.message);
        if (!isValidAddressLine2.result) errors.push(isValidAddressLine2.message);
        if (!isValidCity.result) errors.push(isValidCity.message);
        if (!isValidCounty.result) errors.push(isValidCounty.message);
        if (!isValidState.result) errors.push(isValidState.message);
        if (!isValidCountry.result) errors.push(isValidCountry.message);
        if (!isValidCreatedBy.result) errors.push(isValidCreatedBy.message);

        if(errors.length>0){
            res.status(isValidFirstName.status?isValidFirstName.status:400).send({errors : errors, result:[], data:[]});
            return;
        }

        let input = {
            firstName:isValidFirstName.value,
            lastName:isValidLastName.value,
            email:isValidEmail.value,
            primaryContactNumber:isValidPrimaryContactNumber.value,
            secondaryContactNumber:isValidSecondaryContactNumber.value,
            emergencyContactFirstName:isValidEmergencyContactFirstName.value,
            emergencyContactRelationship:isValidEmergencyContactRelationship.value,
            emergencyContactNumber:isValidEmergencyContactNumber.value,
            address:isValidAddress.value,
            addressLine2:isValidAddressLine2.value,
            city:isValidCity.value,
            county:isValidCounty.value,
            state:isValidState.value,
            country:isValidCountry.value,
            createdBy:isValidCreatedBy.value

        }

        let result = await patientsData.addPatient(input);
        res.status(result.statusCode?result.statusCode:200).send(result);
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
});

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
        //console.log(Number.isInteger(Number(xss(req.params.id))))
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


router.get('/visits/deleteById/:id', async (req, res) => {
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

        let result = await patientsData.deleteById(input);
        res.status(result.statusCode?result.statusCode:200).send(result);
    } catch (e) {
        res.status(e.statusCode?e.statusCode:500).json({error: e});
    }
})



module.exports = router;