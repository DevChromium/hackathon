import express from "express"
import cors from "cors"
import bodyparser from "body-parser"

const app = express();
const students = []

// Enable CORS middleware
app.use(cors());
app.use(bodyparser.json())

// Define routes
app.get('/', (req, res) => {
    res.send('Main');
});

app.get('/api/getStudents', (req, res) => {
    res.send(JSON.stringify(students));
})

app.post('/api/postStudent', (req, res) => {
    let body = req.body;
    students.push(body)
    console.log(body)
    res.send("Data received")
})

// Start server
app.listen(1337, () => {
    console.log('Server listening on port 1337');
});
