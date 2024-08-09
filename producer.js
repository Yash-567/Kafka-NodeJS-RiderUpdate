const {kafka} = require('./client');

async function init() {
    const producer = kafka.producer();

    console.log("Connecting producer ... ")
    await producer.connect();
    console.log("Producer connected successfully!")

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                partition: 0,
                key: 'location-updates',
                value: JSON.stringify({name: "Tony Stark", loc: "SOUTH"})
            }
        ]
    })

    await producer.disconnect();
}

init();