const { createClient } = require('redis');

// const client = createClient().connect();

const connectRedis = async () => {
  try {
    const client = createClient();
    await client.connect();
    console.log('Redis is connected...');
    return client;
    // await client.quit();
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectRedis;

// const client = redis
//   .createClient({
//     port: 6379,
//     host: '127.0.0.1',
//   })
//   .connect();

// client.on('connect', () => {
//   console.log('Client connected to redis...');
// });

// client.on('ready', () => {
//   console.log('Client connected to redis and ready to use...');
// });

// client.on('error', (err) => {
//   console.log(err.message);
// });

// client.on('end', () => {
//   console.log('client is disconnected from redis');
// });

// process.on('SIGINT', () => {
//   client.quit();
// });
