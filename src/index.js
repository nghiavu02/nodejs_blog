const express = require("express");
const app = express();
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const port = 3000;
const route = require("./routes/index");
//import and connect db
const db = require("./config/db/index");
db.connect();
//static file
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//handlebars engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
app.use(methodOverride("_method"));
//router
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
