const mssql = require("../connections/mssql_connector");


const getAll = async function getAll(){
    let q = `SELECT * FROM IHD.DBO.VISITS;`
    let result = await new mssql.Request().query(q);
    let { recordset } = result;
    return {statusCode : (recordset.length > 0 )?200:404, error:'',message:'', data:recordset?recordset:[]};
}

const getById = async function getById(input){
    let {id} = input
    let q = `SELECT * FROM IHD.DBO.VISITS WHERE ID = ${id};`
    let result = await new mssql.Request().query(q);
    let { recordset } = result;
    return {statusCode : (recordset.length > 0) ?200:404, error:'',message:'', data:recordset?recordset:[]};
}

module.exports = {
    getAll,
    getById
}