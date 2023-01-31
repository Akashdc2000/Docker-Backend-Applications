
const psql=require('../../db_connections/postgresql')


//Get All 
const getAllTeachers=(request,response)=>{
    let  QUERY= 'select * from teacher order by tid'
    psql.query(QUERY,(error,result)=>{
        if(error)
            throw error
        else if(result.rowCount<=0)
            response.send("No records Found Table is Empty..")
        else
            response.send(result.rows)
    })   
}

//Add new 
const addNewTeacher = (request, response) => {
    const {tname,age}= request.body;
    let QUERY = 'insert into teacher (tname,age) values($1,$2) returning *';
    psql.query(QUERY, [tname,age], (error, result) => {
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


//get by Tid
const getTeacherById = (request, response) => {

    const tid = parseInt(request.params.tid)
    let QUERY = 'select * from teacher where tid=$1';
    psql.query(QUERY, [tid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rows.length <= 0) {
            response.status(500).json({
                msg: "Teachers ID is Not Found...",
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


//Update  Deatils 
const updateTeacherById = (request, response) => {

    const { tname,age } = request.body;
    const tid = parseInt(request.params.tid)
    let QUERY = 'update teacher set tname=$1,age=$2 where tid=$3';
    psql.query(QUERY, [tname,age, tid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rowCount <= 0) {
            response.status(500).json({
                msg: "Teacher ID is Not Found...",
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
const deleteTeacherById = (request, response) => {

    const tid = parseInt(request.params.tid)
    let QUERY = 'delete from teacher where tid=$1';
    psql.query(QUERY, [tid], (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        else if (result.rowCount <= 0) {
            response.status(500).json({
                msg: "Teacher ID is Not Found...",
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


module.exports={
    getAllTeachers,addNewTeacher,deleteTeacherById,updateTeacherById,getTeacherById
}