
# DynamoDB -> Lambda -> SNS

## Description

This is a Lambda publisher that listens to stored items to your DynamoDB table and publishes a message to a SNS topic. 

Written in Node.js. 
This is a serverless component consisting of:

- a DynamoDB table, where all your data is stored and on each entry it sends an event to Lambda
- a Lambda function, that processes that data and publishes it to SNS
- a SNS topic

Aside from this main functionality, its important features are:

- Supports CORS
- Written in Node.js

## Latest Release - 2.0.0

Upgrading the Node.js release to 12.x LTS

## Future Release

Switch to AWS CDK

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- TypeScript
- Potentially converting to an AWS CDK component on SAR
- ESLint
- Tests
