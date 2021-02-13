const multer = require('multer');

var storage = multer.diskStorage({
  destination: './public/img/users',
  filename: function (req, file, cb) {
      switch (file.mimetype) {
          case 'image/jpeg':
              ext = '.jpeg';
              break;
          case 'image/png':
              ext = '.png';
              break;
      }
      cb(null, file.originalname + '-' + Date.now() + ext);
  }
});
const upload = multer({ storage : storage});

module.exports = upload;