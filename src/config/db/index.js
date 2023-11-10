const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_edcucation", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Kết nối db thành công");
  } catch (error) {
    console.log("kết nối db thất bại");
  }
}

module.exports = { connect };
