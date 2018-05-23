module.exports = (event) => {
	if (!event || !event.Records || !Array.isArray(event.Records)) {
		return [];
  }
  let extractDynamoDBEntry = record => record.dynamodb && record.dynamodb.NewImage;
	return event.Records.map(extractDynamoDBEntry).filter(entry => entry);
};
