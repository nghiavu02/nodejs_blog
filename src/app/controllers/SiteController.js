const Course = require("../models/course");
const { MongooseMultiples } = require("../../util/mongoose");
class SiteController {
  //[GET]  /
  index(req, res, next) {
    // res.render('home');
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: MongooseMultiples(courses) });
      })
      .catch((error) => {
        next(error);
      });
  }
}

module.exports = new SiteController();
