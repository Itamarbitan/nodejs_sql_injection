const POST = 3000;
const express = require('express');
const sql = require('./sql_connection')
const app = express();
app.set('view engine', 'ejs')
const path = require('path');
const staticWebsite = path.join(__dirname , './views')

app.use(express.static(staticWebsite))


bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));




app.post('' , (req , res) => {
    console.log(req.body);

    let sqlquery = `INSERT INTO Persons VALUES (NULL, "${req.body.email}", "${req.body.password}");`

    sql.query( sqlquery , function (error, results) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.render('index');
      });

});




app.get('' , (req , res) => {
    res.render('index')}
);

app.get('/table' , (req , res) => {
    sql.query('SELECT * FROM Persons', function(error, results){
        if (error) throw error;
        console.log('the solution is' , results);
        res.render('table' , {results : results});

    })
});



app.listen(POST , () => console.log('the app is listening to port 3000!!'));


