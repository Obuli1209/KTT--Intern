const amqp = require('amqplib');

async function receive(){
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'my_queue';

    await channel.assertQueue(queue);

    console.log("Waiting for the messages...");

    channel.consume(queue, (msg)=>{
        if(msg!== null){
            console.log("Received: ", msg.content.toString());
            channel.ack(msg);
        }
    });
}
receive();