const mongo = require('mongodb');
const url = "mongodb+srv://adeolu:f2Xa3rsu7KLesDr@cluster0-70eqi.mongodb.net/test?retryWrites=true&w=majority";
// "mongodb://localhost:27017";

mongo.connect(url, {useUnifiedTopology:true},{useNewUrlParser: true}, (err, db) => {
        if(err) {
           console.log(err);
           process.exit(0);
        }
        console.log('database created!');

        var dbo = db.db("mydb");
        dbo.createCollection("interns", function(err, res) {
          if (err) throw err;
          console.log("Interns collections created");

        
        db.close();
});

});