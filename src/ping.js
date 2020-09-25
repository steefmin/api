export async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Pong ${Math.floor(Math.random() * 10)}` })
    };
}
