import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let startagain = true

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
  

});

app.post("/submit", (req, res) => {
  const total = req.body["fName"].length + req.body["lName"].length;
  res.render('index.ejs', { numberOfLetters: total });
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
