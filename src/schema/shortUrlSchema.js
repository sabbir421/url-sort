const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      Required: true,
    },
    urlCode: {
      type: String,
      Required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdOn",
      updatedAt: "updatedOn",
    },
  }
);
const ShortUrl = mongoose.model("ShortUrl", UrlSchema);
module.exports = ShortUrl;
