/**
 * Created by ThinKloud on 1/7/2016.
 */
var AWS = require('aws-sdk');
import jwt from 'jsonwebtoken';

var Crypto = require('crypto');
var buffer = require('buffer').Buffer;

var bucketName = 'arzaq';


module.exports = {
  uploadToBucket: function (fileData, filename) {

    var webAccess = 'https://' + bucketName + '.s3.amazonaws.com/' + filename;
    var buf = new Buffer(fileData.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    AWS.config.update(
      {
        accessKeyId: 'AKIAINBHRMTWYKYA2UIA',
        secretAccessKey: 'lJJzv4GIQq5nOTfNwBVp6qxrAJGXP0GAMjz6Hu6F'
      }
    );
    var s3bucket = new AWS.S3();
    var params = {
      Bucket: bucketName,
      Key: filename,
      ContentType: 'image/png',
      Body: buf,
      ContentEncoding: 'base64'
    };
    s3bucket.putObject(params, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Image uploaded to S3: ' + webAccess);
      }
    });
    return webAccess;
  },
  getS3Policy: function (fileInfo) {
    var credentials = {
      accessKeyId: 'AKIAINBHRMTWYKYA2UIA',
      secretAccessKey: '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'
    };
    var secret = 'image'
    var token = jwt.sign({img: 'image'}, secret);

    var fileName = fileInfo.folder + '/' + token + '.png';
    var params = {
      Bucket: bucketName,
      Key: fileName,
      ContentType: 'image/png',
      ContentEncoding: 'base64'
    };
    return {credentials: credentials, params: params};
  }
}

