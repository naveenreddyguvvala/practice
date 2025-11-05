const axios = require('axios');

(async () => {
  const url = 'http://localhost:3000';
  try {
    const res = await axios.get(url);
    if (res.data.includes('Hello World')) {
      console.log('✅ Test passed: Hello World response received');
    } else {
      console.error('❌ Test failed: Unexpected response');
    }
  } catch (error) {
    console.error('❌ Test failed: Server not responding');
    console.error(error.message);
  }
})();
