const express = require("express");
const router = express.Router();
const healthRoute = require("./health/healthRoute");
const sortRoute= require("./shortUrl/urlShortRoute")
const defaultRoutes = [
  {
    path: "/check",
    route: healthRoute,
  },
  {
    path: "/url",
    route: sortRoute,
  },
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
