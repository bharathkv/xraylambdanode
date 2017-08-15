
var AWSXRay = require("aws-xray-sdk-core");
var AWS = AWSXRay.captureAWS(require('aws-sdk'));

s3 = new AWS.S3({signatureVersion: 'v4'});

 
exports.handler = (event, context, callback) => {
 
 AWSXRay.captureFunc('annotations', function(subsegment){
    subsegment.addAnnotation('Name', 'vbk');
    subsegment.addAnnotation('UserID', 'vbk1');
  });
    
    var params = {Bucket: 'testvbk', Key: 'lambda', Body: 'body'};
 
    s3.putObject(params, function(err, data) {
        if (err)
          {  console.log(err) }
        else {
          console.log('success!') 
        }
    });
};
