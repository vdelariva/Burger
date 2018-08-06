require ("./connection.js")

// SQL commands

var orm = {
  selectAll: function(table, cb) {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, burger_name, cb) {
    var queryString = `INSERT INTO ${table} (burger_name) VALUES (${burger_name};`;
    connection.query(queryString, function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, colVals, condition, cb) {
    var queryString = `UPDATE ${table} SET ${objToSql(colVals)} WHERE ${condition}`
  
    connection.query(queryString, function(err,result){
      if (err) throw err;
      cb(result);
    });
  }
}
// ____________________________________________________________________________________

function objToSql(ob) {
  // Convert object to SQL query format
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(`${key} = ${ob[key]}`);
		}
  }
  
	return arr.toString();
}
// ____________________________________________________________________________________
 module.exports = orm;