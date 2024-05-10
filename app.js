const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todos = [];

app.get('/', (req, res) => {
    res.send('Welcome to the Todo List App!');
});

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
    console.log(req.body); 
    todos.push(req.body.todo);
    res.status(201).send();
});


app.post('/todos', (req, res) => {
    todos.push(req.body.todo);
    res.status(201).send();
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < todos.length) {
        todos.splice(id, 1); 
        res.status(200).send(`Deleted todo at index ${id}`);
    } else {
        res.status(404).send('Todo not found');
    }
});

