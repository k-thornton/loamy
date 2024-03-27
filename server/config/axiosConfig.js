const axios = require('axios');

const chatServiceClient = axios.create({
  baseURL: process.env.CHAT_SERVICE_BASE_URL || 'http://127.0.0.1:7000',
});

const calcServiceClient = axios.create({
  baseURL: process.env.CALC_SERVICE_BASE_URL || 'http://127.0.0.1:6000',
});

module.exports = {
    chatServiceClient,
    calcServiceClient,
};
