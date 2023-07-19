//jshint esversion:6

const express = require("express");
const ejs = require("ejs");

const app = express();

const port = 3000;

app.set('view engine','ejs');
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
      // To set two dates to two variables
      var chrzcinyDate = new Date("09/10/2023");
      var teraz = new Date();
      // To calculate the time difference of two dates
      var DifferenceInTime = chrzcinyDate.getTime() - teraz.getTime();
      // To calculate the no. of days between two dates
      var DifferenceInDays = Math.floor(DifferenceInTime / (1000 * 3600 * 24));
  res.render('home', {
    chrzcinyDate: chrzcinyDate,
    DifferenceInDays: DifferenceInDays,
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyBq9WaO_mdbHbIwCIzwWcgCl2o9cXQUPwU"
  });
})

app.listen(process.env.PORT || port, function() {
    console.log("Server run on port "+port);
  });