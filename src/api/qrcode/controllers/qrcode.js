"use strict";
const QRCode = require("qrcode-generator");

module.exports = {
  generate: async (ctx, next) => {
    try {
      const { data } = ctx.request.query;
<<<<<<< HEAD
      const qr = QRCode(3, "H");
      qr.addData(data);
      qr.make();
      const qrImage = qr.createDataURL(8);
<<<<<<< HEAD
      // ctx.body = `<img src="${qrImage}" style="height:800px" />`;
      ctx.body = { data: qrImage };
=======
      ctx.body = `<img src="${qrImage}" style="height:800px" />`;
>>>>>>> 82fcc7f4679b8d909c3e321178dc4732156cf674
=======
      console.log(data);
      const qrImage = await QRCode.toDataURL(data);

      ctx.body = {
        qrImage,
      };
>>>>>>> parent of 387c3a1 (Qr update)
    } catch (err) {
      ctx.body = err;
    }
  },
};
