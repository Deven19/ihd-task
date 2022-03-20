const mssql = require("../connections/mssql_connector");


const getAll = async function getAll(){
    let q = `SELECT * FROM IHD.DBO.PATIENTS;`
    let result = await new mssql.Request().query(q);
    let { recordset } = result;
    return {statusCode : (recordset.length > 0 )?200:404, error:'',message:'', data:recordset?recordset:[]};
}

const getById = async function getById(input){
    let {id} = input
    let q = `SELECT * FROM IHD.DBO.PATIENTS WHERE ID = ${id};`
    let result = await new mssql.Request().query(q);
    let { recordset } = result;
    return {statusCode : (recordset.length > 0) ?200:404, error:'',message:'', data:recordset?recordset:[]};
}

const deleteById = async function getById(input){
    let {id} = input
    let q = `DELETE FROM IHD.DBO.VISITS WHERE ID = ${id};`
    let result = await new mssql.Request().query(q);
    let { recordset,rowsAffected } = result;
    return {statusCode : ((recordset && recordset.length > 0) || (rowsAffected && rowsAffected.length > 0)) ?200:404, error:'',message:((rowsAffected && rowsAffected.length > 0))?'Record has been deleted':'Record not found', data:recordset?recordset:[], affectedData :rowsAffected?rowsAffected:[]};
}


const addPatient = async function addPatient(input){
    let {
        firstName,
        lastName,
        email,
        primaryContactNumber,
        secondaryContactNumber,
        emergencyContactFirstName,
        emergencyContactRelationship,
        emergencyContactNumber,
        address,
        addressLine2,
        city,
        county,
        state,
        country,
        createdBy
    } = input;
    let q = `INSERT INTO [dbo].[PATIENTS]
            ([FIRST_NAME]
            ,[LAST_NAME]
            ,[EMAIL]
            ,[PRIMARY_CONTACT_NUMBER]
            ,[SECONDARY_CONTACT_NUMBER]
            ,[EMERGENCY_CONTACT_FIRST_NAME]
            ,[EMERGENCY_CONTACT_LAST_NAME]
            ,[EMERGENCY_CONTACT_RELATIONSHIP]
            ,[EMERGENCY_CONTACT_NUMBER]
            ,[ADDRESS]
            ,[ADDRESS_LINE2]
            ,[CITY]
            ,[COUNTY]
            ,[STATE]
            ,[COUNTRY]
            ,[CREATED_DATE]
            ,[CREATED_BY]
            ,[UPDATED_DATE]
            ,[UPDATED_BY])
        VALUES
            ('${firstName}'
            ,'${lastName}'
            ,'${email}'
            ,'${primaryContactNumber}'
            ,'${secondaryContactNumber}'
            ,'${emergencyContactFirstName}'
            ,'${emergencyContactFirstName}'
            ,'${emergencyContactRelationship}'
            ,'${emergencyContactNumber}'
            ,'${address}'
            ,'${addressLine2}'
            ,'${city}'
            ,'${county}'
            ,'${state}'
            ,'${country}'
            ,SYSDATETIME()
            ,'${createdBy}'
            ,SYSDATETIME()
            ,'SYSTEM');`
    let result = await new mssql.Request().query(q);
    let { recordset,rowsAffected } = result;
    return {statusCode : ((recordset && recordset.length > 0) || (rowsAffected && rowsAffected.length > 0)) ?200:404, error:'',message:((rowsAffected && rowsAffected.length > 0))?'Record has been deleted':'Record not found', data:recordset?recordset:[], affectedData :rowsAffected?rowsAffected:[]};
}
module.exports = {
    getAll,
    getById,
    deleteById,
    addPatient
}