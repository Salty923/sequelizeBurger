var connection = require("./connection.js");

var Orm ={
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err){
                throw err;
            } 
            callback(result);
        });
    },
    insertOne: function (burger_name, callback) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES(?,?)";
        
        connection.query(queryString,[burger_name,false],
             function(err, result){
                 if (err){
                     throw err;
                 } 
                 callback(result);
        });
    },
    updateOne: function (id, callback) {
        // change burger devoured to true     
        connection.query('UPDATE burgers SET ? WHERE ?',
            [{ devoured: true }, { id: id }], function (err, result) {
                if (err) {
                    throw err;
                }
                callback(result);
            });
    },
    deleteOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}


module.exports = Orm;