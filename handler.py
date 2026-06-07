def handler(event, context):
    print("Lambda API invoked:", event)
    return {"statusCode": 200, "body": "RapYard AWS Lambda API online"}
