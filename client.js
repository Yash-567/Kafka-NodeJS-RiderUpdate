const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['10.0.0.42:9092'],
})