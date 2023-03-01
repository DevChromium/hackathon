import { findByIds } from 'usb';

const nfcDevice =  findByIds(1046,45104);

if (!nfcDevice) {
  console.error('NFC device not found');
  process.exit(1);
}

nfcDevice.open();

const interfaceNumber = 0; // or the interface number you want to use
const nfcInterface = nfcDevice.interfaces[interfaceNumber];
nfcInterface.claim();

const endpointNumber = 0; // or the endpoint number you want to use
const endpoint = nfcInterface.endpoints[endpointNumber];

// Send and receive data using the endpoint
const dataTransfer = endpoint.transfer(512, (data) => {console.log(`callback; ${data}`)});
dataTransfer.on('data',(data) => {

    let student = { naam: "Gilles Covens", klas: '2NET' }
    fetch('localhost:1337/api/postStudent', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error('There was a problem sending the data:', error);
            });            
})
    

dataTransfer.on('error',(error) => {
    console.log(`received error: ${error}`);
})

endpoint.startPoll();

process.on('SIGINT', () => {
    endpoint.stopPoll(() => {
        nfcInterface.release(() => nfcDevice.close());
    });
});