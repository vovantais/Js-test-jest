const axios = require('axios');

class Ajax {

    static async get() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
        } catch(err) {
            console.log('err ', err);
            throw new Error(err);
        }
    }
}

module.exports = Ajax;