// jshint esversion:6

require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var con = require("./connection");
const { connect, query } = require("./connection");
const { redirect } = require("express/lib/response");
const { setCharset } = require("express/lib/utils");


app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html")
});

app.post("/login", function (req, res) {



    var Email = req.body.Email;
    var Password = req.body.Password;




    con.query("SELECT * FROM login WHERE Email = ? and Password = ?", [Email, Password], function (error,results, fields) {
        if (results.length > 0) {


            res.redirect('products')
        
        } else {


            res.redirect("/login");
        }

        
    })
});



app.get("/admin", function (req, res) {

    
    var sql = "SELECT* FROM products ORDER BY Prod_name;";

    con.query(sql, function (error, result) {
        if (error) throw error;
        res.render("admin", { products: result });
    });
});


app.get("/products", function (req, res) {
    con.connect(function (error) {
        if (error) console.log(error);

        var sql = "select * from products";

        

        con.query(sql, function (error, result) {
            if (error) throw error;
            res.render("products", { products: result });
        })

    });

});

app.get('/logout', function(req,res){
    res.redirect("login")
    
});




const port = 3000 || process.env.PORT;
app.listen(port, function () {
    console.log(`server is up and running on port ${port}.`);
  });