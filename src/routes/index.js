const siteRouter = require("./site");
const couresRouter = require("./courses");
const meRouter = require("./me");
function route(app) {
  // /courese
  app.use("/courses", couresRouter);
  app.use("/me", meRouter);
  // / site
  app.use("/", siteRouter);
}

module.exports = route;
