// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
    endpoint: 'http://'+ process.env.LOCALSTACK_HOSTNAME + ':4566',
    accessKeyId: 'test',
    secretAccessKey: 'test',
    region: process.env.AWS_REGION,
});
export { ddbClient };