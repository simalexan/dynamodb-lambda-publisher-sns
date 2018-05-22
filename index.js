const AWS = require('aws-sdk');
const sns = new AWS.SNS();
const uuidv4 = require('uuid/v4');
const parseDynamoDBEvent = require('./parse-dynamodb-event');
const TOPIC_ARN = process.env.TOPIC_ARN;

exports.handler = (event) => {
    let dbEvent = parseDynamoDBEvent(event);
    return saveToSNS(dbEvent);
};

saveToSNS = (data) => {
    if (!data) {
        return Promise.resolve();
    }
    return sns.publish({
        Message: JSON.stringify(data),
        TopicArn: TOPIC_ARN
    })
    .promise()
    .catch(err => {
        console.log(err);
        return err;
    });
};