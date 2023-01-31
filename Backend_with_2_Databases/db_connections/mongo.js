const MongoClient = require('mongodb').MongoClient
let mongodatabase;


 MongoClient.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true }, (error, result) => {
        if (error)
            throw error
        else {
            console.log("Mongo Database Connected...")
        }
        mongodatabase = result.db('students')
    })


module.exports = mongodatabase;
