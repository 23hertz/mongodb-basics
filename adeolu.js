
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adeolu:f2Xa3rsu7KLesDr@cluster0-70eqi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{useUnifiedTopology:true},{ useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  //console.log('Database was created by adeolu');
  con.query("CREATE DATABASE adeolu", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  // perform actions on the collection object
  client.close();
});
*/


const mongo = require('mongodb');
const url = "mongodb+srv://adeolu:f2Xa3rsu7KLesDr@cluster0-70eqi.mongodb.net/test?retryWrites=true&w=majority";
// "mongodb://localhost:27017";

mongo.connect(url, {useUnifiedTopology:true},{useNewUrlParser: true}, (err, db) => {
        if(err) {
           console.log(err);
           process.exit(0);
        }
        console.log('database created!');

        
        db.close();
});