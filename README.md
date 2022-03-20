# ihd-task
# Prerequisite
##### 1. NodeJS
##### 2. MSSQL Server

#  Steps to run the project 
## 1. RUN console command - npm install
## 2. Change the SQL server configuration details and port(if not vacant)
## 3. Run SQL script to create DB and insert few records, in SSMS
## 4. RUN console Command - npm start
## 5. Test the below sample Request and Responce as given below 


# Sample Request and Responce

## Add Patients
##### -- Method - POST
#### URL : http://localhost:3000/patients/add
#### -- Request Data -
{
    "first_name" : "first_name",
    "last_name" : "first_name",
    "email" : "first_name",
    "primary_contact_number" : "first_name",
    "secondary_contact_number" : "first_name",
    "emergency_contact_first_name" : "first_name",
    "emergency_contact_relationship" : "first_name",
    "emergency_contact_number" : "first_name",
    "address" : "first_name",
    "address_line2" : "first_name",
    "city" : "first_name",
    "county" : "first_name",
    "state" : "first_name",
    "country" : "first_name",
    "created_by" : "first_name"
}

## Get all Patients
#### -- Method - GET
#### URL : http://localhost:3000/patients/getAll

## Get all Patients by id
#### -- Method - GET
#### URL : http://localhost:3000/patients/getById/1
Res : {"statusCode":200,"error":"","message":"",
"data":[{"ID":1,"FIRST_NAME":"DEV","LAST_NAME":"CHAUHAN","EMAIL":"devendra103@gmail.com",
"PRIMARY_CONTACT_NUMBER":"2013567349","SECONDARY_CONTACT_NUMBER":"","EMERGENCY_CONTACT_FIRST_NAME":"E_FIRSTNAME",
"EMERGENCY_CONTACT_LAST_NAME":"E_LASTNAME","EMERGENCY_CONTACT_RELATIONSHIP":"E_RELATIONS",
"EMERGENCY_CONTACT_NUMBER":"2013567349","ADDRESS":"Sanford Pl","ADDRESS_LINE2":"Apt - 2",
"CITY":"Jersey City","STATE":"New Jersey","COUNTY":"Hudson","COUNTRY":"US","CREATED_DATE":"2022-03-15T00:27:03.063Z",
"CREATED_BY":"dchauhan@gmail.com","UPDATED_DATE":"2022-03-15T00:27:03.063Z","UPDATED_BY":"dchauhan@gmail.com"}]}

## Delete Visits history 
#### -- Method - GET
#### URL : http://localhost:3000/patients/visits/deleteById/12
Res : {"statusCode":200,"error":"","message":"Record has been deleted","data":[],"affectedData":[1]}
