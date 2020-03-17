const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const cors = require('cors')

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

// const config = require('./config/config')
const multipleUpload = multer({ storage: storage }).array('file');

// const linkhalf = "";

// !!Add configuration keys here
const BUCKET_NAME = 'config.bucketName';
const IAM_USER_KEY = 'config.accessKeyId';
const IAM_USER_SECRET = 'config.secretAccessKey';

router.use(cors());
router.post('/upload', multipleUpload, function (req, res) {
    const file = req.files;

    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        region: config.region
    });

    s3bucket.createBucket(function () {
        var ResponseData = [];
        var u = uuidv4()

        file.map((item) => {
            var params = {
                Bucket: BUCKET_NAME,
                Key: u + item.originalname,
                Body: item.buffer,
                ACL: 'public-read',
                uuid: u,
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    res.json({ "error": true, "Message": err });
                } else {
                    data.uuid = u;
                    ResponseData.push(data);

                    if (ResponseData.length == file.length) {
                        res.json({
                            "error": false,
                            "Message": "File Uploaded SuceesFully",
                            Data: ResponseData
                        });
                    }
                }
            });

        });

    });

});

module.exports = router;