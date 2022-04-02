import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Server On' })
})

app.listen(3333);