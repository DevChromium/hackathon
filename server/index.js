const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});






app.post('/nfc', (req, res) => {
  const { nfcData } = req.body;
  // Process the NFC data here
  res.send(`Received NFC data: ${nfcData}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});