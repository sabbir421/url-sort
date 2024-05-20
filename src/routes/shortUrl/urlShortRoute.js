const express = require("express");
const { shortUrl, getSortUrl } = require("../../controller/shortUrlController");

const router = express.Router();

router.post("/short", shortUrl);
router.get("/short/:code",getSortUrl)
module.exports = router;
