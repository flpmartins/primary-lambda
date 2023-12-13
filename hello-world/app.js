exports.lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err)

        return {
            'statusCode': 500,
            'boby': JSON.stringify({
                message: err
            })
        }
    }
};
