// console.log("Express project");

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();

connectDb();
const app = express();

// const port = 5000;
const port = process.env.PORT || 5000;

// for passing the client body parser.
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// app.get("/api/contacts", (req, res) => {
//   // res.send("Get all contact");

//   // message in json  format
//   res.json({ message: "Get all contacts" });
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
