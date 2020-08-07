const AWS = require('aws-sdk');
const sns = new AWS.SNS();
const parseDynamoDBEvent = require('./parse-dynamodb-event');
const TOPIC_ARN = process.env.TOPIC_ARN;

exports.handler = (event) => {
  let dbEntries = parseDynamoDBEvent(event);
  return Promise.all(dbEntries.map(saveToSNS));
};

saveToSNS = async (data) => {
  if (!data) return Promise.resolve();
  try {
    return await sns.publish({ 
      Message: JSON.stringify(data), 
      TopicArn: TOPIC_ARN 
    }).promise()
  } catch (err) {
    console.log(err);
    throw err;
  }
};
