//lấy course từ model
const Course = require("../models/course");
const { MongoseMultiple } = require("../../util/mongoose");
const course = require("../models/course");
class CourseController {
  //[GET]  /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: MongoseMultiple(course),
        });
      })
      .catch(next);
  }
  //[GET]   /courses/create
  //hiển thị form tạo khóa học
  create(req, res, next) {
    res.render("courses/create");
  }
  //[POST]  /courses/store
  //nhận dữ liệu từ form tạo để xử lý ở đây
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((erro) => {});
  }
  edit(req, res, next) {
    //[GET] /courses/:id/edit
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: MongoseMultiple(course),
        })
      )
      .catch(next);
  }
  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);

    Course.deleteOne
  }

}

module.exports = new CourseController();
