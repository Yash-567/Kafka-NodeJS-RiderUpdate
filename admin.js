const {kafka} = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting ... ");
    await admin.connect();
    console.log("Admin connection success...")


    console.log("Creating topics [rider-updates]")
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2
        }]
    })
    console.log("Topics created [rider-updates]");

    await admin.disconnect();
    console.log("Admin disconnected")
}

init();