const mongoose = require("mongoose");
const User = require("../models/user");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const me = new User({
//   name: "Nikhil",
//   age: 24,
//   password: "Nikhil@pass1",
//   email: "abcd@def.com",
// });

// me.save()
//   .then(() => {
//     console.log("me:===>", me);
//   })
//   .catch((error) => {
//     console.log("error:===", error);
//   });
// mongoose
//   .connect("mongodb://127.0.0.1:27017/task-manager-api", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));
