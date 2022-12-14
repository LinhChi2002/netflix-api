const authRoute = require("../routes/auth.route");
const userRoute = require("../routes/user.route");
const movieRoute = require("../routes/movie.route");
const listRoute = require("../routes/list.route");

const routes = (app) => {
  app.use("/auth", authRoute);
  app.use("/users", userRoute);
  app.use("/movies", movieRoute);
  app.use("/lists", listRoute);
};

module.exports = routes;
