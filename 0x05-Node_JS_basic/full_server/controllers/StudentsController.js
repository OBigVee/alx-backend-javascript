import readDatabase from "full_server/utils"

class StudentsController{
    static getAllStudents(request, response){
        const db = process.argv.length > 2 ? process.argv[2] : '';
        let statusCode = 200;
        console.log("This is the list of our students")
        readDatabase(db).then((report)=>{
            return (report.toString());
        }).catch((err)=>{
            statusCode = 500;
            return (`${statusCode} ${err}`)
        })
    }
}

module.exports = StudentsController