const { model } = require("mongoose");
const Course = require("../models/course");
const { MongooseMultiples } = require("../../util/mongoose");
const course = require("../models/course");
class MeController {
  //[GET]   /me/stored/courses
  index(req, res, next) {
    Course.find({}).then((courses) => {
      res.render("me/stored-courses", {
        courses: MongooseMultiples(courses),
      });
    });
  }
}

module.exports = new MeController();
