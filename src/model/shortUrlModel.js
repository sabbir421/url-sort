const ShortUrl = require("../schema/shortUrlSchema");

exports.createShortUrl = async (data) => {
  const url = new ShortUrl(data);
  return url.save();
};

exports.getUrl = async (orginalUrl) =>
  ShortUrl.findOne({ orginalUrl: orginalUrl });

exports.getUrlByCode = async (code) => ShortUrl.findOne({ urlCode: code });
