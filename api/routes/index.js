const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// multer
const upload = multer({ dest: '/tmp' });       // Uploaded files are temporarily stored in /tmp directory. You later upload this  file from /tmp to Cloudinary.
// Multer creates a file object like:
// {
//   fieldname,
//   originalname,
//   encoding,
//   mimetype,
//   destination,
//   filename,
//   path,
//   size
// }


router.get('/', (req, res) => {
  res.status(200).json({
    greeting: 'Hello from airbnb-clone api',
  });
});

// upload photo using image url
router.post('/upload-by-link', async (req, res) => {
  try {
    const { link } = req.body;
    let result = await cloudinary.uploader.upload(link, {
      folder: 'Airbnb/Places',
    });
    res.json(result.secure_url);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

// upload images from local device
router.post('/upload', upload.array('photos', 100), async (req, res) => {
  try {
    let imageArray = [];

    for (let index = 0; index < req.files.length; index++) {           // req.files → array of uploaded files created by Multer
      let { path } = req.files[index];
      let result = await cloudinary.uploader.upload(path, {
        folder: 'Airbnb/Places',
      });
      imageArray.push(result.secure_url);
    }

    res.status(200).json(imageArray);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({
      error,
      message: 'Internal server error',
    });
  }
});

router.use('/user', require('./user'));
router.use('/places', require('./place'));
router.use('/bookings', require('./booking'));

module.exports = router;
