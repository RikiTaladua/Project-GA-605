// // load the env consts
// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");


// // session middleware
// const session = require("express-session");
// const passport = require("passport");
// const methodOverride = require("method-override");
// const MongoStore = require("connect-mongo");

// const indexRoutes = require("./routes/index");
// const flightsRouter = require("./routes/flights");
// const commentsRouter = require("./routes/comments");
// const pilotsRouter = require("./routes/pilots");

// // create the Express app
// const app = express();

// // connect to the MongoDB with mongoose
// require("./config/database");
// // configure Passport
// require("./config/passport");

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


// // mount the session middleware
// app.use(
//   session({
//     store: MongoStore.create({
//       mongoUrl: process.env.DATABASE_URL,
//     }),
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// // Add this middleware BELOW passport middleware
// app.use(function (req, res, next) {
//   res.locals.user = req.user; // assinging a property to res.locals, makes that said property (user) availiable in every
//   // single ejs view
//   next();
// });

// // mount all routes with appropriate base paths
// app.use("/", indexRoutes);
// app.use("/flights", flightsRouter);
// app.use("/", commentsRouter);
// app.use("/", pilotsRouter);

// // invalid request, send 404 page
// app.use(function (req, res) {
//   res.status(404).send("PAGE NOT FOUND!");
// });

// module.exports = app;


// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const passport = require("passport");
// const methodOverride = require("method-override");
// const MongoStore = require("connect-mongo");

// const indexRoutes = require("./routes/index");
// const flightsCtrl = require("./controllers/flights"); // Corrected import path for flightsCtrl
// const commentsRouter = require("./routes/comments");
// const pilotsRouter = require("./routes/pilots");

// const app = express();

// require("./config/database");
// require("./config/passport");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(
//   session({
//     store: MongoStore.create({
//       mongoUrl: process.env.DATABASE_URL,
//     }),
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function (req, res, next) {
//   res.locals.user = req.user;
//   next();
// });

// app.use("/", indexRoutes);
// app.use("/flights", flightsCtrl); // Use the flightsCtrl directly instead of flightsRouter
// app.use("/", commentsRouter);
// app.use("/", pilotsRouter);

// app.use(function (req, res) {
//   res.status(404).send("PAGE NOT FOUND!");
// });

// module.exports = app;
// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const passport = require("passport");
// const methodOverride = require("method-override");
// const MongoStore = require("connect-mongo");

// const indexRoutes = require("./routes/index");
// const flightsCtrl = require("./routes/flights"); // Corrected import path for flightsCtrl
// const commentsRouter = require("./routes/comments");
// const pilotsRouter = require("./routes/pilots");

// const app = express();

// require("./config/database");
// require("./config/passport");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(
//   session({
//     store: MongoStore.create({
//       mongoUrl: process.env.DATABASE_URL,
//     }),
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function (req, res, next) {
//   res.locals.user = req.user;
//   next();
// });

// app.use("/", indexRoutes);
// app.use("/flights", flightsCtrl); // Use the flightsCtrl directly instead of flightsRouter
// app.use("/", commentsRouter);
// app.use("/", pilotsRouter);

// app.use(function (req, res) {
//   res.status(404).send("PAGE NOT FOUND!");
// });

// module.exports = app;
// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const passport = require("passport");
// const methodOverride = require("method-override");
// const MongoStore = require("connect-mongo");

// const indexRoutes = require("./routes/index");
// const flightsRouter = require("./routes/flights"); // Corrected import path for flightsRouter
// const commentsRouter = require("./routes/comments");
// const pilotsRouter = require("./routes/pilots");

// const app = express();

// require("./config/database");
// require("./config/passport");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(
//   session({
//     store: MongoStore.create({
//       mongoUrl: process.env.DATABASE_URL,
//     }),
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function (req, res, next) {
//   res.locals.user = req.user;
//   next();
// });

// app.use("/", indexRoutes);
// app.use("/flights", flightsRouter); // Use the flightsRouter instead of flightsCtrl
// app.use("/", commentsRouter);
// app.use("/", pilotsRouter);

// app.use(function (req, res) {
//   res.status(404).send("PAGE NOT FOUND!");
// });

// module.exports = app;

require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");

const indexRoutes = require("./routes/index");
const flightRoutes = require("./routes/flights"); // Update import name to flightRoutes
const commentRoutes = require("./routes/comments"); // Rename commentsRouter to commentRoutes
const pilotRoutes = require("./routes/pilots"); // Rename pilotsRouter to pilotRoutes

const app = express();

require("./config/database");
require("./config/passport");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", indexRoutes);
app.use("/flights", flightRoutes); // Update the route handler to flightRoutes
app.use("/comments", commentRoutes); // Update the route handler to commentRoutes
app.use("/pilots", pilotRoutes); // Update the route handler to pilotRoutes

app.use(function (req, res) {
  res.status(404).send("PAGE NOT FOUND!");
});

module.exports = app;

