import express from "express"
import cors from "cors"
import bodyparser from "body-parser"

const app = express();
const students = new Set();

// Enable CORS middleware
app.use(cors());
app.use(bodyparser.json())

// Define routes
app.get('/', (req, res) => {
    res.send('Main');
});

app.get('/api/getStudents', (req, res) => {
    let temp = [...students]
    console.log(temp)
    res.send(JSON.stringify(temp));
})

app.post('/api/postStudent', (req, res) => {
    let body = req.body;
    students.add(body);
    console.log(students)
    res.send("Data received")
})

// Start server
app.listen(1337, () => {
    console.log('Server listening on port 1337');
});
