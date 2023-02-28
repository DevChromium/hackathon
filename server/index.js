const express = require('express');
const bodyParser = require('body-parser');
const { NFC } = require('nfc-pcsc');

const app = express();
const nfc = new NFC();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.post('/nfc', (req, res) => {
  const { nfcData } = req.body;

  // Process the NFC data here
  nfc.on('reader', async (reader) => {
    console.log(`${reader.reader.name}  device attached`);

    const response = await reader.transmit(Buffer.from(nfcData, 'hex'));
    console.log(`Received response: ${response.toString('hex')}`);

    res.send(`Received NFC data: ${nfcData}, Response: ${response.toString('hex')}`);

    console.log(`${reader.reader.name}  device removed`);
  });

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
