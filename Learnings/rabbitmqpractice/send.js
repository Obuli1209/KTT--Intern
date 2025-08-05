const amqp = require('amqplib');

async function send(){
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'my_queue';
    const message = 'Hello, i am from sender';

    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));
    // Buffer.from() used for converting string or json object to binary. Because rabbitmq handle only raw binary data.

    console.log("Sent: ", message);
    await channel.close();
    await connection.close();
}
send();