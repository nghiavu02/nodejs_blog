module.exports = {
  MongooseMultiples: function (courses) {
    return courses.map((course) => course.toObject());
  },
  MongoseMultiple: function (course) {
    return course ? course.toObject() : course;
  },
};
