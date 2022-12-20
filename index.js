// console.log("Hello there from Manish!");
const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(201).send("<h1>Hello World!</h1>");
});

// Instagram end point
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "iammanishgupta",
    followers: 66,
    follows: 100,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  //Here we can pass the data as res.status(200).json({instaSocial}) and also whole of the object as well

  res.status(200).json(instaSocial);
});

// For facebook end point
app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "iammanishguptaPage",
    followers: 23,
    follows: 112,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  //Here we can pass the data as res.status(200).json({instaSocial}) and also whole of the object as well

  res.status(200).json(instaSocial);
});

// LinkedIn endpoint
app.get("/api/v1/linkedIn", (req, res) => {
  const instaSocial = {
    username: "iammanishguptaOfficial",
    followers: 50,
    follows: 100,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  //Here we can pass the data as res.status(200).json({instaSocial}) and also whole of the object as well

  res.status(200).json(instaSocial);
});

// Other ports
// If other parameters are present as well ("/api/v1/:token/:id") they can be obtained through req.params.id
// The postion where the route has been defined also plyas an important role, if the below code had been mentioned ath the top then
// with each searched the topmost route would have been accessed all the time

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ params: req.params.token });
});
app.listen(PORT, () => {
  console.log(`Console is running at Port ${PORT} `);
});
