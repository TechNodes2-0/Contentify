const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} now`);
});
