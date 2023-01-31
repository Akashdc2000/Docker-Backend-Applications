//Add new Employee to DB

const conn=require('../models/DBConnection')

const addNewEmployee = (request, response) => {
    const { ename, email, gender } = request.body;
    let QUERY = 'insert into employees (ename,email,gender) values($1,$2,$3) returning *';
    conn.query(QUERY, [ename, email, gender], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.status(200).json({
            msg: "Data Inserted Succesfully...",
            data: result.rows[0]
        })
    })
}

//get all emp details
const getAllEmployee = (request, response) => {

    let QUERY = 'select * from employees order by empid';
    conn.query(QUERY, (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rowCount <= 0) {
            response.send("No records in table")
        }
        else {
            response.status(200).json({
                msg: "Data of Employee...",
                data: result.rows
            })

        }
    })
}


//get Emp by ID
const getEMPById = (request, response) => {

    const empid = parseInt(request.params.empid)
    let QUERY = 'select * from employees where empid=$1';
    conn.query(QUERY, [empid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rows.length <= 0) {
            response.status(500).json({
                msg: "Emplpoyee ID is Not Found...",
            })

        }
        else {
            // response.status(200).json({
            //     msg: "Data of Employee...",
            //     data: result.rows
            // })
            response.send(result.rows)

        }

    })
}


//Update EMP Deatils 
const updateEMPById = (request, response) => {

    const { ename, email, gender } = request.body;
    const empid = parseInt(request.params.empid)
    let QUERY = 'update employees set ename=$1,email=$2,gender=$3 where empid=$4';
    conn.query(QUERY, [ename, email, gender, empid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rowCount <= 0) {
            response.status(500).json({
                msg: "Emplpoyee ID is Not Found...",
            })
        }
        else {
            // response.status(200).json({
            //     msg: "Data of Employee...",
            //     data: result.rows
            // })
            response.send(result.rowCount + "  Records Updated")

        }

    })
}



//Delete EMP Deatils 
const deleteEMPById = (request, response) => {

    const empid = parseInt(request.params.empid)
    let QUERY = 'delete from employees where empid=$1';
    conn.query(QUERY, [empid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rowCount <= 0) {
            response.status(500).json({
                msg: "Emplpoyee ID is Not Found...",
            })
        }
        else {
            // response.status(200).json({
            //     msg: "Data of Employee...",
            //     data: result.rows
            // })
            response.send(result.rowCount + "  Record Deleted")

        }

    })
}

module.exports = {
    addNewEmployee, getAllEmployee, getEMPById, updateEMPById, deleteEMPById
}