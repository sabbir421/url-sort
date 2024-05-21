const errorResponseHandler = require("../utils/errorResponseHandler");
const validUrl = require("valid-url");
const shortid = require("shortid");
const {
  getUrl,
  getUrlByCode,
  createShortUrl,
} = require("../model/shortUrlModel");
exports.shortUrl = async (req, res) => {
  try {
  
    const { originalUrl } = req.body;
    console.log(originalUrl);
    if (!validUrl.isUri(originalUrl)) {
      return res.status(400).json("Invalid original URL");
    }
    let url = await getUrl(originalUrl);
    if (url) {
      return res.response.success(url, "short url");
    } else {
      const urlCode = shortid.generate();
      const shortUrl = `${req.protocol}://${req.get("host")}/${urlCode}`;
      const data = {
        originalUrl,
        shortUrl,
        urlCode,
      };
      const response = await createShortUrl(data);
      return res.response.success(response, "url short");
    }
  } catch (error) {
    errorResponseHandler(res, error);
  }
};

exports.getSortUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await getUrlByCode(code);
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.response.fail(null, "No URL found", {});
    }
  } catch (error) {
    errorResponseHandler(res, error);
  }
};
