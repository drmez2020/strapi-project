"use strict";
const QRCode = require("qrcode");

module.exports = {
  generate: async (ctx, next) => {
    try {
      const { data } = ctx.request.query;
      console.log(data);
      const qrImage = await QRCode.toDataURL(data);

      ctx.body = {
        qrImage,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
